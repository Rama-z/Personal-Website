import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";
// import Header from "components/header/index";
import Sidebar from "components/sidebar";
import { useDispatch, useSelector } from "src/redux/store";
import { userAction } from "src/redux/slices/userSlice";

export default function Index() {
  const DynamicHeader = dynamic(() => import("src/components/header/"), {
    ssr: false,
  });
  const dispatch = useDispatch();
  const inputRef = useRef();
  const auth = useSelector((state) => state.auth);
  console.log(auth.email);
  useEffect(() => {
    dispatch(userAction.getUserHistoryThunk(auth.token));
  }, [dispatch]);
  return (
    <>
      <DynamicHeader />
      <Sidebar />
      <main className="ml-32 m-auto">
        <div className="flex flex-col h-screen mr-5">
          <div className="border-2 border-white h-1/2">
            <div>Profile</div>
          </div>
          <div>
            <div>Testing Selector</div>
            <div>{auth.email}</div>
            <div>{auth.id}</div>
            <div>{auth.token}</div>
          </div>
          <div className="border-2 border-white h-1/2">
            <div>Skills</div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}
