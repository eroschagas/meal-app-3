import { useEffect, useRef, useState } from "react";

// const isObjEqual = (ObjA, ObjB) => {
//   return JSON.stringify(ObjA) === JSON.stringify(ObjB);
// };

export const useFetch = (url, opt) => {
  const [data, setData] = useState([]);
  const optRef = useRef(opt);

  useEffect(() => {
    const fetchData = async () => {
      //   await new Promise((r) => setTimeout(r, 100000));
      const response = await fetch(url);
      const json = await response.json();
      const result = json[optRef.current];
      setData(result);
    };
    if (url === "none") {
      setData(null);
    } else {
      fetchData();
    }
  }, [url]);

  return data;
};
