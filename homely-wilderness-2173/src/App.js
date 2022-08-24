import './App.css';
import Btn from './components/Btn';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
