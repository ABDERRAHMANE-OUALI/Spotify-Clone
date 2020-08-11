import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Input, Avatar } from "@material-ui/core";
import { useDataLayer } from './../Hooks/DataLayer';

function BodyHeader() {
  const [{ user }, dispatch] = useDataLayer();
  return (
    <div>
      <div className="Header">
        <div className="Header__left">
          <SearchIcon className="Header__icon" />
          <Input color="secondary" placeholder="Search..." />
        </div>
        <div className="Header__right">
          <Avatar alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  );
}

export default BodyHeader;
