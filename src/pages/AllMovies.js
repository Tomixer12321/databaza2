import ProjectFirestore from "../firebase/Config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    ProjectFirestore.collection("movies").get().then((snapshot)=>{
      if(snapshot.empty){
        setError("zadne filmy k vypsani")
      }else{
        let result=[]
        snapshot.docs.forEach((oneMovie)=>{
          result.push({id:oneMovie.id,...oneMovie.data})
        })
        setData(result)
      }
    }).catch((err)=>{
      setError(err.message)
    })
  },[])

  return <section>
    {error && <p>{error}</p>}
    </section>;
};

export default AllMovies;
