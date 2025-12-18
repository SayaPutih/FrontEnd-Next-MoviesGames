import React from "react";
import EvanderLayout from "@/components/DefaultLayout";
import HallOfFameList from "@/components/Form/HallOfFame/HallOfFameList";

const GamesGallery =()=>{
	return(
		<div className="w-full p-2 xbg-third rounded-md">
			<HallOfFameList />
		</div>
	)
}

GamesGallery.layout = EvanderLayout;
export default GamesGallery;