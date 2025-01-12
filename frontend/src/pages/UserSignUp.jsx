import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-14 mb-3"
          src="data:image/png;base64,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"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium  mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>{" "}
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceding,you consent to grt calls,whatsapp or sms message,
          including byautomated means, from Uber and its affiliated to the
          number provided
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
