import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";
import FavoriteCharacterDetailType from "@/types/FavoriteCharacterDetailType.ts";

export async function getAllFavoriteGame() : Promise<FavoriteCharacter[]>{
	const res = await fetch("https://localhost:7160/api/v1/Character/Get-All-Favorite-Characters");
	const data = await res.json();
	if(!res.ok) throw new Error("Somthing is wrong with the api Master Evan");
	console.log(data.result);
	return data.result;
}


export async function getCharacterWithFullDetails() : Promise<FavoriteCharacterDetailType[]>{
	const res = await fetch("https://localhost:7160/api/v1/FavoriteDetail/Get-All-Character");
	const data = await res.json();
	return data.value;
}


export async function getCharacterWithFullDetailsById(id) : Promise<FavoriteCharacterDetailType>{
	const res = await fetch(`https://localhost:7160/api/v1/FavoriteDetail/Get-Character-by-id${id}`);
	const data = await res.json();
	return data.value;
}