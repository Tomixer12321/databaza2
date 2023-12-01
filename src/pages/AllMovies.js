import projectFirestore from "../firebase/Config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    projectFirestore.collection("movies").get().then((snapshot)=>{
      if(snapshot.empty){
        setError("zadne filmy k vypsani")
      }else{
        let result=[]
        snapshot.docs.forEach((oneMovie)=>{
          result.push({id:oneMovie.id,...oneMovie.data()})
        })
        setData(result)
      }
    }).catch((err)=>{
      setError(err.message)
    })
  },[])

  return <section>
    {error && <p>{error}</p>}
    {data.map((oneMovie)=>{

      const {id,title,}=oneMovie

      return <div key={id}>
        <p>{title}</p>
        <Link to={`/one-movie/${id}`}>vice informacii</Link>
      </div>
    })}
    </section>;
};

export default AllMovies;
