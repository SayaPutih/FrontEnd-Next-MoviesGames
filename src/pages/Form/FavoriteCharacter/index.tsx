"use client"

import React from "react";
import {useEffect,useState} from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import FavoriteCharacterCardList from "@/components/Form/FavoriteCharacter/FavoriteCharacterCardList.tsx";
import AButton from "@/components/AButton.tsx";
import {useRouter,usePathname} from "next/navigation";

const FavoriteCharacterPage =()=>{
	
	const router = useRouter();
	const route = usePathname();

	const goToInsert =()=>{
		router.push(`${route}/Upsert/0`);
	}

	return(
		<div className="w-full flex flex-col ">
			<div className="w-full flex flex-col items-center justify-between xborder-2 xborder-red-900">
				
				<h1 className="self-start text-first font-bold text-2xl mb-4">Favorite Character Page</h1>
				
				<div className="self-end w-full flex flex-row xborder-2 items-center justify-between">
					<div className="flex flex-row gap-2 w-1/3 mb-2 bg-black p-2 rounded-md">
						<div className="w-16 h-16 bg-first rounded-md"></div>
						<div className="w-16 h-16 bg-second rounded-md"></div>
						<div className="w-16 h-16 bg-third rounded-md"></div>
						<div className="w-16 h-16 bg-subfirst rounded-md"></div>
						<div className="w-16 h-16 bg-subsecond rounded-md"></div>
					</div>
					<div className="items-center justify-center w-1/4">
						<AButton label="Insert Character" onClick={()=>goToInsert()} />
					</div>
				</div>

			</div>
			
			<div>
				<FavoriteCharacterCardList />
			</div>

			{/*<div className="grid grid-cols-3">n
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