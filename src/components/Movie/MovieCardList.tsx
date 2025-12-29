"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";
import {getAllFavoriteMovie} from "@/api/FavoriteMovieDetailApi";
import MovieCard from "./MovieCard"

import { Pen, Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';


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
		<div className="border-2 h-full w-full p-2 mb-10 ">
			<h1 className="text-first text-xl font-bold text-start border-2 mb-2">Movie Page div</h1>
			<div className="grid grid-cols-1  sm:grid-cols-5 gap-4 p-4 ">
				{allMovies.map((a)=>{
					return(
						<div className="relative group" key={a.id}>
							<div className="absolute z-10 top-2 right-2 flex flex-row gap-1 
							opacity-0 group-hover:opacity-100 transition">
								<Pencil className="rounded text-yellow-900/50 bg-yellow-500 p-1" />
								<Trash className="rounded text-red-900/50 bg-red-500 p-1" />
							</div>
							<MovieCard  movie={a} />
						</div>
					)
				})}
			</div>
			<div className="my-20">l</div>
		</div>
	)
}

export default MovieCardList;