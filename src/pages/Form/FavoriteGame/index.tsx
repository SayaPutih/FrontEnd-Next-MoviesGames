import React from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import FavoriteCharacterCardList from "@/components/Form/FavoriteCharacter/FavoriteCharacterCardList";

const FavoriteGame =()=>{
	return(
		<div className="mb-2">
			<div className="flex flex-col items-center justify-between">
				<h1 className="text-4xl font-semibold text-first self-start">Favorite Games Page</h1>
				<div className="self-start flex flex-row items-center justify-center my-4 mx-2 gap-4 bg-black p-2 rounded-md w-2/8">
					<div className="w-16 h-16 bg-first rounded-md"></div>
					<div className="w-16 h-16 bg-second rounded-md"></div>
					<div className="w-16 h-16 bg-third rounded-md"></div>
					<div className="w-16 h-16 bg-subfirst rounded-md"></div>
					<div className="w-16 h-16 bg-subsecond rounded-md"></div>
				</div>
			</div>
			<FavoriteCharacterCardList />
			<div className="h-32"></div>
		</div>
	)
}

FavoriteGame.layout = EvanderLayout;
export default FavoriteGame;