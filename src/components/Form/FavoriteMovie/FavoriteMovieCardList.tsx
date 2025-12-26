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
	const [searchName,setSearchName] = useState("");

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

	const sortedArray = allFavoriteMovie.filter((a)=>a.movieName.toLowerCase().includes(searchName.toLowerCase()));

	return(
		<>
		<div className="flex flex-col gap-2 w-full">
			<label className="text-xs text-gray-800">Find Movie</label>
			<input
				value={searchName}
				onChange={(e)=>setSearchName(e.target.value)}
				className="bg-gray-800 p-2 rounded-md border-0 text-md text-third font-bold"
				type="text"
			/>
		</div>
		<div className="grid grid-cols-1 md:grid-cols-4 xborder-2 border-red-900 w-full gap-4 p-2 z-0 ">
			
			{sortedArray.map((a)=>{return(
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
		</>
	)
}

export default FavoriteMovieCardList;