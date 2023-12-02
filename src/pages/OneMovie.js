import "./OneMovie.css"
import { useParams,Link } from "react-router-dom"
import { useState,useEffect } from "react"
import projectFirestore from "../firebase/Config"

const OneMovie = () => {
  const [data,setData]=useState({})
  const [error,setError]=useState(false)

  const {movieId}=useParams()

  useEffect(()=>{
    projectFirestore.collection("movies").doc(movieId).get().then((document)=>{
      console.log(document)
      if(document.exists){
        setData(document.data())
      }else{
        setError("nenasiel sa film")
      }
    }).catch((err)=>{
      setError(err.message)
    })
  },[movieId])

  return (
    <section className="one-movie-section">
      {error && <p>{error}</p>}
      <h1>{data.title}</h1>
      <p>{data.age}+</p>
      <p>{data.time}min</p>
      <Link exact to="/all-movies">zpet na zoznam filmov</Link>
    </section>
  )
}

export default OneMovie