import React from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import FavoriteCharacterCardList from "@/components/Form/FavoriteCharacter/FavoriteCharacterCardList";

const NotFoundGame =()=>{
	return(
		<div className="flex items-center justify-center">
			<h1 className="text-4xl font-semibold text-first self-start">The Page You're Looking for Is Not Found</h1>
		</div>
	)
}

NotFoundGame.layout = EvanderLayout;
export default NotFoundGame;