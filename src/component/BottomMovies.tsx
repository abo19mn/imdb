import { Card } from "@mantine/core";

export default function BottomMovies() {
  return (
    <div>
      <h1>Movies</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => {
          return <Card movie={movie}></Card>;
        })}
      </div>
    </div>
  );
}
