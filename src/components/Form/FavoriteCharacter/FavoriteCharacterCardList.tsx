"use client"

import React,{useEffect,useState} from "react";
import FavoriteCharacterCard from "@/components/Card/FavoriteCharacterCard.tsx";
import {getAllFavoriteGame,getCharacterWithFullDetails} from "@/api/FavoriteCharacterApi.ts";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";
import FavoriteCharacterType from "@/types/FavoriteCharacterDetailType.ts";
import AButton from "@/components/AButton.tsx"
import { Pencil,Trash } from 'lucide-react';
import {useRouter} from "next/navigation";

const FavoriteCharacterCardList =()=>{

	const router = useRouter();

	const [allChar,setAllChar] = useState<FavoriteCharacterType[]>([]);
	const [showEdit,setShowEdit] = useState(false);

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

	const toggleEdit =()=>{
		setShowEdit(!showEdit);
	}

	const goToEditPage =(id)=>{
		router.push(`/Form/FavoriteCharacter/Upsert/${id}`)
	}

	return(
		<div className="w-full">

			<div className="w-full flex items-start flex-row justify-start mb-5">
				<button 
					className="w-1/5 xborder-2 my-2 font-semibold text-yellow-900 p-2 rounded-md bg-yellow-500"
					onClick={toggleEdit}
				>
					Edit
				</button> 
				{/*<button 
					className="w-1/5 xborder-2 my-2 mx-2 font-semibold text-red-900 p-2 rounded-md bg-red-500"
					onClick={toggleEdit}
				>
					Delete
				</button> */}
			</div>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
				
				{allChar.map((a)=>{
					return(
						<div className="relative">

							{showEdit && 
								<>
									<div className="rounded-full bg-yellow-300 p-2 absolute right-6 -top-5 z-15 w-8 h-8 flex items-center hover:bg-orange-900 hover:scale-[1.25] transition-all">
										<Pencil w={16} className="xabsolute text-yellow-500  xtop-5 xz-10" onClick={()=>goToEditPage(a.id)}/>
									</div>
									<div className="rounded-full bg-red-300 p-2 absolute -right-3 -top-5 z-15 w-8 h-8 flex items-center hover:bg-red-900 hover:scale-[1.25] transition-all">
										<Trash w={16} className="xabsolute text-red-500  xtop-5 xz-10"/>
									</div>
								</>
							}

							<FavoriteCharacterCard 
								className="z-0"
								key = {a.id}
								{...a}
							/>
						</div>
					)
				})}
			</div>
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