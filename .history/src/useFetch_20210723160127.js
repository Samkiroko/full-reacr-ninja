import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, { signal: abortCont.signal })
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
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        setLoading(false)
        setError(err.message)
      })
    return () => abortCont.abort()
  }, [url])
  return { data, loading, error }
}
export default useFetch
