import React from "react";

interface IChildren {
  children: React.ReactNode;
}

const PreloadContext = React.createContext<boolean>(false);

export default function PreloadProvider({ children }: IChildren) {
  // If the DOM is loaded
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div className={`${preloaded && "opacity-0"}`} />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);
