import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
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

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-12 mb-3"
          src="https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
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
          <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignUp;
