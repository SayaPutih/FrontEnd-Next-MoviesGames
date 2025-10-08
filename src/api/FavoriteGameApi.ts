import FavoriteGameType from "@/types/FavoriteGameType.ts";
const BASE_URL = `https://localhost:7160/api/v1/Game`

export async function getAllFavoriteGame() : Promise<FavoriteGameType[]>{
	const res = await fetch(`${BASE_URL}/get-all-game`);
	const data = await res.json();
	if(!res.ok){
		throw new Error(`something is wrong master evan cannot get API`);
	}
	console.log(data);
	return data;
}