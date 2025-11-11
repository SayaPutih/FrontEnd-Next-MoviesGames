"use client"

import React,{useEffect,useState} from "react";
import FavoriteCharacterCard from "@/components/Card/FavoriteCharacterCard.tsx";
import {getAllFavoriteGame,getCharacterWithFullDetails} from "@/api/FavoriteCharacterApi.ts";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";
import FavoriteCharacterType from "@/types/FavoriteCharacterDetailType.ts";

const FavoriteCharacterCardList =()=>{

	const [allChar,setAllChar] = useState<FavoriteCharacterType[]>([]);

	useEffect(()=>{
		const getData =async ()=>{
				try{

				const res = await getCharacterWithFullDetails();
				console.log("------ Favorite Character -----");
				//console.log(res.status);
				console.log(res);
				// //if(!res.ok) throw new Error("Bad Fetching from Page master Evan");
				// console.log(res.total);
				//console.log(res.result);
				setAllChar(res);

			}catch(err){
				console.error(err);
			}
		}

		getData();


	},[])


	return(
		<div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
			{allChar.map((a)=>{
				return(
					<FavoriteCharacterCard 
						key = {a.id}
						{...a}
					/>
				)
			})}
		</div>
	)
}

export default FavoriteCharacterCardList;


// import React from "react";
// import {getAllFavoriteGame} from "@/api/FavoriteGameApi.ts";
// import FavoriteGameType from "@/types/FavoriteGameType.ts";
// import FavoriteGameCard from "@/components/Card/FavoriteGameCard.tsx";
// import {useState,useEffect} from "react";

// const FavoriteGameCardList =()=>{

// 	const [allFavoriteGame,setAllFavoriteGame] = useState<FavoriteGameType[]>([]);

// 	useEffect(()=>{

// 		const fetchData =async ()=>{
// 			try{
// 				const data = await getAllFavoriteGame();
// 				setAllFavoriteGame(data);
// 				console.log(allFavoriteGame);
// 			}catch(err){
// 				console.error(`Error Fetching : ${err}`);
// 			}
// 		}

// 		fetchData();

// 	},[])

// 	return(
// 		<div className="min-h-screen mb-10 border-yellow-600 border-2 flex flex-col items-center justify-center">
// 			List
// 			<div className="grid grid-cols-5 w-full p-4 gap-4">
// 				{allFavoriteGame.map((a,i)=>{
// 					return(
// 						<div key={a.id}>
// 							{i === 5 ? <FavoriteGameCard gameName={a.gameName} imageUrl="https://placehold.co/600x600" playYear={a.playYear} /> : <FavoriteGameCard {...a}/> }
// 						</div>
// 				)})}
// 			</div>
// 		</div>
// 	)
// }


// // 			Dibagi Jadi 3
// // 			Easy
// // 			Medium
// // 			Hard

// export default FavoriteGameCardList;