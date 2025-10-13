import FavoriteGameDetailType from "@/types/FavoriteGameDetailTypes.ts";
const BASE_URL = "https://localhost:7160/api/v1/FavoriteDetailGame"

export async function getFavoriteGameFullDetails() : Promise<FavoriteGameDetailType[]>{
	const res = await fetch(`${BASE_URL}/get-favorite-game-full-details`);
	if(!res.ok) throw new Error("Error Fetching database Master Evander");
	const data = await res.json();
	console.log(data.value);
	return data.value;
}