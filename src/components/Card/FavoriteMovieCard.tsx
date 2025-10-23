"use client"
import React,{useState,useEffect} from "react";
import FavoriteMovieDetail from "@/types/FavoriteMovieDetailType";

const FavoriteMovieCard =({
	id,
	movieName,
	rating,
	creatorName,
	genre,
	imageUrl,
	playYear,
	desc,
	watchYear,
	firstColor,
	secondColor,
	thirdColor,
	description,
}:{FavoriteMovieDetail})=>{

	return(
		<div className="border-red-400 border-2 h-[350] relative overflow-hidden rounded-lg shadow-lg">
			<img className="absolute object-cover opacity-[0.7] hover:opacity-[0.9]" src="https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
			<div className="absolute top-0 z-20 p-2 flex flex-col items-center justify-between border-2 h-full text-center w-full">
				
				<div className="border-2">
					<h1 className="font-bold text-lg text-second">{movieName}</h1>
				</div>

				<div className="border-2">
					<h1 className="font-semibold text-lg text-second">{movieName}</h1>
				</div>

			</div>
		</div>
	)
}

export default FavoriteMovieCard;