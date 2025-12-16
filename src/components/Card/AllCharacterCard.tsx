import React from "react";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";
import { Swords,Scroll  } from 'lucide-react';

const FavoriteGameCard =({
	skill,
	characterDetails,
	name,
	favoriteCharacterGame,
	favoriteCharacterMovie,
	gameId,
	id,
	imageUrl,
	mbtIid,
	mbti,
	movieId,
	rating,
	standing : roleInUniverse,
	type,
	updatedAt,
	weapon,
	firstColor,
	secondColor,
	thirdColor,
}:FavoriteCharacter)=>{

	const getScoreColor =(rating)=>{
		if(rating > 9){
			return "text-green-900 bg-green-500 border-green-500"
		}else if(rating > 7.8){
			return "text-green-700 bg-green-300 border-green-300"
		}else if(rating > 7){
			return "text-yellow-900 bg-yellow-500 border-yellow-500"
		}else if(rating > 6){
			return "text-yellow-700 bg-yellow-300 border-yellow-300"
		}else if(rating > 5){
			return "text-red-700 bg-red-500 border-red-500"
		}

		return "text-red-700 bg-red-500 border-red-500"
	}

	const trimName =(text)=>{
		// const max = text.indexOf(" ");
		// text = text.slice(0,max)
		return text.split(" ")[0]
	}

	const getScore =(rating)=>{
		rating = rating.toString();
		if(rating.includes('.') ){
			return rating
		}else{
			return rating + ".0"
		}
	}

	return(

		<div 
			className={`xborder-0 xborder-gray-100 xbg-black/90 xtext-yellow-700 xp-1 rounded-xl  font-semibold flex flex-col items-start justify-between shadow-2xl  h-[265]`}
			style = {{backgroundColor : firstColor ?? "white" , color : secondColor ?? "black"}}
		>

			{/*<h1 className="bg-gray-900 text-white font-bold text-md w-full text-center rounded-t-md p-2">{name}</h1>
			
			<div className="bg-gray-700 ">
				<img src={"https://placehold.co/600x400"} className="w-full  h-180] object-cover"/>
				<p className="text-white font-semibold text-md p-2">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</p>
			</div>

			<div className="flex flex-col gap-2 items-center p-2 justify-end self-end bg-gray-800 text-white font-bold rounded-b-md w-full">
				<p>{skill}</p>
				<p>{weapon}</p>
			</div>*/}
			
			<div className="flex flex-col item-center justify-center w-full relative p-1">

				<div className="flex flex-col item-start justify-start xborder-2 z-0 py-2 relative">
					
					<div 
						className={`w-10 h-10 border-2 absolute left-1/2  rounded-full top-1 -translate-x-1/2 ${getScoreColor(rating)} z-1 flex flex-row items-center justify-center `}
					>
						<span className={` text-xs text-center flex items-center justify-center flex-col px-2 h-[30] py-1 font-bold rounded-2xl `} >{getScore(rating)}</span>
					</div>

					{/* <h1 className="border-2 gap-20 grid grid-rows-2 h-1/3   w-full p-[0.5] z-5 flex-col flex items-start justify-start">
						<span className="font-bold text-[10px]  text-center">{type ? type : "Nothing"}</span> 
						<span className={`font-bold text-[10px]  text-center`} >{roleInUniverse ? roleInUniverse :  "Nothing"}</span>
					</h1> */}
				
				</div>

				{/*<div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
					<img
						src={imageUrl || "https://placehold.co/200x200"}
						alt={name}
						className="w-[200px] h-[200px] object-cover rounded-md shadow-xl border-2 border-gray-300"
					/>
				</div>*/}

				<div className="
						xborder-2 object-coverx absolute top-[115px] -translate-y-1/2 
						left-1/2 xshadow-xl w-full flex flex-row items-center justify-center -translate-x-1/2 xborder-2 z-10 
						">
					{/*<img 
						src={"https://img.pokemondb.net/sprites/scarlet-violet/normal/giratina-altered.png"} 
						className=" h-[200] ratio-1  object-cover xshadow-xl xborder-2 "
					/>*/}
					<img 
						src={imageUrl ? `https://localhost:7160/api/v1/files/get-file-WithExtention?fileName=${imageUrl}` : "https://img.pokemondb.net/sprites/scarlet-violet/normal/giratina-altered.png"} 
						className="xborder-2 h-[120] max-w-[120] w-full h-full max-h-[120] ratio-1  object-contain xshadow-xl xborder-2 z-10"
					/>
					{/*https://localhost:7160/api/v1/files/get-file-WithExtention?fileName=Bob.png*/}
				</div>

			</div>


			<div className="xborder-2 w-full">



				<div className="py-5  flex flex-col p-0 h-1/3">
					<h1 
						className={`text-center font-bold`}
						style = {{backgroundColor : thirdColor ? `${thirdColor}` : "Yellow",color : secondColor ? `` : "Red"}}
					>
						<span>{name ? trimName(name) : "Nothing"} </span>
					</h1>

					<h1 className="hiddenw-full xborder-2 mt-2 flex flex-col flex-row text-xs item-center justify-around h-[40] ">
						<span className="flex text-[10px] items-center gap-2 xborder-2 px-2"><Swords width={25}/>{weapon ? weapon : "Nothing"}</span>
						<span className="flex text-[10px]  items-center gap-2 xborder-2 px-2"><Scroll width={25}/>{skill ? skill : "Nothing"}</span>
					</h1>

				</div>

				{/*<div className="p-2 xborder-2">
					Ipsum
				</div>*/}

			</div>

			

		</div>

	)
}

export default FavoriteGameCard;