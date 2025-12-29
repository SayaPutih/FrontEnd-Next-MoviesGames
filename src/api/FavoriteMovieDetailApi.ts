import FavoriteMovieDetail from "@/types/FavoriteMovieDetailType";
const BASE_URL = `https://localhost:7160/api/v2/FavoriteMovieDetail/`

export async function getAllFavoriteMovie() : Promise<FavoriteMovieDetail[]>{
	const res = await fetch(`${BASE_URL}get-all-favorite-movies-with-details`);
	if(!res.ok) throw new Error("Somthing Wrong with Getting all FavoriteMovie from API");
	const data = await res.json();
	return data.value;
}

export async function getFavoriteMovieById(id : string) : Promise<FavoriteMovieDetail>{
	const res = await fetch(`${BASE_URL}get-favorite-movie-by-id/${id}`);
	if(!res.ok) throw new Error("Not Ok on fetching id movie");
	return res.json();
}

export async function upsertAFavoriteMovie(id : string,body,insert : boolean) : Promise<FavoriteMovieDetail[]>{

	const res = await fetch(`${BASE_URL}insert-or-edit-favorite-movie-detail/${id}`,{
			method : 'PUT',
			headers : {"Content-Type" : "application/json"},
			body : JSON.stringify(body)
		});

	if(!res.ok){
		throw new Error("Fetching Data Not Ok")
	}

	const data = await res.json();
	return data;
}
