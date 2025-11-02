import { Activity, ViewTransition } from "react";
import { PosterDetail } from "./../poster-detail/PosterDetail";
import { PosterGrid } from "./../poster-grid/PosterGrid";
import { useCurrentPosterState } from "./useCurrentPosterState";
import { usePosters } from "./usePosters";

export const Posters = () => {
  const { posters } = usePosters();
  const { currentPoster, updatePoster } = useCurrentPosterState();

  return (
    <>
      <Activity mode={!currentPoster ? "visible" : "hidden"}>
        <ViewTransition>
          <PosterGrid posters={posters} onPosterClick={updatePoster} />
        </ViewTransition>
      </Activity>
      <Activity mode={currentPoster ? "visible" : "hidden"}>
        <ViewTransition>
          <PosterDetail
            poster={currentPoster}
            onClose={() => updatePoster(null)}
          />
        </ViewTransition>
      </Activity>
    </>
  );
};
