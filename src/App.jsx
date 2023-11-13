import './styles/home.css'

import React from 'react';
import Header from './views/header.jsx'
import Pets from './views/pets.jsx'


function App() {
  return (
    <div>
      <Header></Header>
       <section id='home'>  
          <div>
              <p>Encontre um cãopanheiro para</p> 
              <p>todas as suas próximas aventuras!</p>
              <input type="text" name="pesquisa" id="" placeholder=" Nos conte um pouco sobre você..."/>
          </div>
      </section>
  </div>
  );
}

export default App;
