import { BrowserRouter, Routes, Route } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import Home from "./routes/Home";
import { GalleryNavigation, GalleryView } from "./components";
import "./App.css";
import NotFound from "./routes/404page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/galleries"
          element={<GalleryNavigation galleries={harvardArt.records} />}
        />
        <Route
          path="/galleries/:galleryId"
          element={<GalleryView galleries={harvardArt.records} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
