import React from "react";

// package imports
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";

// graphql imports
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const CreateQuiz = () => {
  const [words, setWords] = React.useState({
    first: "",
    second: "",
  });
  const [currPairs, setCurrPairs] = React.useState(new Set());
  const [pairs, setPairs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const updateWords = (e, field) =>
    setWords((prevState) => ({ ...prevState, [field]: e.target.value }));

  const onAdd = (e) => {
    e.preventDefault();
    if (words.first === "") {
      alert("First Word Field Empty Bruh");
      return;
    }
    if (words.second === "") {
      alert("Second Word Field Empty Bruh");
      return;
    }

    const pair = words.first + " " + words.second;
    var tempPairs = new Set([...currPairs]);
    tempPairs.add(pair);
    setCurrPairs(tempPairs);

    var seen = null;
    if (currPairs.has(pair)) seen = true;
    else seen = false;
    console.log(pair, seen);

    setPairs((prevState) => [
      ...prevState,
      [words.first, words.second, seen, 0],
    ]);

    setWords({
      first: "",
      second: "",
    });
  };

  const onRemove = (index) => {
    var tempCurrPairs = new Set();
    var tempPairs = [];
    for (let i = 0; i < pairs.length; i++) {
      if (i !== index) {
        var seen = null;
        if (tempCurrPairs.has(pairs[i][0] + " " + pairs[i][1])) seen = true;
        else seen = false;
        tempCurrPairs.add(pairs[i][0] + " " + pairs[i][1]);
        tempPairs.push([pairs[i][0], pairs[i][1], seen, 0]);
      }
    }
    setCurrPairs(tempCurrPairs);
    setPairs(tempPairs);
  };

  const onSave = async () => {
    if (pairs.length === 0) {
      alert("Bro make a quiz");
      return;
    }
    setLoading((prevState) => !prevState);
    document.body.style.cursor = "wait";
    const quizId = uuid();
    const newQuiz = await API.graphql({
      query: mutations.createQuiz,
      variables: {
        input: {
          id: quizId,
          quiz: JSON.stringify(pairs),
          submissions: 0,
        },
      },
    });
    console.log("newQuiz:", newQuiz);
    const allQuizzes = await API.graphql({ query: queries.listDefaultQuizs });
    if (allQuizzes.data.listDefaultQuizs.items.length === 0) {
      const newDefaultQuiz = await API.graphql({
        query: mutations.createDefaultQuiz,
        variables: {
          input: {
            id: uuid(),
            quizId,
          },
        },
      });
      console.log("newDefaultQuiz", newDefaultQuiz);
    } else {
      const updatedDefaultQuiz = await API.graphql({
        query: mutations.updateDefaultQuiz,
        variables: {
          input: {
            id: allQuizzes.data.listDefaultQuizs.items[0].id,
            quizId,
          },
        },
      });
      console.log("updatedDefaultQuiz", updatedDefaultQuiz);
    }
    setLoading((prevState) => !prevState);
    document.body.style.cursor = "default";
    setCurrPairs(new Set());
    setPairs([]);
  };

  React.useEffect(() => {
    console.log(pairs, currPairs);
  }, [pairs, currPairs]);

  return (
    <div className="flex-1 h-full flex flex-col items-center p-16 overflow-auto">
      <form
        className="mb-8"
        style={{
          width: "100%",
        }}
      >
        <div className="flex mb-4">
          <div className="flex-1 flex flex-col mr-2">
            {/* <label htmlFor="First Word">First Word</label> */}
            <input
              value={words.first}
              type="text"
              placeholder="first word"
              className="p-2 focus:outline-none bg-gray-100 rounded-md"
              onChange={(e) => updateWords(e, "first")}
            />
          </div>
          <div className="flex-1 flex flex-col ml-2">
            {/* <label htmlFor="Second Word">Second Word</label> */}
            <input
              value={words.second}
              type="text"
              placeholder="second word"
              className="p-2 focus:outline-none bg-gray-100 rounded-md"
              onChange={(e) => updateWords(e, "second")}
            />
          </div>
        </div>
        <button
          className="w-full p-2 bg-blue-400 rounded-md text-white"
          onClick={onAdd}
        >
          Add
        </button>
      </form>

      <div className="w-full mb-4">
        {pairs.map(([first, second, seen], index) => {
          return (
            <div key={index} className="mb-2 flex">
              <div className="p-2 rounded-md mx-2 bg-gray-100 w-1/2">
                {first}
              </div>
              <div className="p-2 rounded-md mx-2 bg-gray-100 w-1/2">
                {second}
              </div>
              <button
                className="p-2 rounded-md bg-red-400 text-white"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <button
        className={`p-2 w-full rounded-md bg-emerald-400 text-white ${
          loading && "pointer-events-none opacity-50"
        }`}
        onClick={onSave}
      >
        Save Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
