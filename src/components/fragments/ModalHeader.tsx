import React from "react";

type ModalProps = {
  headerButton: string;
};

interface ModalContent {
  [index: string]: string[];
  About: string[];
  Experience: string[];
  Project: string[];
  Contact: string[];
}

const content: ModalContent = {
  About: ["Name", "Age", "Education"],
  Experience: ["Fulltime", "Freelance"],
  Project: ["Commercial", "Side", "Private"],
  Contact: ["Instagram", "Whatsapp", "Mobile", "Linkedin"],
};

export default function ModalHeader({ headerButton }: ModalProps) {
  const clickHandler = (item: string, button: string) => {
    if (button === "About") {
      // item === content[button] ? "" : ""
    }
    if (button === "Experience") {
    }
    if (button === "Project") {
    }
    if (button === "Contact") {
    }
  };
  return (
    <>
      <div className="absolute -left-0 top-20  border-2 border-white hovering-navbar">
        {content[headerButton].map((item, idx) => {
          return (
            <>
              <div key={idx}>{item}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
