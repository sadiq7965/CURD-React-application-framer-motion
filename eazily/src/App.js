import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Policies from './components/Policies';
import Blogs from './components/Blogs';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/policies' element={<Policies/>}/>
  <Route exact path='/blogs' element={<Blogs/>}/>
</Routes>

    </div>
  );
}

export default App;
