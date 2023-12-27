// import React from 'react'

function SubHeader() {
  return (
    <><div className="sunheader">
      <div className="background7" />
      <div className="left">
        <div className="dashboard2">Dashboard</div>
        <div className="add-new-button">
          <div className="add-new-button-child" />
          <div className="add-new">Add New</div>
        </div>
        <div className="left-child" />
      </div>
      <div className="right">
        <div className="today">
          <div className="today-active">
            <div className="today-active-child" />
            <div className="today1">Today</div>
          </div>
        </div>
        <div className="month1">
          <div className="month-active">
            <div className="month-active-child" />
            <div className="month2">{`Month `}</div>
          </div>
          <div className="month3">Month</div>
        </div>
        <div className="year">
          <div className="year1">Year</div>
          <div className="year-active">
          </div>
        </div>
        <div className="actions-button-passive">
          <div className="today-active-child" />
          <div className="actions">Actions</div>
        </div>

        <img
          className="file-plus-icon"
          alt=""
          src="./src/images/FileplusIcon.png"
        />
      </div>
    </div></>
  )
}

export default SubHeader;