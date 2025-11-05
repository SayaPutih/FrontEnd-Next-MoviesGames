import React from "react";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";

const FavoriteGameCard =({
	bestSkillName,
	characterDetails,
	characterName,
	favoriteCharacterGame,
	favoriteCharacterMovie,
	gameId,
	id,
	imageUrl,
	mbtIid,
	mbti,
	movieId,
	rating,
	roleInUniverse,
	type,
	updatedAt,
	weapon,
}:FavoriteCharacter)=>{
	return(
		<div className="border-0 rounded-md border-gray-100 bg-subfirst p-0 flex flex-col items-center justify-between shadow-xl">
			<h1 className="bg-gray-900 text-white font-bold text-md w-full text-center rounded-t-md p-2">{characterName}</h1>
			
			<div className="bg-gray-700 ">
				<img src={"https://placehold.co/600x400"} className="w-full  h-[180] object-cover"/>
				<p className="text-white font-semibold text-md p-2">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</p>
			</div>

			<div className="flex flex-col gap-2 items-center p-2 justify-end self-end bg-gray-800 text-white font-bold rounded-b-md w-full">
				<p>{bestSkillName}</p>
				<p>{weapon}</p>
			</div>
		
		</div>
	)
}

export default FavoriteGameCard;