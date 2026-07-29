import { useEffect } from "react";

export function useTabTitle() {
  useEffect(() => {
    const originalTitle = document.title || "Harshit Shukla — Developer Portfolio";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Harshit Shukla — Come back! 👀";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
}
