import React from 'react'
interface Props {
  refactorString: (event: React.ChangeEvent<HTMLInputElement>) => void
  refactorAuthor: (event: React.ChangeEvent<HTMLInputElement>) => void
  uuu: (e: React.FormEvent) => void
}

const form: React.FC<Props> = ({refactorAuthor , refactorString , uuu}) => {
  return (
    <div>
      <form style={{textAlign: 'left'}} onSubmit={uuu}>
      <div className='form-group'>
      <span>Ввод автора:</span>
      <input onChange={e => refactorAuthor(e)} style={{width: '50%'}} className='form-control'/>
      </div>
      <div className='form-group'>
      <span>Ввод сообщения:</span>
      <input onChange={e => refactorString(e)} style={{width: '50%'}} className='form-control'/>
      </div>
      <button className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default form
