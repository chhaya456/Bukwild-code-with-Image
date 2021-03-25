import React, { useState } from "react";
import Header from "./Header";
import Middle from "./Middle";
import ContentData from "../data/content.json";

function Main(props) {
  // console.log(ContentData[0].title);
  // const [item, setItem] = useState("industeries");

  function updateData(item) {
    props.onAdd(item);
    //console.log(item);
  }

  // const [item, setItem] = useState(0);

  return (
    <div>
      <Header onChange={updateData} />
      <Middle />
    </div>
  );
}

export default Main;
