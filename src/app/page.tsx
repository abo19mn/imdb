import BottomMovies from "@/component/BottomMovies";
import { getToprateMovies } from "@/utils/requests";

export default async function HomePage() {
  return (
    <div>
      <BottomMovies />
    </div>
  );
}
