import React from 'react'
interface Props {
  name: string;
  message: string;
  date: string
}

const NewMessage: React.FC<Props> = ({date , name , message}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{message}</div>
      <div>{date}</div>
    </div>
  )
}

export default NewMessage
