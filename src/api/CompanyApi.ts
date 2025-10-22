import Company from "@/types/CompanyType.ts";
const BASE_URL = "https://localhost:7160/api/v1/CompanyControllerC/"

export async function getCompanyByApi() : Promise<Company[]>{
	const res = await fetch(`${BASE_URL}get-all-company`)
	if(!res.ok)throw new Error(`Wrong on Getting API`);
	const data = await res.json();
	console.log("From API");
	console.log(data);
	return data;
}