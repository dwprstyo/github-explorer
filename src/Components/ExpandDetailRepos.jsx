import React from "react";

import "../Css/expand-detail-repos.css"

const ExpandDetailRepos = (data) => {
  return (
    <div className="expand-detail-repos">
      <span className="expand-detail-repos-name">{data.data.name}</span>
      <span className="expand-detail-repos-description">
       {data.data.description}
      </span>
    </div>
  );
};

export default ExpandDetailRepos;
