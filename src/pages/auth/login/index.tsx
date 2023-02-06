import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "src/redux/slices/authSlices";
import { AppDispatch } from "src/redux/store";
export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [body, setBody] = useState({});
  const changeHandler = (e: any) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>Login Page</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          dispatch(authAction.authLoginThunk(body));
        }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <input
          type="text"
          name="email"
          className="p-4 m-2 rounded-3xl"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          className="p-4 m-2 rounded-3xl "
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="px-10 py-2 m-2 border-white border-2 rounded-3xl"
        >
          Login
        </button>
      </form>
    </>
  );
}
