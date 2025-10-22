import React from "react";
import FavoriteGameDetailType from "@/types/FavoriteGameDetailType";
import { Star } from 'lucide-react';
import {useRouter} from "next/navigation";

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

	const shooter = ["FPS","Battle Royale","TPS"];
	const RPG = ["Souls Like","Remnant","RPG","Looter Shooter","Pokemon"];

	const router = useRouter();

	const roundStar =(rating)=>{
		return rating.toFixed(1)
	}

	const getColorThemeByGenre =(genre)=>{
		if(shooter.includes(genre)) return "bg-red-700 text-orange-100";
		if(RPG.includes(genre)) return "bg-amber-950 text-yellow-500";
		return "bg-gray-300 text-black"
	}

	const goToEditPage =(CurId)=>{
		router.push(`FavoriteGame/Edit/${CurId}`)
	}

	const getBarColor = (barStatus) => {
		//Belajar Nanti
    const safeValue = typeof barStatus === "string" && barStatus.trim() ? barStatus : "0%";
    const value = parseInt(safeValue, 10) || 0;

    if (value > 90) return "border-blue-500";
    if (value > 70) return "border-green-800";
    if (value > 40) return "border-yellow-500";
    if (value > 10) return "border-red-500";
    return "border-blue-300";
  };

	return(
		// <div>
		// 	{/*FavoriteCharacterCard
		// 	{id} - {gameName} - {firstColor}*/}
		// </div>
		//https://placehold.co/600x400
		//imageUrl

		<div 
			className="flex flex-col items-center justify-around bg-subsecond rounded-md h-full"
			style={{backgroundColor : thirdColor}}
		>
			
			<div 
				className="bg-third w-full text-center rounded-t-md text-md py-2 items-center"
				style={{backgroundColor : firstColor , color : secondColor}}
			>
				<h1 className="text-md font-bold">{gameName}</h1>
			</div>

			<div className="border-0 border-blue-900">

				<img 
					src={imageUrl && imageUrl.trim() !== ""  ? imageUrl : "https://placehold.co/300x300"} 
					className="object-cover w-[50vh] h-[300px] xlg:-[350px]" 
				/>
			</div>

			<div className="w-full px-3 my-2 flex-grow flex flex-col justify-start">
				<p className=" flex flex-row items-center justify-between">
					<span className="flex flex-row gap-1">
						<span className={`font-semibold rounded-md px-3 ${getColorThemeByGenre(genre)}`}>{genre}</span>
						<span className="bg-yellow-400  rounded-md px-2">{playYear}</span>
					</span>
					<span className="text-black font-bold flex items-center gap-1 ">{roundStar(rating)}<Star className="text-yellow-600" width={15}/></span>
				</p>
				<p className="font-semibold  mt-2">{desc}</p>

			</div>

			{RPG.includes(genre) ?(
				<div class="flex flex-col w-full font-bold mb-4 px-3">
					<p>Completion :  <span className="font-normal text-red-900">{completion}</span></p>
					<h1>Normal : <span className="font-normal">{rank}</span></h1>

					<div className=" bg-gray-500">
						<hr className={`border-4 ${getBarColor(rank)} transition-all duration-300`} style={{width : rank}}/>
					</div>
					<h1>DLC : <span className="font-normal">{rankInGame}</span></h1>
					<div className=" bg-gray-500">
						<hr className={`border-4 ${getBarColor(rankInGame)} ttransition-all duration-300`} style={{width : rankInGame}}/>
					</div>
				</div>
			): shooter.includes(genre) ? (
				<div class="flex flex-col w-full font-bold mb-4 px-3">
					<h1>Rank : <span className="font-normal">{rank}</span></h1>
					<p>Status :  <span className="font-normal">{completion}</span></p>
					<h1>MMR : <span className="font-normal">{rankInGame}</span></h1>
				</div>
			) : (
				<div class="flex flex-col w-full font-bold mb-4 px-3">
					<h1>Rank : <span className="font-normal">{rank}</span></h1>
					<p>Completion :  <span className="font-normal">{completion}</span></p>
					<h1>Rank In Game : <span className="font-normal">{rankInGame}</span></h1>
				</div>
			)}


			<div 
				className={` flex flex-row items-center justify-end w-full gap-2 px-4 py-3 rounded-b-md `}
				style={{backgroundColor : secondColor}}
			>

				<button className="bg-green-500 px-2 rounded-md">Details</button>

				<button 
					className="bg-yellow-500 px-2 rounded-md hover:bg-yellow-700" 
					onClick={()=>goToEditPage(id)}
				>
					Edit
				</button>

				<button className="bg-red-500 px-2 rounded-md">Delete</button>

			</div>
		</div>



	)
}

export default FavoriteCharacterCard;