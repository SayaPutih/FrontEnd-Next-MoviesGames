import React from "react";
import FavoriteGameType from "@/types/FavoriteGameType";

const FavoriteGameCard =({
	gameName,
	rating,
	creatorName,
	genre,
	playYear,
	imageUrl,
}:FavoriteGameType)=>{
	return(
		<div className="border-0 rounded-md border-gray-100 bg-subfirst p-0 bg-red-900 flex flex-col items-center justify-between shadow-xl">
			<h1 className="bg-first font-bold text-md w-full text-center rounded-t-md">{gameName}</h1>
			
			<div className="bg-third">
				<img src={imageUrl ? imageUrl : "https://placehold.co/600x400"} className="w-[500] h-[180] object-cover"/>
				<p className="text-second text-md p-2">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</p>
			</div>

			<div className="flex flex-row gap-2 items-center p-2 justify-end self-end bg-first rounded-b-md w-full">
				<p>{rating}</p>
				<p>{genre}</p>
				<p>{playYear}</p>
			</div>
		
		</div>
	)
}

export default FavoriteGameCard;