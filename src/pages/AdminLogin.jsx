import React from "react";
import { useNavigate } from "react-router-dom";

// constant imports
import credentials from "../constants/admin_credentials";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [kerb, setKerb] = React.useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (credentials.has(kerb)) navigate("/admin-dashboard");
    else alert("Incorrect kerb!");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form action="" className="p-8 border-[1px] rounded-md w-1/4">
        <div className="flex flex-col mb-8">
          <label htmlFor="Kerb" className="mb-2">
            Kerberos
          </label>
          <input
            type="text"
            placeholder="Kerb"
            className="p-2 focus:outline-none bg-gray-100 rounded-md"
            onChange={(e) => setKerb(e.target.value)}
          />
        </div>
        <button
          className="w-full p-2 bg-blue-400 rounded-md text-white"
          onClick={onLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
