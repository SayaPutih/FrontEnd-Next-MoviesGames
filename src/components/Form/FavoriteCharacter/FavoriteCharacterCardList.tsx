"use client"

import React from "react";
import {useState,useEffect} from "react";
import FavoriteCharacterCard from "@/components/Card/FavoriteCharacterCard.tsx";
import FavoriteGameDetailType from "@/types/FavoriteGameDetailType.ts";
import {getFavoriteGameFullDetails} from "@/api/FavoriteGameDetailApi.ts";

const FavoriteCharacterCardList =()=>{

	const [allGames,setAllGames] = useState<FavoriteGameDetailType[]>([]);

	useEffect(()=>{

		const getApi = async ()=>{
			try{
				const res = await getFavoriteGameFullDetails();
				console.log(res);
				setAllGames(res);
			}catch(err){
				console.log(err);
			}	
		}

		getApi();
		
		console.log(`Showing All games : `);
		console.log(allGames);

	},[])

	return(
		<div className="X_border-2_border-gray-900_bg-third">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2">
				{allGames.map((a)=>{
					return(
						<FavoriteCharacterCard 
							key = {a.id}
							{...a}
						/>
					)
				})}
			</div>

		</div>
	)
}

export default FavoriteCharacterCardList;