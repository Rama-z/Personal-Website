import { MutableRefObject, RefObject } from "react";

export const useScrollBehavior = (
  ref: MutableRefObject<any> | RefObject<any>
) => {
  window.scrollTo({
    behavior: "smooth",
    top: ref.current?.offsetTop,
    left: 0,
  });
};
