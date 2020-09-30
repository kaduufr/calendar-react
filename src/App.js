import React from 'react';
import './App.css';

function App() {

  const dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  return (
    <div className="App">
      <h1 className="has-text-centered info">
          Calendario
      </h1>
      <div className="calendar">
        {
          dias.map(dia => {
            return (
              <div  className="teste">
                <a href="" >
                  {dia}
                </a>

                <ul>
                  <li></li>
                </ul>
              </div>
            )
          })
        }
      </div>

      <button className="floatingButton"/>
    </div>
  );
}

export default App;
