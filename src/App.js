import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Myheader from './components/MyHeader';
import Nav from './components/Nav';



function App() {
  return (
    <>
    <div className='topcontainer'>
      <Myheader/>
      <Nav />
    </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
