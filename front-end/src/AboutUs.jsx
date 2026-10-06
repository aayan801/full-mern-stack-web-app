import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'
import loadingIcon from './loading.gif'

const AboutUs = props => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/aboutus`)
      .then(response => setData(response.data))
      .catch(err => setError(JSON.stringify(err, null, 2)))
  }, [])

  if (error) return <p className="AboutUs-error">{error}</p>
  if (!data) return <img src={loadingIcon} alt="loading" />

  return (
    <div className="AboutUs">
      <h1>About Us</h1>
      <img className="AboutUs-photo" src={data.imageUrl} alt={data.name} />
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default AboutUs