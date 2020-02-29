import React,{useState} from 'react';
import MyComponent from './MyComponet'
import logo from './logo.svg';
import './App.css';

const App = () =>{
// const [name, setName] = useState('Yoel123')
const [contador, setcontador] = useState(0)

const sumar=()=>{
  setcontador(contador+1)
}


return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <MyComponent name="Yoel"/>
      <button onClick={sumar}>
          SUMAR {contador}
      </button>
    </header>
  </div>
);
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <MyComponent name="Yoel"/>
//       </header>
//     </div>
//   );
// }

export default App;
