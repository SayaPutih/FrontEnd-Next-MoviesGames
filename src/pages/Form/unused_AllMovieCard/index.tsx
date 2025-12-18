"use client"
import React from "react";
import {useState,useEffect} from "react";
import {useRouter,usePathname} from "next/navigation";
import EvanderLayout from "@/components/DefaultLayout";
import AButton from "@/components/AButton.tsx";
import FavoriteMovieCardList from "@/components/Form/MovieGallery/AllMovieCard"

const FavoriteMoviePage =()=>{

	const router = useRouter();
	const path = usePathname();
	const goToInsertPage =()=>{
		router.push(`${path}/Upsert/${0}`);
	}

	return(
		<div className="mb-2 w-full border-2x">
			<div className="flex flex-col items-center justify-between">
				<h1 className="text-4xl font-semibold text-first sm:self-start">Favorite Movies Page</h1>
					
			</div>
			<FavoriteMovieCardList />
			
			<div className="h-32"></div>
		</div>
	)

}

FavoriteMoviePage.layout = EvanderLayout;
export default FavoriteMoviePage;