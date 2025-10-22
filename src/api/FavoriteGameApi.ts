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

export async function insertAFavoriteGame(body){
	const formattedBody = {
		...body,
		rating : Number(body.rating),
		playYear : Number(body.playYear)
	};
	console.log(formattedBody);
	const res = await fetch(`${BASE_URL}/insert-new-game`,{
		method : "POST",
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify(formattedBody)
	});

	const errorText = await res.text(); // baca isi error response

	if(!res.ok) throw new Error(`Something Wrong with Giving data`);
	return errorText;
}
