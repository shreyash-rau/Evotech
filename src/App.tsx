
import './App.css'
import Box from './component/Box';


import Dashboard from './component/Dashboard';
import MainHeader from './component/MainHeader';
import Recent from './component/Recent';

function App() {
  return (<>

    <div className="option-1-basic">

      <Dashboard />
      <MainHeader />
      <Box />
      <Recent />
      
    </div>
  </>);
};

export default App;
