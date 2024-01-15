import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Form from './Components/Form';

function App() {
  const [cadastros, setCadastro] = useState([]);
  const adicionaNovoCadastro = cadastro => {
    console.log(cadastro)
    setCadastro([...cadastros, cadastro])

  }
  return (
    <div className="App">
      <Banner />
      <Form aoCadastrar={cadastro=>adicionaNovoCadastro(cadastro)}/>
    </div>
  );
}

export default App;
