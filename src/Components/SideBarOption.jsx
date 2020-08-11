import React from "react";

function SideBarOption({ opt }) {
  return (
    <div className="SideBar__Option">
      <opt.icon className="SideBar__Icon" />
      <h4>{opt.title}</h4>
    </div>
  );
}

export default SideBarOption;
