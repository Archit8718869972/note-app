
import './App.css';
import { Navbar } from './components/Homepage/Navbar';
import AllRoutes from './routes/AllRoutes';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);
  
  
  return (
    <div className="App">
    
    <Navbar login={login} setLogin={setLogin}></Navbar>
    <AllRoutes setLogin={setLogin}></AllRoutes>

    </div>
  );
}

export default App;
