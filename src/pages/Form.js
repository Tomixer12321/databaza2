import { useState } from "react";
import { projectFirestore } from "../firebase/Config";

const Form = () => {
  const [movieTtile, setMovieTitle] = useState("");
  const [movieAge, setMovieAge] = useState(null);
  const [movieTime, setMovieTime] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(movieTtile)
    console.log(movieAge)
    console.log(movieTime)
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="title" onChange={(e)=>setMovieTitle(e.target.value)}/>
        <input type="number" placeholder="minimalny vek" min="1" onChange={(e)=>setMovieAge(e.target.value)}/>
        <input type="nummber" placeholder="cas filmu" min="1" onChange={(e)=>setMovieTime(e.target.value)}/>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Form;
