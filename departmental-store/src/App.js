import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Categories from './component/Categories';
import FruitsVeg from './component/FruitsVeg';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Categories/>
     <FruitsVeg/>
    </div>
  );
}

export default App;
