
import React from 'react'

const Form = () => {
  return (
    <div>
        <form action="http://localhost:4000/upload" method="POST" encType="multipart/form-data">
            <input type="text" name="name" id="" placeholder='Name'/>
            <input type="text" name="email" id="" placeholder='Email'/>
            <input type="file" name='files'id=""placeholder='Chose-File' />
            <button type='submit'>Upload</button>
        </form>
      
    </div>
  )
}

export default Form
