import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import OneMovie from "./pages/OneMovie";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/allmovies" element={<AllMovies />} />
          <Route path="/one-movie" element={<OneMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
