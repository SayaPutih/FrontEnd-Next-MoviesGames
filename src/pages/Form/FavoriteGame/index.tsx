"use client"
import React from "react";
import AButton from "@/components/AButton.tsx";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import {useRouter,usePathname} from "next/navigation";
import FavoriteGameCardList from "@/components/Form/FavoriteGame/FavoriteGameCardList";

const FavoriteGame =()=>{

	const router = useRouter();
	const route = usePathname();
	const goToInsertPage =()=>{
		router.push(`${route}/Input`);
	}

	return(
		<div className="mb-2">
			<div className="flex flex-col items-center justify-between flex items-center justify-center">
				<h1 className="text-4xl font-semibold text-first sm:self-start">Favorite Games Page</h1>
				<div className="flex flex-col sm:flex-row justify-between w-full items-center">
					<div className="self-start flex flex-row items-center justify-center my-4 sm:mx-2 gap-4 bg-black p-2 rounded-md w-2/8">
						<div className="sm:w-16 sm:h-16 w-14 h-14 bg-first rounded-md"></div>
						<div className="sm:w-16 sm:h-16 w-14 h-14 bg-second rounded-md"></div>
						<div className="sm:w-16 sm:h-16 w-14 h-14 bg-third rounded-md"></div>
						<div className="sm:w-16 sm:h-16 w-14 h-14 bg-subfirst rounded-md"></div>
						<div className="sm:w-16 sm:h-16 w-14 h-14 bg-subsecond rounded-md"></div>
					</div>
					<div className="sm:w-1/4 w-full flex items-center justify-center">
						<AButton className="bg-second"  label="Insert Game" onClick={()=>goToInsertPage()} />
					</div>
				</div>
			</div>
			<FavoriteGameCardList />
			<div className="h-32"></div>
		</div>
	)
}

FavoriteGame.layout = EvanderLayout;
export default FavoriteGame;