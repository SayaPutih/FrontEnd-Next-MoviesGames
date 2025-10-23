"use client"
import React from "react";
import {useState,useEffect} from "react";
import {useRouter,usePathname} from "next/navigation";
import EvanderLayout from "@/components/DefaultLayout";
import AButton from "@/components/AButton.tsx";
import FavoriteMovieCardList from "@/components/Form/FavoriteMovie/FavoriteMovieCardList"

const FavoriteMoviePage =()=>{

	const router = useRouter();
	const path = usePathname();
	const goToInsertPage =()=>{
		router.push(`${path}/Input`);
	}

	return(
		<div className="mb-2 w-full border-2x">
			<div className="flex flex-col items-center justify-between">
				<h1 className="text-4xl font-semibold text-first self-start">Favorite Games Page</h1>
				<div className="flex flex-row justify-between w-full items-center">
					<div className="self-start flex flex-row items-center justify-center my-4 mx-2 gap-4 bg-black p-2 rounded-md w-2/8">
						<div className="w-16 h-16 bg-first rounded-md"></div>
						<div className="w-16 h-16 bg-second rounded-md"></div>
						<div className="w-16 h-16 bg-third rounded-md"></div>
						<div className="w-16 h-16 bg-subfirst rounded-md"></div>
						<div className="w-16 h-16 bg-subsecond rounded-md"></div>
					</div>
					<div className="w-1/5">
						<AButton className="bg-second" label="Insert Movie" onClick={()=>{goToInsertPage()}}/>
					</div>
				</div>
			</div>
			<FavoriteMovieCardList />
			<FavoriteMovieCardList />
			<div className="h-32"></div>
		</div>
	)

}

FavoriteMoviePage.layout = EvanderLayout;
export default FavoriteMoviePage;