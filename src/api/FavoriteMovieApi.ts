export const deleteMoviesById = async (id : string)=>{
	try{

		const res = await fetch(`https://localhost:7160/api/v1/Movie/DelteMovieById/${id}`,{method : "DELETE"});
		if(!res.ok) {
			console.log("-----Error Bagian res.ok");
			throw new Error(`Delete failed with status ${res.status}`);
		}
		console.log("Succesfully Deleted Movie Id "+id+" "+res)
		console.log(res);

	}catch(err){
		console.log("-----Error Bagian Api");
		console.log(err);
	}
}