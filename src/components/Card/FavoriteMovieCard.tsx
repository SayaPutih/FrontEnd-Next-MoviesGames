"use client"
import React,{useState,useEffect} from "react";
import FavoriteMovieDetail from "@/types/FavoriteMovieDetailType";
import { Pencil,Trash } from 'lucide-react';
import {useRouter} from "next/navigation";

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
}:FavoriteMovieDetail)=>{

	const router = useRouter();
	
	useEffect(()=>{
		console.log("In The Card");
		console.log(creatorName);
	},[])

	const toEditPage =()=>{
		
		router.push(`/Form/FavoriteMovie/Upsert/${id}`)
	}

	const getRating =(rate)=>{
		return rate * 10
	}

	const cutWord =(words)=>{
		const limit = 25;

		if(words.length > 25) return words.slice(0,28) + ". . .";
		
		return words
	}

	const getColorRating=(rate)=>{
		rate = rate * 10
		if(rate > 90)
			return "text-green-900 bg-green-800"
		if(rate > 75)
			return "text-green-800 bg-green-600"
		if(rate > 60)
			return "text-yellow-500 bg-yellow-300"

		return "text-red-700 bg-red-500"
	}

	return(
		<div className="relative hover:scale-[1.01] group">
		<div className="rounded-full bg-third z-10 p-2 -right-[10] -top-[10] absolute min-w-[10] items-center justify-center hidden group-hover:flex">
			<Pencil className=" " onClick={()=>toEditPage()}/>
		</div>
		<div
				style={{backgroundColor : thirdColor}} 
				className="border-red-400 xborder-2 h-[365] bg-gray-400 flex flex-col items-center justify-between overflow-hidden hover:shadow-2xl rounded-xl shadow-xl transition-all xhover:z-10 z-0  relative"
			>
			
			{/*<img 
				className="absolute object-cover opacity-[0.7] hover:opacity-[0.9]" 
				src="https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
			/>
			<div className="absolute top-0 z-20 p-2 flex flex-col items-center justify-between border-2 h-full text-center w-full">
				<div className="border-2"
					style={{backgroundColor : thirdColor}}
				>
					<h1 className="font-bold text-md text-first"
						style={{color : firstColor}}>{movieName}</h1>
					<h1 className="font-bold text-md text-first">{creatorName}</h1>
				</div>

				<div className="border-2">
					v<h1 className="font-bold text-md text-first">{description}</h1>
					v<h1 className="font-bold text-md text-first">{desc}</h1>
				</div>

				<div className="border-2">
					<h1 className="font-semibold text-md text-second">{watchYear}</h1>
					<h1 className="font-semibold text-md text-second">{rating}</h1>
					<h1 className="font-semibold text-md text-second">{genre}</h1>
					<h1 className="font-semibold text-md text-second">{playYear}</h1>
				</div>
			</div>*/}
			<div className="absolute top-0 w-full z-0 h-2/6" style={{backgroundColor : firstColor}}></div>
			<div className="absolute bottom-0 z-0 w-full  xh-1/6" style={{backgroundColor : secondColor}} ></div>
			<div className="absolute bottom-0 z-0 w-full  xh-1/6" style={{backgroundColor : secondColor}} ></div>

			<div className="xborder-2 border-yellow-900 w-full h-4/6 relative">
				
				{/*https://localhost:7160/api/v1/Files/get-file-WithExtention?fileName= */}

				<div className="p-4 z-10 flex w-full flex-col items-center justify-between h-full border-4">
					
					<div className="w-[225px] h-1/2 flex flex-row items-center justify-center border-4 border-blue-900">
						<img className="w-full h-full object-contain"
							src={imageUrl ? `https://localhost:7160/api/v1/Files/get-file-WithExtention?fileName=${imageUrl}` 
							: 
								"https://placehold.co/700x300"} 
							/>
					</div>

					<h1 className="font-bold text-xl xtext-first text-start">{movieName}</h1>
					<h1 className="font-semibold text-md xtext-first mb-4">{creatorName}</h1>

					<div className="flex flex-row w-full gap-2 self-end">
						<h1 className="font-normal w-1/6 border-[0.1rem] rounded-md p-[0.95px] text-center text-[10px] text-white">{watchYear ? watchYear : NaN}</h1>
						<h1 className="font-normal w-1/6 border-[0.1rem] rounded-md p-[0.95px] text-center text-[10px] text-white">{genre ? genre : "Def"}</h1>
						<h1 className="font-normal w-1/6 border-[0.1rem] rounded-md p-[0.95px] text-center text-[10px] text-white">{playYear ? playYear : NaN}</h1>
					</div>

				</div>

			</div>

			<div className="bxorder-2 border-yellow-900 w-full h-2/6 p-2 flex flex-col justify-between relative">

				

				<div className="border-[0.1rem] w-full border-gray-900"></div>
				
				<div className="flex flex-row items-center justify-between w-full h-full my-1">
					<div className="p-2 w-2/3 h-full ">
						<h1 className="font-semibold text-[10px] xtext-first">{description ? description : "None"}</h1>
						<h1 className="font-normal text-[9px] xtext-first">{desc ? cutWord(desc) : "None"}</h1>
					</div>
					<div className={`${getColorRating(rating)} p-2 xbg-green-600 w-full h-full flex items-center justify-center h-full w-full w-1/3 rounded-md`}>
						<h1 className="font-semibold text-2xl  xtext-subfirst">{getRating(rating)}</h1>
					</div>
				</div>

				<div className="border-2 border-green-800 "></div>
			</div>

		</div>
		</div>
	)
}

export default FavoriteMovieCard;