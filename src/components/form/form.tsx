import React from 'react'

const form = () => {
  return (
    <>
      <form style={{textAlign: 'left'}}>
      <div className='form-group'>
      <span>Ввод автора:</span>
      <input style={{width: '50%'}} className='form-control'/>
      </div>
      <div className='form-group'>
      <span>Ввод сообщения:</span>
      <input style={{width: '50%'}} className='form-control'/>
      </div>
      <button className='btn btn-primary mt-3'>Submit</button>
      </form>
    </>
  )
}

export default form
