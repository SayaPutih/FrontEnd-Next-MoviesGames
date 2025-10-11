"use client"

import React from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import {getAllFavoriteGame} from "@/api/FavoriteCharacterApi.ts";
import {useEffect,useState} from "react";
import FavoriteCharacter from "@/types/FavoriteCharacterType.ts";

const FavoriteCharacterPage =()=>{

	const [allChar,setAllChar] = useState<FavoriteCharacter[]>([]);

	useEffect(()=>{
		const getData =async ()=>{
				try{

				const res = await getAllFavoriteGame();
				console.log(res.status);
				//if(!res.ok) throw new Error("Bad Fetching from Page master Evan");
				console.log(res.total);
				console.log(res.result);
				setAllChar(res.result);
			}catch(err){
				console.error(err);
			}
		}

		getData();
	},[])

	return(
		<div>
			<div>
				FavoriteCharacterPage
			</div>

			<div className="grid grid-cols-3">
				{allChar.map((a)=>{return(
						<div key={a.id} className="flex flex-col gap-0">
							<h1>{a.characterName}</h1>
							<h1>{a.movieId}</h1>
							<h1>{a.gameId}</h1>
							<h1>{a.mbtiId}</h1>
							<h1>{a.bestSkillName}</h1>
							<h1>{a.rating}</h1>
							<h1>{a.type}</h1>
							<h1>{a.weapon}</h1>
							<h1>{a.roleInUniverse}</h1>
						</div>
					)})}
			</div>
		</div>
	)
}

FavoriteCharacterPage.layout = EvanderLayout;
export default FavoriteCharacterPage;