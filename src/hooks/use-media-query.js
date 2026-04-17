import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const result = window.matchMedia(query);

    function onChange() {
      setValue(result.matches);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(result.matches);

    result.addEventListener("change", onChange);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}
