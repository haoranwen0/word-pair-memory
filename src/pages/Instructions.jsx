import React from "react";

// package imports
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center p-16">
      <div className="w-1/2">
        {/* <p className="mb-4">
          Welcome! In the follow game, you will see a sequence of pair of words.
          If you have seen the words in that exact sequence before, click the
          <span className="font-bold text-green-600"> Seen</span> button. If
          not, click the <span className="font-bold text-red-600">Nope</span>{" "}
          button. There are a total of 60 word pairs.{" "}
          <span className="font-bold">ACCURACY IS MOST IMPORTANT</span>, but try
          to react as fast as possible. <span className="font-bold">DON'T</span>{" "}
          overthink it. Once you're ready, click Start in begin!
        </p> */}
        <p className="mb-4">
          Welcome! In the follow game, you will see a sequence of pair of words.
          If a sequence of words is repeated while{" "}
          <span className="font-bold">IN THE GAME</span>, click the{" "}
          <span className="font-bold text-green-600">Seen</span> button. If not,
          click the <span className="font-bold text-red-600">Nope</span> button.
          There are a total of 60 word pairs.{" "}
          <span className="font-bold">ACCURACY IS MOST IMPORTANT</span>, but try
          to react as fast as possible. <span className="font-bold">DON'T</span>{" "}
          overthink it. Once you're ready, click Start in begin!
        </p>
        <p className="mb-16">
          If you have any problems during the game, please email{" "}
          <span className="underline">raba@mit.edu</span>
        </p>
        <button
          className="p-2 w-full bg-blue-400 text-white rounded-md"
          onClick={() => {
            navigate("/game");
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Instructions;
