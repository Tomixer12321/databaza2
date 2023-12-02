import "./Form.css"
import { useState } from "react";
import projectFirestore from "../firebase/Config";

const Form = () => {
  const [movieTtile, setMovieTitle] = useState("");
  const [movieAge, setMovieAge] = useState(null);
  const [movieTime, setMovieTime] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    const newMovie = {
      title: movieTtile,
      age: parseInt(movieAge),
      time: parseInt(movieTime),
    };
    try {
      await projectFirestore.collection("movies").add(newMovie);
      setMovieTitle("");
      setMovieTime("");
      setMovieAge("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="form-section">
      <h1>pridanie filmov</h1>
      <form onSubmit={submitForm}>
        <input
        className="input"
          type="text"
          placeholder="title"
          onChange={(e) => setMovieTitle(e.target.value)}
          value={movieTtile}
        />
        <input
        className="input"
          type="number"
          placeholder="minimalny vek"
          min="1"
          onChange={(e) => setMovieAge(e.target.value)}
          value={movieAge}
        />
        <input
        className="input"
          type="number"
          placeholder="cas filmu"
          min="1"
          onChange={(e) => setMovieTime(e.target.value)}
          value={movieTime}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Form;
