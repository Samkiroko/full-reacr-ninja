import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <div className='create'>
      <h2>add a New blog</h2>
      <form action=''>
        <label>Blog title:</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author</label>
        <select>
          <option value='mario'></option>
          <option value='yoshi'></option>
        </select>
        <button>add blog</button>
        <p>{title}</p>
      </form>
    </div>
  )
}

export default Create
