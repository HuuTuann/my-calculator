import { useEffect, useState } from "react";

export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHydrated(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isHydrated;
}
