import React, { useState } from 'react';
import Form from './components/Form/Form';
import NewMessage from './components/Message/NewMessage';
import { Message } from './types';
import './App.css';


function App() {

  const url = ' http://146.185.154.90:8000/messages'
  const [responseMessage , setResponseMessage] = useState<Message[]>([])
  const run = async() => {
  const messages = await fetch(url);
  const response = await messages.json()
  setResponseMessage(response)

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

let string = '';
let author = '';

const refaktorString = (event: React.ChangeEvent<HTMLInputElement>) => {
  string = event.target.value
}

const refaktorAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
  author = event.target.value
}


const newMessage = async(event: React.FormEvent) => {
  event.preventDefault
  const data = new URLSearchParams();
  data.set('message', string);
  data.set('author', author);
  const respons = await fetch(url, {
    method: 'post',
    body: data,
  });
  const messages = await fetch(url);
  const response = await messages.json()
  setResponseMessage(response)
}

  return (
    <div className="App">
      <Form refactorAuthor={refaktorAuthor} refactorString={refaktorString} uuu={newMessage}/>
      {responseMessage.map((string , index) => (
        <NewMessage  key={index} message={string.message} name={string.author}/>
      ))}
    </div>
  );
}

export default App;
