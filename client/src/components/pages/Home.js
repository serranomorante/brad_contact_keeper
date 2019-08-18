import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => {
  console.log('Hola');
  return (
    <div className='grid-2'>
      <div>{/* Contact Form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
