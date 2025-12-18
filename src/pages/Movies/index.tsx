import React from "react";
import EvanderLayout from "@/components/DefaultLayout";
import MovieCardList from "@/components/Movie/MovieCardList";

const MoviePage =()=>{
	return(
		<section>
			Movie Page Section
			<MovieCardList />
		</section>
	)
}

MoviePage.layout = EvanderLayout;
export default MoviePage;