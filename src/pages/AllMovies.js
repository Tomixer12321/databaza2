import projectFirestore from "../firebase/Config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe=projectFirestore
      .collection("movies")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("zadne filmy k vypsani");
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
        }
      },(err)=>setError(err.message))
      return (err)=>unsubscribe()
  }, []);

  const deleteMovie=(id)=>{
    projectFirestore.collection("movies").doc(id).delete()
  }

  return (
    <section>
      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, title } = oneMovie;

        return (
          <div key={id}>
            <p>{title}</p>
            <Link to={`/one-movie/${id}`}>vice informacii</Link>
            <button type="button" onClick={() => deleteMovie(id)}>
              smazat
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default AllMovies;
