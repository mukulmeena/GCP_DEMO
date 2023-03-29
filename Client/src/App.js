import React, { useEffect, useState } from "react";
import api from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const fileLoader = async () => {
    const response = await api.get("/api/get-definition-file");
    console.log(response)
    setData(response.data);
  };
  useEffect(() => {
    fileLoader();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
