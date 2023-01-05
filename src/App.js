import logo from './logo.svg';
import './App.css';
import  Header from "./MyComponent/Header"
import {Todos} from "./MyComponent/Todos";
import  {Footer}  from './MyComponent/Footer';
import { TodoItems } from './MyComponent/TodoItems';


function App() {
let Todos = [
  {
    sno: 1,
    title: " Go to market",
    desc : "you need to market fo get your job done  "
    
  },

  {
    sno: 2,
    title: " Go to mall",
    desc : "you need to market fo get your job done  "
    
  },

  {
    sno: 3,
    title: " Go to job",
    desc : "you need to market fo get your job done  "
    
  }
]
  return (
      <>
      <Header title = "My TodosList" searchBar={false}/>
      <Todos todo = {todos}/>
      <Footer/>
      <TodoItems/>

      </>
  );
}

export default App;
