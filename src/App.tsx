import React, { useState } from 'react';
import Form from './components/Form/Form';
import NewMessage from './components/Message/NewMessage';
import { Message } from './types';
import './App.css';

const url = ' http://146.185.154.90:8000/messages'
const [message , setMessage] = useState<Message>({
  author: '',
  datetime: '',
  id: '',
  message: ''

})

const run = async() => {
  const messages = await fetch(url);
  const responseMessage: Message[]  = await messages.json()
  responseMessage.map(message => (
    <NewMessage message={message.message} date={message.datetime} name={message.message}/>
  ))


  // responseMessage.map(string => {
  //   setMessage(prev => ({
  //     ...prev,
  //     author: prev.author = string.author,
  //     datetime: prev.datetime = string.datetime,
  //     message: prev.message = string.message
  //   }))
  // })
}

run()

const uuu = async() => {
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
      <Form/>
    </div>
  );
}

export default App;
