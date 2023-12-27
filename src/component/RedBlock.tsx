// import React from 'react'
import img from "../images/new.png"

function RedBlock() {
  return (
    <>
    <div className="widget-1">
    <div className="background6" />
    <div className="top">
      <img className="top-child" alt="" src={img}/>
      {/* <img className="top-item" alt="" src={img} /> */}
      <div className="export-button">
        <div className="button5" />
        <div className="export">Export</div>
        {/* <img className="arrow-icon" alt="" src={img} /> */}
        
      </div>
      <div className="categories">Categories</div>
    </div>
  </div>
  </>
  )
}

export default RedBlock