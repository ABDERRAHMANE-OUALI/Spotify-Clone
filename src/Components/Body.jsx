import React from "react";
import BodyHeader from "./BodyHeader";
import BodyMain from "./BodyMain";

function Body(props) {
  return (
    <div className="Main">
      <BodyHeader />
      <BodyMain />
    </div>
  );
}

export default Body;
