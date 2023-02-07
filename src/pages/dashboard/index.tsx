import Image from "next/image";
import React from "react";
import Profile from "../../../public/images/36ab4ac1-e3cb-4dbc-aa44-59447fcb2afe.jpg";
import Header from "components/header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center">
          <div>Profile</div>
          <Image src={Profile} alt="profile" className="h-auto w-72"></Image>
        </div>
        <div>About me</div>
      </main>
    </>
  );
}
