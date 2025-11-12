"use client"
import React,{useEffect,useState} from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";

type FavoriteCharacterInsert = {
	gameId : String,
	mbtiId : String,
	characterName : String,
	bestSkillName : String,
	rating : Number,
	type : String,
	weapon : String,
	roleInUniverse : String,
	firstColor : String,
	secondColor : String,
	thirdColor : String,
	description : String,
}

const InputCharacterPage =()=>{

	useEffect(()=>{
		
	})

	return(
		<div>
			Input Character Page
		</div>
		)
}


InputCharacterPage.layout = EvanderLayout;
export default InputCharacterPage;