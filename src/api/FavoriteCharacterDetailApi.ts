import FavoriteGameDetailType from "@/types/FavoriteGameDetailType";

const BASE_URL = "https://localhost:7160/api/v1/FavoriteDetail";

export async function upsertAFavoriteCharacter(id,body){

	try{
		const res = await fetch(`${BASE_URL}/Upsert-character/${id}`,{
			method : "PUT",
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify(body)
		})

		if(!res.ok){
			console.log("Failed Upsert");
			console.log(res.status, res.statusText);
			return false;
		}

		const data = await res.json();
		console.log("Succes Upsert Data!");
		console.log(res);
		return true;
	}catch(err){
		console.log(err);
		return false;
	}
}

export async function getAllGamesAndCharacters() : Promise<FavoriteGameDetailType[]>{
	const res = await fetch(`${BASE_URL}/Get-all-games-and-their-character`);
	if(!res.ok) throw new Error("Error getting api master /Get-all-games-and-their-character Evan");
	const data = await res.json();
	return data;
}

// export async function uploadCharacterImage(id : string, file : File){
// 	const formData = new FormData();
// 	formData.append("file",file);
// 	formData.append("fileName",id);

// 	const res = await fetch(`${BASE_URL}/`,{
// 		method : "POST",
// 		body : formData
// 	});

	

// }