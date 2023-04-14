import React from "react";

type HeaderProps = {
  buttons: string;
  dataFade: number;
};

export default function HeaderButton(props: HeaderProps) {
  return (
    <>
      <li
        className="list-none px-5 cursor-pointer select-none"
        data-fade={props.dataFade.toString()}
      >
        {props.buttons}
      </li>
    </>
  );
}
