import { Activity, useState } from "react";
import { PosterGrid } from "./components/poster-grid/PosterGrid";
import { PosterDetail } from "./components/poster-detail/PosterDetail";
import { posters } from "./api/posters";
import "./App.css";

function App() {
  const [currentPoster, setCurrentPoster] = useState(null);

  return (
    <main>
      <Activity mode={!currentPoster ? "visible" : "hidden"}>
        <PosterGrid posters={posters} onPosterClick={setCurrentPoster} />
      </Activity>
      <Activity mode={currentPoster ? "visible" : "hidden"}>
        <PosterDetail
          poster={currentPoster}
          onClose={() => setCurrentPoster(null)}
        />
      </Activity>
    </main>
  );
}

export default App;
