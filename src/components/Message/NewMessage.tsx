import React from 'react'
interface Props {
  name: string;
  message: string;
}

const NewMessage: React.FC<Props> = ({ name , message}) => {
  return (
    <div style={{border:'1px solid black', width:'300px' , borderRadius: '10px' , margin: '10px'}}>
      <div>Author {name}</div>
      <div>Message{message}</div>
    </div>
  )
}

export default NewMessage
