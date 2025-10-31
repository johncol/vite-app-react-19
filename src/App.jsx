import React, { Activity, useState } from "react";
import { PosterGrid } from "./components/poster-grid/PosterGrid";
import { PosterDetail } from "./components/poster-detail/PosterDetail";
import "./App.css";

function App() {
  const [currentPoster, setCurrentPoster] = useState(null);

  return (
    <main>
      <Activity mode={!currentPoster ? "visible" : "hidden"}>
        <PosterGrid onPosterClick={setCurrentPoster} />
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
