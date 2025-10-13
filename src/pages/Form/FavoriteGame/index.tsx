import React from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import FavoriteCharacterCardList from "@/components/Form/FavoriteCharacter/FavoriteCharacterCardList";

const FavoriteGame =()=>{
	return(
		<div className="m-2">
			<h1 className="text-2xl font-semibold text-first">Favorite Games Page</h1>
			<FavoriteCharacterCardList />
		</div>
	)
}

FavoriteGame.layout = EvanderLayout;
export default FavoriteGame;