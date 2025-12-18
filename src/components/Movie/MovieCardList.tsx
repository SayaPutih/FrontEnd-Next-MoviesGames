"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";
import {getAllFavoriteMovie} from "@/api/FavoriteMovieDetailApi";
import MovieCard from "./MovieCard"

const MovieCardList =()=>{

	const [allMovies , setAllMovies] = useState<FavoriteMovieDetailType[]>([]);

	useEffect(()=>{

		const getData = async ()=>{
			try{

				const res = await getAllFavoriteMovie();
				//const data = await res.json();
				setAllMovies(res);
				console.log(allMovies);
			}catch(err){
				console.log(err);
			}
		}

		getData();
		
	},[])

	return(
		<div>
			Movie Page div
			{allMovies.map((a)=>{
				return(
					<MovieCard key={a.id} movie={a} />
				)
			})}
		</div>
	)
}

export default MovieCardList;