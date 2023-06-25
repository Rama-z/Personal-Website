import ModalHeader from "components/fragments/ModalHeader";
import React, { useState } from "react";

type HeaderProps = {
  buttons: string;
  dataFade: number;
};

export default function HeaderButton(props: HeaderProps) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <li
        className="relative list-none px-5 cursor-pointer select-none border-2 border-white py-7"
        data-fade={props.dataFade.toString()}
        onMouseOver={() => {
          setModal(true);
        }}
        onMouseOut={() => {
          setModal(false);
        }}
      >
        {modal && <ModalHeader headerButton={props.buttons} />}
        {props.buttons}
      </li>
    </>
  );
}
