import FavoriteCharacterDetailType from "@/types/FavoriteCharacterDetailType.ts";

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

// export async function uploadCharacterImage(id : string, file : File){
// 	const formData = new FormData();
// 	formData.append("file",file);
// 	formData.append("fileName",id);

// 	const res = await fetch(`${BASE_URL}/`,{
// 		method : "POST",
// 		body : formData
// 	});

	

// }