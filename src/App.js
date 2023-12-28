
import './App.css';
import Navbar from './Navbar';
import Fifteen from './fifteen.jsx';
import Pro from './pro';
import Airpods from './Airpods.jsx';
import Watch from './Watch.jsx';
import Desc from './Desc.jsx';

function App() {
  return (
   <>
      <div className="App">
          <Navbar/>
          <Pro/>
          <Fifteen/>
          <div className='flexd'>
          <Airpods/>
          <Watch/>
          <Desc/>
          </div>
                </div>
   </>
  );
}

export default App;
