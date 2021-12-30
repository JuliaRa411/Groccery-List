 
import './App.css';
import image from './shopping.jpg';
import imageTwo from './imageTwo.jpg';
import { GrosseryList } from './GrosseryList';
 

function App() {
  return (
    <div  className ="app" >
  <div className ="container"> 
      <img src = {image} width= "200px" alt = "imageOne"/>
      </div>
      <div className ="container">
      <h1 > Grossery List</h1>
      </div>
     <GrosseryList/>
     <div className ="container"> 
      <img src = {imageTwo} width= "200px" alt = "imageTwo"/>
    </div>
    </div>
  );
}

export default App;
 