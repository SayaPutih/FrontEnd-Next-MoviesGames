"use client"

import React from "react";
import {useEffect,useState} from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import FavoriteCharacterCardList from "@/components/Form/FavoriteCharacter/FavoriteCharacterCardList.tsx";

const FavoriteCharacterPage =()=>{
	
	return(
		<div className="w-full flex flex-col">
			<div>
				<h1 className="text-first font-bold text-2xl mb-4">Favorite Character Page</h1>
			</div>
			
			<div>
				<FavoriteCharacterCardList />
			</div>

			{/*<div className="grid grid-cols-3">
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
			</div>*/}
		</div>
	)
}

FavoriteCharacterPage.layout = EvanderLayout;
export default FavoriteCharacterPage;