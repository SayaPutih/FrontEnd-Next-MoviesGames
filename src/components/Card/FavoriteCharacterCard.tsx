import React from "react";
import FavoriteGameDetailType from "@/types/FavoriteGameDetailType";
import { Star } from 'lucide-react';

// interface FavoriteGameDetailType : {
// 	id : string?;
// 	companyId : string?;
// 	gameName : string?;
// 	rating : number?;
// 	creatorName : string?;
// 	genre : string?;
// 	playYear : number?;
// 	imageUrl : string?;
// 	completion : string?;
// 	rank : string?;
// 	desc : string?;
// 	rankInGame : string?;
// 	isFav : boolean?;
// 	firstColor : string?;
// 	secondColor : string?;
// 	thirdColor : string?;
// 	description : string?;
// 	listOfPros : string[]?;
// 	listOfCons : string[]?
// }


const FavoriteCharacterCard:ReactFC<FavoriteGameDetailType> =({
	id,
	companyId,
	gameName,
	rating,
	creatorName,
	genre,
	playYear,
	imageUrl,
	completion,
	rank,
	desc,
	rankInGame,
	isFav,
	firstColor,
	secondColor,
	thirdColor,
	description,
	listOfPro,
	listOfCons,
})=>{

	const roundStar =(rating)=>{
		return rating.toFixed(1)
	}

	return(
		// <div>
		// 	{/*FavoriteCharacterCard
		// 	{id} - {gameName} - {firstColor}*/}
		// </div>
		//https://placehold.co/600x400

		<div className="flex flex-col items-center justify-around bg-subsecond rounded-md">
			
			<div className="bg-third w-full text-center rounded-t-md">
				<h1 className="text-md font-bold">{gameName}</h1>
			</div>

			<div>
				<img src="https://placehold.co/400x400" className="object-cover" />
			</div>

			<div className="w-full px-3 my-2">
				<p className=" flex flex-row items-center justify-between">
					<span className="flex flex-row gap-4">
						<span className="bg-black text-white rounded-md px-2">{genre}</span>
						<span className="bg-yellow-400  rounded-md px-2">{playYear}</span>
					</span>
					<span className="text-black font-bold flex items-center gap-1">{roundStar(rating)}<Star className="text-yellow-600" width={15}/></span>
				</p>
				<h1>{rankInGame}</h1>
				<p>{desc}</p>
				<p>{completion}</p>
			</div>

			<div className="bg-subthird flex flex-row mb-4 items-center justify-end w-full gap-2 px-4">
				<button className="bg-yellow-500 px-2 rounded-md">Edit</button>
				<button className="bg-red-500 px-2 rounded-md">Delete</button>
			</div>
		</div>

	)
}

export default FavoriteCharacterCard;