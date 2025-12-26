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
		<div className="border-2 h-full w-full p-2 ">
			<h1 className="text-first text-xl font-bold text-start border-2 mb-2">Movie Page div</h1>
			<div className="grid grid-cols-4 gap-4 p-4">
				{allMovies.map((a)=>{
					return(
						<MovieCard key={a.id} movie={a} />
					)
				})}
			</div>
		</div>
	)
}

export default MovieCardList;