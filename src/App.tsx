import React, { useState } from 'react';
import './App.scss';
import Image from './components/Imag/Image';
import { Data } from './components/api/Api'
import Qustion from './components/qusetions/Qustion';


function App() {
  const [qusetons, setQusetions] = useState(Data)
  const data = new Date().toDateString()
  console.log(data);
  
  return (
    <main>
      <div className='container'>
        <Image />
        <div className='all'>
           <section className='data'>
                <label>
                 {data}
                </label>
           </section>
          <section>
            {
              qusetons.map((quseton) => {
                return (
                  <Qustion key={quseton.id} {...quseton} />
                )
              })
            }
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
