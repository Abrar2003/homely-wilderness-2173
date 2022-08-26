import './App.css';
import Btn from './components/Btn';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
