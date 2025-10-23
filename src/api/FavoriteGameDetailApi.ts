import FavoriteGameDetailType from "@/types/FavoriteGameDetailTypes.ts";
const BASE_URL = "https://localhost:7160/api/v1/FavoriteDetailGame"

export async function getFavoriteGameFullDetails() : Promise<FavoriteGameDetailType[]>{
	const res = await fetch(`${BASE_URL}/get-favorite-game-full-details`);
	if(!res.ok) throw new Error("Error Fetching database Master Evander");
	const data = await res.json();
	console.log(data.value);
	return data.value;
}

export async function getAllFavoriteGameById(id) : Promise<FavoriteGameDetailType>{
	const res = await fetch(`${BASE_URL}/get-favorite-game-full-details-by-id/${id}`);
	if(!res.ok) throw new Error("Error Fetching Data by API");
	const data = await res.json();
	console.log(data);
	return data;
}

export async function UpdateFavoriteGameFullDetails(id,body){
	const res = await fetch(`${BASE_URL}/update-full-detail-by-id/${id}`,{
		method : 'PUT',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify(body)
	});

	if(!res.ok) throw new Error(`Somthing wrong with updating game ${id}`);
	const data = await res.json();
	return data.value;
}