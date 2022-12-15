import React from "react";

// component imports
import CreateQuiz from "../components/CreateQuiz";
import Statistics from "../components/Statistics";

const AdminHome = () => {
  const [view, setView] = React.useState("Create Quiz");

  const viewIsCreateQuiz = view === "Create Quiz";
  const viewIsStatistics = view === "Statistics";

  return (
    <div className="w-full h-screen flex">
      <div className="w-[350px] border-[1px] border-gray-200 p-4">
        <div className="mb-8 p-2">
          <h1 className="text-center font-bold">Dashboard</h1>
        </div>
        <div
          className={`p-2 bg-gray-100 mb-4 rounded-md cursor-pointer transition-all ${
            viewIsCreateQuiz ? "bg-zinc-600 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => setView("Create Quiz")}
        >
          <span>Create Quiz</span>
        </div>
        <div
          className={`p-2 bg-gray-100 mb-4 rounded-md cursor-pointer transition-all ${
            viewIsStatistics ? "bg-zinc-600 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => setView("Statistics")}
        >
          <span>Statistics</span>
        </div>
      </div>
      {viewIsCreateQuiz && <CreateQuiz />}
      {viewIsStatistics && <Statistics />}
    </div>
  );
};

export default AdminHome;
