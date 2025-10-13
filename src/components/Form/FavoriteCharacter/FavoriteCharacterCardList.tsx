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
		<div className="border-2 border-gray-900">
			FavoriteCharacterCardList

			<div className="grid grid-cols-5 gap-4 px-2">
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