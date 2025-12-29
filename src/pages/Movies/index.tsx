import React from "react";
import EvanderLayout from "@/components/DefaultLayout";
import MovieCardList from "@/components/Movie/MovieCardList";

const MoviePage =()=>{
	return(
		<section className="h-full w-full pb-10 mb-10">
			<MovieCardList />
			
		</section>
	)
}

MoviePage.layout = EvanderLayout;
export default MoviePage;