import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen">
        {/* Content */}
        <div className='container mx-auto'> 
          {/* pb-28 = Navbar height space */}
          <Outlet />
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </>
  )
}

export default App;
