import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import styles from "styles/Home.module.css";
import Header from "components/header/index";
import Sidebar from "components/sidebar";
import { useDispatch, useSelector } from "src/redux/store";
import { userAction } from "src/redux/slices/userSlice";
import Head from "next/head";
import Home from "../home";

export default function Index() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(userAction.getUserHistoryThunk(auth.token));
  }, [dispatch, auth.token]);
  return (
    <>
      <Home />
      {/* <main className="ml-32 m-auto dark:bg-slate-400">
        <div className="flex flex-col h-screen mr-5">
          <div className="border-2 border-white h-1/2">
            <div>Profile</div>
          </div>
          <div>
            <div className="dark:text-gray-100 text-gray-900">
              Testing Selector
            </div>
            <div>{auth.email}</div>
            <div>{auth.id}</div>
            <div>{auth.token}</div>
          </div>
          <div className="border-2 border-white h-1/2">
            <div>Skills</div>
            <div></div>
          </div>
        </div>
      </main> */}
    </>
  );
}
