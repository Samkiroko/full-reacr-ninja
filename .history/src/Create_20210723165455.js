const Create = () => {
  return (
    <div className='create'>
      <h2>add a New blog</h2>
      <form action=''>
        <label>Blog title:</label>
        <input type='text' required />
        <label>Blog body</label>
        <textarea required></textarea>
        <label>Blog author</label>
        <select>
          <option value='mario'></option>
          <option value='yoshi'></option>
        </select>

        <button>add blog</button>
      </form>
    </div>
  )
}

export default Create
