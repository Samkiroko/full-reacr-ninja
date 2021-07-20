import { useState, useEffect } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(' http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch form the database')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
        setError(null)
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])
}
