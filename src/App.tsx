import React from 'react';
import form from './components/Form/Form';
import './App.css';

const url = ' http://146.185.154.90:8000/messages'

const run = async() => {
  const messages = await fetch(url);
  const responseMessage = await messages.json();
  const data = new URLSearchParams();
  data.set('message', 'He!');
  data.set('author', 'John');
  const response = await fetch(url, {
    method: 'post',
    body: data,
  });
}


function App() {
  return (
    <div className="App">
      <form/>
    </div>
  );
}

export default App;
