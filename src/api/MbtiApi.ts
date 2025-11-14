const BASE_URL = "https://localhost:7160/api/v1/MBTI/"

export async function getAllMbti(){
	const res = await fetch(`${BASE_URL}get-all-mbti`);
	const data = await res.json();
	console.log("API MBTI");
	console.log(data);
	return data;
}