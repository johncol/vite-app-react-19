import { Activity, ViewTransition } from "react";
import { PosterDetail } from "./../poster-detail/PosterDetail";
import { PosterGrid } from "./../poster-grid/PosterGrid";
import { PosterSorter } from "./../posters-sorter/PosterSorter";
import { useCurrentPosterState } from "./useCurrentPosterState";
import { usePosters } from "./usePosters";

export const Posters = () => {
  const { posters, sortBy } = usePosters();
  const { currentPoster, updatePoster } = useCurrentPosterState();

  return (
    <>
      <Activity mode={!currentPoster ? "visible" : "hidden"}>
        <ViewTransition>
          <PosterSorter sortBy={sortBy} />
          <PosterGrid posters={posters} onPosterClick={updatePoster} />
        </ViewTransition>
      </Activity>
      <Activity mode={currentPoster ? "visible" : "hidden"}>
        <PosterDetail
          poster={currentPoster}
          onClose={() => updatePoster(null)}
        />
      </Activity>
    </>
  );
};
