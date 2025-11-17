"use client"

import React,{useEffect,useState} from "react";
import FavoriteCharacterCard from "@/components/Card/FavoriteCharacterCard.tsx";
import {getAllFavoriteGame,getCharacterWithFullDetails,deleteCharacterById} from "@/api/FavoriteCharacterApi.ts";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";
import FavoriteCharacterType from "@/types/FavoriteCharacterDetailType.ts";
import AButton from "@/components/AButton.tsx"
import { Pencil,Trash } from 'lucide-react';
import {useRouter} from "next/navigation";

const FavoriteCharacterCardList =()=>{

	const router = useRouter();

	const [allChar,setAllChar] = useState<FavoriteCharacterType[]>([]);
	const [showEdit,setShowEdit] = useState(true);

	const [search, setSearch] = useState("");
	const [ratingMin ,setRatingMin] = useState(0);
	const [whichStanding , setWhichStading] = useState("");
	const standingList = [... new Set(allChar.map(a=>a.standing))]

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

	const deleteCharacter=(id)=>{
		const res = deleteCharacterById(id);
		if(res){
			router.refresh();
		}else{
			alert("Failed Deleting a Character")
		}
	}

	const filterMode = (search ? allChar.filter(c=> c.name.toLowerCase().includes(search.toLowerCase())) : allChar) 

	const filtered = allChar.filter(c=>{

		const matchName = search ? c.name.toLowerCase().includes(search.toLowerCase()): true;
		const matchRating = ratingMin ?  c.rating >= ratingMin : true;
		const standingFilter = whichStanding ? c.standing == whichStanding : true;

		return matchName && matchRating && standingFilter;
	});
	
	const ratingList = [...new Set(allChar.map((a=>a.rating)))]

	const goToEditPage =(id)=>{
		router.push(`/Form/FavoriteCharacter/Upsert/${id}`)
	}

	return(
		<div className="w-full mb-20">

			<div className="w-full flex items-center flex-row justify-center gap-2 mb-5">
				
				<input 
					type="text"
					className="p-2 w-full bg-gray-900 rounded-md font-semibold text-third"
					value ={search}
					onChange={(e)=>setSearch(e.target.value)}
				/>

				<select
					className="p-2 w-1/5 bg-gray-900 rounded-md font-semibold text-third"
					onChange={(a)=>setRatingMin(Number(a.target.value))}
				>
					<option value="" disabled>Rating</option>
					<option value={0} >None</option>
					{ratingList.map((a,i)=>{
						return(
						<option key={i} value={a} >{a}</option>
					)})}
				</select>

				<select
					className="p-2 w-1/5 bg-gray-900 rounded-md font-semibold text-third"
					value={whichStanding}
					onChange={(e)=>setWhichStading(e.target.value)}
				>
					<option disabled value="">Standing</option>
					<option  value="">None</option>
					{
						standingList.map((a,i)=>{return(
							<option key={i} value={a}>{a}</option>
						)})
					}
				</select>
				
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

			<div className="grid grid-cols-1 mx-[25] sm:m-0 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-[35] mb-20">
				
				{filtered.map((a)=>{
					return(
						<div key = {a.id} className="relative">

							{showEdit && 
								<>
									<div className="rounded-full bg-yellow-300 p-2 absolute right-6 -top-5 z-15 w-8 h-8 flex items-center hover:bg-orange-900 hover:scale-[1.25] transition-all">
										<Pencil w={16} className="xabsolute text-yellow-500  xtop-5 xz-10" onClick={()=>goToEditPage(a.id)}/>
									</div>
									<div key = {a.id} className="rounded-full bg-red-300 p-2 absolute -right-3 -top-5 z-15 w-8 h-8 flex items-center hover:bg-red-900 hover:scale-[1.25] transition-all">
										<Trash w={16} className="xabsolute text-red-500  xtop-5 xz-10" onClick={()=>deleteCharacter(a.id)}/>
									</div>
								</>
							}

							<FavoriteCharacterCard 
								className="z-0 "
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
/*



	const filer = allChar.map(c=> 

	const standingFilter = whichStanding ? c.standing == standing : true
	)


*/

// // 			Dibagi Jadi 3
// // 			Easy
// // 			Medium
// // 			Hard

// export default FavoriteGameCardList;