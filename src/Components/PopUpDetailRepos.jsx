import React from 'react'

import "../Css/popup-detail-repos.css"

const PopUpDetailRepos = (data) => {
  return (
    <div className="popup-detail-repos">
        <span className="popup-detail-repos-name">{data.data.name}</span>
        <span className="popup-detail-repos-description">{data.data.description}</span>
    </div>
  )
}

export default PopUpDetailRepos