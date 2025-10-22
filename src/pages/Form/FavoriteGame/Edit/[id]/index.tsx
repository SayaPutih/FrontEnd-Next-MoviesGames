"use client"

import React from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import {useParams,useRouter} from "next/navigation";
import {UpdateFavoriteGameFullDetails,getAllFavoriteGameById} from "@/api/FavoriteGameDetailApi";
import {useState,useEffect} from "react";
import FavoriteDetailGameType from "@/types/FavoriteDetailGameType";
import AButton from "@/components/AButton.tsx"

const UpdateAGamePage =()=>{

	const router = useRouter();
	const params = useParams();
	const id = params?.id;

	const [companyId,setCompanyId] = useState("");
	const [gameName,setGameName] = useState("Default");
	const [rating,setRating] = useState(0);
	const [creatorName,setCreatorName] = useState("");
	const [genre,setGenre] = useState("");
	const [rank,setRank] = useState("");
	const [completion,setCompletion] = useState("");
	const [playYear,setPlayYear] = useState(0);
	const [imageUrl,setImageUrl] = useState("");
	const [firstColor,setFirstColor] = useState("");
	const [secondColor,setSecondColor] = useState("");
	const [thirdColor,setThirdColor] = useState("");
	const [description,setDescription] = useState("");
	const [desc,setDesc] = useState("");
	const [rankInGame,setRankInGame] = useState("");
	const [isFav,setIsFav] = useState(false);
	const [listOfPros,setListOfPros] = useState([]);
	const [listOfCons,setListOfCons] = useState([]);

	useEffect(()=>{

		console.log("Use Effect");
		
		const getData = async ()=>{
			try{
				
				const res = await getAllFavoriteGameById(id);
				setCompanyId(res.companyId);
				setGameName(res.gameName);
				setRating(res.rating);
				setCreatorName(res.creatorName);
				setGenre(res.genre);
				setRank(res.rank);
				setCompletion(res.completion);
				setPlayYear(res.playYear);
				setImageUrl(res.imageUrl);
				setFirstColor(res.firstColor);
				setSecondColor(res.secondColor);
				setThirdColor(res.thirdColor);
				setDescription(res.description);
				setDesc(res.desc);
				setRankInGame(res.rankInGame);
				setIsFav(res.isFav);
				setListOfPros(res.listOfPros);
				setListOfCons(res.listOfCons);

			}catch(err){
				console.log(err);
			}
		}

		getData();

	},[])

	const updateGame = async ()=>{

		console.log("Result is-----")
		const giveData : FavoriteDetailGameType = {
				id,
				companyId,
				gameName,
				rating,
				creatorName,
				genre,
				playYear,
				imageUrl,
				completion,
				rankGame : rank,
				description,
				rankDetail : rankInGame,
				isFav,
				firstColor,
				secondColor,
				thirdColor,
				desc,
				listOfPros,
				listOfCons
			}

			console.log(giveData);

		try{

			const res = await UpdateFavoriteGameFullDetails(id,giveData);
			console.log(res);
			router.push("../")

		}catch(err){
			console.log(`Something is Wrong Master Evan ${err}`)
		}
	}

	return(
		<div className="w-full p-2 flex flex-col items-center justify-center w-4/5 mb-20 bg-third rounded-md p-4 shadow-lg">
			<h1 className="text-first text-xl font-bold">Update Game Pages : {id}</h1>
			<div className="grid grid-cols-6  text-gray-900 font-semibold m-2  w-full">
				<div className="col-span-4 px-5 flex-col p-2 text-lg items-startjustify-between flex flex-col">
					<label htmlFor="Game Name">Game Name<span> : </span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full my-2" 
						type="text" 
						id="Game Name" 
						value={gameName} 
						onChange={(e)=>setGameName(e.target.value)}
					/>
				</div>
				<div className="col-span-2 row-span-2 px-5 p-2 text-lg items-center justify-start gap-2 flex">
					<label htmlFor="isFav">Favorite<span></span></label>
					<input
						className="bg-gray-800 p-1 px-3 text-third font-semibold text-lg rounded-md mx-2 scale-[1.5] accent-yellow-200 " 
						type="checkbox" 
						id="isFav" 
						checked={isFav} 
						onChange={(e)=>setIsFav(e.target.checked)}
					/>
				</div>
				<div className="col-span-4 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="Rating">Rating : <span className="text-yellow-800">{rating}</span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-1 text-third font-semibold text-sm rounded-md w-full accent-third appearance-none"  
						type="range" 
						id="Rating" 
						value={rating} 
						min="0"
						max="10"
						step="0.1"
						onChange={(e)=>setRating(parseFloat(e.target.value))}

					/>
					<div className="flex justify-between w-full flex-row">
						<span>0</span>
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
					</div>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="creatorName">Creator Name<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="creatorName" 
						value={creatorName} 
						onChange={(e)=>setCreatorName(e.target.value)}
					/>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="genre">Genre<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="genre" 
						value={genre} 
						onChange={(e)=>setGenre(e.target.value)}
					/>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="playYear">Play year<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="playYear" 
						value={playYear} 
						onChange={(e)=>setPlayYear(e.target.value)}
					/>
				</div>


				<div className="col-span-3 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="rank">Main Progress<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="rank" 
						value={rank} 
						onChange={(e)=>setRank(e.target.value)}
					/>
				</div>


				<div className="col-span-3 px-5 flex-col p-2 text-lg items-start justify-between flex ">
					<label htmlFor="rankInGame">Extra Progress<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="rankInGame" 
						value={rankInGame} 
						onChange={(e)=>setRankInGame(e.target.value)}
					/>
				</div>


				<div className="col-span-6 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="completion">Completion<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="completion" 
						value={completion} 
						onChange={(e)=>setCompletion(e.target.value)}
					/>
				</div>
				<div className="col-span-5 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="desc">Game Description<span></span></label>
					<textarea
						className="self-start my-2 bg-gray-800 p-3 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="desc" 
						value={desc} 
						onChange={(e)=>setDesc(e.target.value)}
					/>
				</div>
				<div className="col-span-5 px-5  flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="description">Game Details<span></span></label>
					<textarea
						className="self-start my-2 bg-gray-800 p-3 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="description" 
						value={description} 
						onChange={(e)=>setDescription(e.target.value)}
					/>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="firstColor">First Color<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-[0.5] px-1 text-third font-semibold text-sm rounded-md  w-full" 
						type="color" 
						id="firstColor" 
						value={firstColor} 
						onChange={(e)=>setFirstColor(e.target.value)}
					/>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="secondColor">Second Color<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-[0.5] px-1 text-third font-semibold text-sm rounded-md  w-full" 
						type="color" 
						id="secondColor" 
						value={secondColor} 
						onChange={(e)=>setSecondColor(e.target.value)}
					/>
				</div>
				<div className="col-span-2 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="thirdColor">Third Color<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-[0.5] px-1 text-third font-semibold text-sm rounded-md  w-full" 
						type="color" 
						id="thirdColor" 
						value={thirdColor} 
						onChange={(e)=>setThirdColor(e.target.value)}
					/>
				</div>
				<div className="col-span-6 px-5 flex-col p-2 text-lg items-start justify-between flex">
					<label htmlFor="imageUrl">Image Url<span></span></label>
					<input
						className="self-start my-2 bg-gray-800 p-1 px-3 text-third font-semibold text-sm rounded-md  w-full" 
						type="text" 
						id="imageUrl" 
						value={imageUrl} 
						onChange={(e)=>setImageUrl(e.target.value)}
					/>
				</div>
				<div className="col-start-6 col-end-7  flex items-center flex-row justify-end">
					<AButton 
						label="Submit"  
						onClick={()=>{updateGame()}}
					/>
				</div>
			</div>
		</div>
	)
}

UpdateAGamePage.layout = EvanderLayout;
export default UpdateAGamePage;