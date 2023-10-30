import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import NewMessage from './components/Message/NewMessage';
import { MessageType } from './types';
import './App.css';


function App() {
  const [responseMessage, setResponseMessage] = useState<MessageType[]>([]);
  const url = ' http://146.185.154.90:8000/messages';

  const run = async () => {
    const messages = await fetch(url);
    const response = await messages.json();
    setResponseMessage(response);
  }

  useEffect(() => {
    setInterval(() => { run() }, 2000);
  }, []);

  return (
    <div className="App">
      <Form />
      {responseMessage.map((message, index) => (
        <NewMessage key={index} message={message.message} name={message.author} />
      ))}
    </div>
  );
}

export default App;
