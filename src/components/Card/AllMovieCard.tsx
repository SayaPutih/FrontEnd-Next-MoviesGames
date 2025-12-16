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
		<div
				style={{backgroundColor : thirdColor}} 
				className="xborder-red-400 xborder-2 h-[245] xbg-gray-400 flex flex-col items-center 
				justify-between overflow-hidden hover:shadow-2xl rounded-xl shadow-xl transition-all xhover:z-10 z-0  relative"
			>
			
			<div className="absolute top-0 w-full z-0 h-2/6" style={{backgroundColor : firstColor}}></div>
			<div className="absolute bottom-0 z-0 w-full   h-1/6" style={{backgroundColor : secondColor}} ></div>

			<div className="xborder-2 xborder-yellow-900 w-full h-4/6 relative">
				

				<div className="p-2 pt-4 z-10 flex w-full flex-col items-center justify-between h-full xborder-4">
					
					<div className="w-[170px] h-1/2 flex flex-row items-center justify-center xborder-4 xborder-blue-900 py-4 ">
						<img className="w-full h-full object-fit min-h-[100] mt-5 rounded-md"
							src={imageUrl ? `https://localhost:7160/api/v1/Files/get-file-WithExtention?fileName=${imageUrl}` 
							: 
								"https://placehold.co/300x170"} 
							/>
					</div>

					<h1 className="font-bold text-md xtext-first text-start mt-8">{movieName}</h1>
					<h1 className="font-semibold text-sm xtext-first mb-1">{creatorName}</h1>

					
					<div className="flex flex-row w-full xborder-2 border-black items-center justify-center gap-2">

							<div className="flex flex-row w-full gap-2 self-center w-4/5 p-1 mt-12" style={{color : secondColor,borderColor : secondColor}}>
								<h1 className="font-normal w-1/3 border-[0.1rem] rounded-md p-[1.2px] text-center text-[8px]" style={{color : secondColor,borderColor : secondColor}}>{watchYear ? watchYear : NaN}</h1>
								<h1 className="font-normal w-1/3 border-[0.1rem] rounded-md p-[1.2px] text-center text-[8px]" style={{color : secondColor,borderColor : secondColor}}>{genre ? genre : "Def"}</h1>
								<h1 className="font-normal w-1/3 border-[0.1rem] rounded-md p-[1.2px] text-center text-[8px]" style={{color : secondColor,borderColor : secondColor}}>{playYear ? playYear : NaN}</h1>
							</div>

							<div className="flex flex-row items-center justify-between w-1/5 h-full my-1">
								<div className={`${getColorRating(rating)} p-2 xbg-green-600 w-full h-full flex items-center justify-center h-full w-full w-1/3 rounded-md`}>
									<h1 className="font-semibold text-2xl  xtext-subfirst">{getRating(rating)}</h1>
								</div>
							</div>

					</div>
					
				</div>

			</div>

			{/*<div className="bxorder-2 border-yellow-900 w-full h-2/6 p-2 flex flex-col justify-between relative">

				<div className="border-[0.1rem] w-full border-gray-900"></div>
				
				<div className="flex flex-row items-center justify-between w-full h-full my-1">
					<div className={`${getColorRating(rating)} p-2 xbg-green-600 w-full h-full flex items-center justify-center h-full w-full w-1/3 rounded-md`}>
						<h1 className="font-semibold text-2xl  xtext-subfirst">{getRating(rating)}</h1>
					</div>
				</div>

				<div className="border-2 border-green-800 "></div>
			</div>
			*/}

			</div>
		</div>
	)
}

export default FavoriteMovieCard;