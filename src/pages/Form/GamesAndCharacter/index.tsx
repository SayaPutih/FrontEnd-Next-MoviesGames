import React from "react";
import EvanderLayout from "@/components/DefaultLayout";
import GamesGalleryList from "@/components/Form/GamesAndCharacter/GamesAndCharacter";

const GamesGallery =()=>{
	return(
		<div className="w-full p-2 xbg-third rounded-md">
			<GamesGalleryList />
		</div>
	)
}

GamesGallery.layout = EvanderLayout;
export default GamesGallery;