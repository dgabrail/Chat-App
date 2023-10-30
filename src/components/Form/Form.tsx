import React, { useState } from 'react'
import { MessageType } from '../../types';
interface Props {
}

const url = ' http://146.185.154.90:8000/messages';

const Form: React.FC<Props> = ({}) => {

  const [message, setMessage] = useState<MessageType>({
    author: '',
    message: '',
  })

  const createNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage(prev => ({
      ...prev,
      [name]: value
    }))
  };


  const newMessage = async (e: React.FormEvent,) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.set('message', message.message);
    data.set('author', message.author);
    await fetch(url, {
      method: 'post',
      body: data,
    });
  };



  return (
    <div>
      <form style={{ textAlign: 'left' }} onSubmit={newMessage}>
        <div className='form-group'>
          <span>Ввод автора:</span>
        </div>
        <input name='author' onChange={e => createNewMessage(e)} style={{ width: '50%' }} className='form-control' />
        <div className='form-group'>
          <span>Ввод сообщения:</span>
        </div>
        <input name='message' onChange={e => createNewMessage(e)} style={{ width: '50%' }} className='form-control' />
        <button type='submit' className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default Form
