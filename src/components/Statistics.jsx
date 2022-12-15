import React from "react";

// package imports
import { API } from "aws-amplify";

// graphql imports
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const Statistics = () => {
  const [defaultId, setDefaultId] = React.useState("");
  const [defaultQuizId, setDefaultQuizId] = React.useState("");
  const [quizzes, setQuizzes] = React.useState([]);
  const [stats, setStats] = React.useState(null);

  React.useEffect(() => {
    const fetchDefaultQuiz = async () => {
      const allQuizzes = await API.graphql({
        query: queries.listDefaultQuizs,
      });
      setDefaultQuizId(allQuizzes.data.listDefaultQuizs.items[0].quizId);
      setDefaultId(allQuizzes.data.listDefaultQuizs.items[0].id);
    };
    const fetchAllQuizzes = async () => {
      const allQuizzes = await API.graphql({
        query: queries.listQuizzes,
      });
      console.log(allQuizzes);
      setQuizzes(allQuizzes.data.listQuizzes.items);
    };
    fetchAllQuizzes();
    fetchDefaultQuiz();
  }, []);

  React.useEffect(() => {
    if (quizzes.length !== 0) {
      for (let i = 0; i < quizzes.length; i++) {
        if (quizzes[i].id === defaultQuizId) {
          setStats(quizzes[i]);
        }
      }
    }
  }, [quizzes, defaultQuizId]);

  React.useEffect(() => {
    console.log(stats);
  }, [stats]);

  const onRunQuiz = async (quizId) => {
    const updatedDefaultQuiz = await API.graphql({
      query: mutations.updateDefaultQuiz,
      variables: {
        input: {
          id: defaultId,
          quizId,
        },
      },
    });
    console.log("updatedDefaultQuiz", updatedDefaultQuiz);
    setDefaultQuizId(quizId);
  };

  return (
    <div className="flex-1 h-screen p-16 overflow-auto">
      <div className="mb-8">
        <h1 className="mb-4 font-bold">Quizzes</h1>
        <div className="flex gap-4 flex-wrap">
          {quizzes.length !== 0 &&
            quizzes.map(({ id, submissions, quiz }, index) => {
              const selected = id === defaultQuizId;
              return (
                <div
                  className="p-2 bg-gray-100 rounded-md border-[1px]"
                  key={index}
                  style={{
                    height: "fit-content",
                  }}
                >
                  <div>
                    <span className="font-semibold">Id: </span>
                    <span>{id}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Submissions: </span>
                    <span>{submissions}</span>
                  </div>
                  <div>
                    <span className="font-semibold">In use: </span>
                    <span>{selected ? "Yes" : "No"}</span>
                  </div>
                  <div className="mt-4">
                    <button
                      className="p-2 rounded-md w-full bg-blue-400 text-white font-semibold"
                      onClick={() => {
                        setStats({ id, submissions, quiz });
                      }}
                    >
                      Show Stats
                    </button>
                  </div>
                  <div className="mt-4">
                    <button
                      className="p-2 rounded-md w-full bg-green-400 text-white font-semibold"
                      onClick={() => onRunQuiz(id)}
                    >
                      Run This Quiz
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <h1 className="mb-4 font-bold">Stats</h1>
        {stats && (
          <div>
            <div className="flex gap-4 mb-2">
              <div className="p-2 bg-gray-400 text-white rounded-md flex-1 text-center">
                <span className="font-semibold">First Word</span>
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-md flex-1 text-center">
                <span className="font-semibold">Second Word</span>
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-md flex-1 text-center">
                <span className="font-semibold">
                  Number of Peeps That Got it Correct
                </span>
              </div>
            </div>
            {JSON.parse(stats.quiz).map(
              ([first, second, seen, count], index) => {
                return (
                  <div className="flex gap-4 mb-2" key={index}>
                    <div className="p-2 bg-gray-200 rounded-md flex-1 text-center">
                      <span>{first}</span>
                    </div>
                    <div className="p-2 bg-gray-200 rounded-md flex-1 text-center">
                      <span>{second}</span>
                    </div>
                    <div className="p-2 bg-gray-200 rounded-md flex-1 text-center">
                      <span>{count}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
