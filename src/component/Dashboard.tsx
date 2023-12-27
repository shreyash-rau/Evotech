
import Sales from "./Sales";
import Newarrival from "./Newarrival";
import RedBlock from "./RedBlock";
import SubHeader from "./SubHeader";

function Dashboard() {
  return (
    <>

      <div className="default-toggle">
        <SubHeader />

        <div className="widgets">
          <Sales />
          <Newarrival />
          <RedBlock />
        </div>

        <div className="sidebar">
          <div className="background-rectangle" />
          <div className="highlighted-rectangle" />
          <img className="top-part-icon" alt="" src="./src/images/Arrowdouble.png" />
          <div className="icons-bright">
            <img className="layers-icon" alt="" src="./src/images/Arrowdouble.png" />
            <img
              className="layout-4-blocks"
              alt=""
              src="./src/images/Layout-4-blocks.png"
            />
          </div>
          <div className="headings">
            <div className="custom">CUSTOM</div>
          </div>
          <div className="subheadings">
            <div className="users">Users</div>
            <div className="contacts">Contacts</div>
            <div className="chat">Chat</div>
            <div className="pages">Pages</div>
          </div>
          <div className="subheadings-active">
            <div className="dashboard">Dashboard</div>
            <div className="dashboard1">DASHBOARD</div>
            <div className="applications">Applications</div>
          </div>
          <div className="strokes">
            <div className="strokes-child" />
            <div className="strokes-item" />
            <div className="strokes-inner" />
          </div>
          <div className="icons-faded">
            <div className="box-3">
              <div className="bound" />
            </div>
            <img
              className="barcode-read-icon"
              alt=""
              src="./src/images/Barcode.png"
            />

          </div>
          <img className="arrows-icon" alt="" src="./src/images/Arrows.png" />
        </div>


      </div>
    </>
  )
}

export default Dashboard