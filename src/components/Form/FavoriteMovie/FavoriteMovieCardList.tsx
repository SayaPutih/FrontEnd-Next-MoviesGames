"use client"
import React,{useState,useEffect} from "react";
import {useRouter,usePathname} from "next/navigation";

import FavoriteMovieCard from "@/components/Card/FavoriteMovieCard";


import FavoriteMovieDetail from "@/types/FavoriteMovieDetailType";
import {getAllFavoriteMovie} from "@/api/FavoriteMovieDetailApi";

const FavoriteMovieCardList =()=>{

	const router = useRouter();
	const path = usePathname();

	const [allFavoriteMovie , setAllFavoriteMovie] = useState<FavoriteMovieDetail[]>([]);

	useEffect(()=>{

		const getApi =async ()=>{
			try{

				const res = await getAllFavoriteMovie();
				console.log(res);
				setAllFavoriteMovie(res);
			}catch(err){
				console.log(err);
			}
		}

		getApi();

	},[])

	return(
		<div className="grid grid-cols-1 md:grid-cols-4 xborder-2 border-red-900 w-full gap-4 p-2 z-0 ">
			{allFavoriteMovie.map((a)=>{return(
				<>
					<FavoriteMovieCard
						className="z-0"
						key = {a.id}
							{...a}
							// movieName={a.movieName}
							// genre={a.genre}
							// description={a.description}
						/>
				</>
				)})}
		</div>
	)
}

export default FavoriteMovieCardList;