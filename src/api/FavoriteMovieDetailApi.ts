import FavoriteMovieDetail from "@/components/FavoriteMovieDetailType.ts";
const BASE_URL = `https://localhost:7160/api/v1/FavoriteMovieDetail/`

export async function getAllFavoriteMovie() : Promise<FavoriteMovieDetail[]>{
	const res = await fetch(`${BASE_URL}get-all-favorite-movies-with-details`);
	if(!res.ok) throw new Error("Somthing Wrong with Getting all FavoriteMovie from API");
	const data = await res.json();
	return data.value;
}
