import FavoriteCharacter from "@/types/FavoriteCharacterType.ts"

export async function getAllFavoriteGame() : Promise<FavoriteCharacter[]>{
	const res = await fetch("https://localhost:7160/api/v1/Character/Get-All-Favorite-Characters");
	const data = await res.json();
	if(!res.ok) throw new Error("Somthing is wrong with the api Master Evan");
	console.log(data);
	return data;
}