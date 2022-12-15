import React from "react";

// package imports
import { API, graphqlOperation } from "aws-amplify/lib-esm";

// graphql imports
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

const Game = () => {
  const [quizId, setQuizId] = React.useState(null);
  const [quiz, setQuiz] = React.useState([]);
  const [submissions, setSubmissions] = React.useState(0);
  const [q, setQ] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  React.useEffect(() => {
    const fetchDefaultQuiz = async () => {
      const allQuizzes = await API.graphql({
        query: queries.listDefaultQuizs,
      });
      setQuizId(allQuizzes.data.listDefaultQuizs.items[0].quizId);
    };
    fetchDefaultQuiz();
  }, []);

  React.useEffect(() => {
    const fetchQuiz = async () => {
      if (quizId !== null) {
        const oneQuiz = await API.graphql(
          graphqlOperation(queries.getQuiz, { id: quizId })
        );
        setQuiz(JSON.parse(oneQuiz.data.getQuiz.quiz));
        setSubmissions(JSON.parse(oneQuiz.data.getQuiz.submissions));
      }
    };
    fetchQuiz();
  }, [quizId]);

  React.useEffect(() => {
    if (quiz.length !== 0) {
      console.log(quiz);
    }
  }, [quiz]);

  const onSubmit = async (type) => {
    // eslint-disable-next-line
    const [first, second, seen, count] = quiz[q];
    var tempQuiz = [...quiz];
    var tempCount = count;
    if (seen === type) {
      tempQuiz[q][3] = tempCount + 1;
      setCorrect((prevState) => prevState + 1);
    }
    setQuiz(tempQuiz);
    if (q === quiz.length - 1) {
      const updatedQuiz = await API.graphql({
        query: mutations.updateQuiz,
        variables: {
          input: {
            id: quizId,
            quiz: JSON.stringify(quiz),
            submissions: submissions + 1,
          },
        },
      });
      console.log(updatedQuiz);
    }
    setQ((prevState) => prevState + 1);
  };

  return (
    <div className="w-full h-screen flex justify-center p-16">
      <div className="w-1/2">
        {quiz.length !== 0 && q < quiz.length && (
          <>
            <p className="mb-16">
              If you have seen this pair of word in this exact order, click
              'Seen'. If not, click 'Nope'
            </p>
            <div className="flex gap-4 mb-8">
              <div className="w-1/2 p-2 text-center bg-gray-200 rounded-md mb-2">
                {quiz[q][0]}
              </div>
              <div className="w-1/2 p-2 text-center bg-gray-200 rounded-md mb-2">
                {quiz[q][1]}
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="p-2 w-1/2 bg-green-400 text-white rounded-md font-bold"
                onClick={() => onSubmit(true)}
              >
                Seen
              </button>
              <button
                className="p-2 w-1/2 bg-red-400 text-white rounded-md font-bold"
                onClick={() => onSubmit(false)}
              >
                Nope
              </button>
            </div>
          </>
        )}
        {quiz.length !== 0 && quiz.length === q && (
          <div className="font-semibold">
            Thanks for participating! You got {correct} out of {quiz.length}{" "}
            correct! You may close the window now.
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
