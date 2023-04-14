import { MutableRefObject, RefObject } from "react";

export const useScrollBehavior = (
  trialRef: MutableRefObject<any> | RefObject<any>
) => {
  return window.scrollTo({
    behavior: "smooth",
    top: trialRef.current?.offsetTop,
    left: 0,
  });
};
