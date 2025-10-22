"use client"

import React from "react";
import {useRouter} from "next/navigation";
import {getCompanyByApi} from "@/api/CompanyApi";
import {insertAFavoriteGame} from "@/api/FavoriteGameApi";
import EvanderLayout from "@/components/DefaultLayout";
import {useEffect,useState} from "react";
import Company from "@/types/CompanyType"
import AButton from "@/components/AButton";
//import FavoriteGameInsert from "@/types/FavoriteGameInsertType";

type FavoriteGameInsert = {
	companyId : string,
	gameName : string,
	rating : number,
	creatorName : string,
	genre : string,
	playYear : number
}


const InputFavoriteGame =()=>{
	
	const router = useRouter();

	const [companyData , setCompanyData] = useState<Company[]>([]);

	const [companyId , setCompanyId] = useState("");
	const [gameName , setGameName] = useState("");
	const [rating , setRating] = useState(0);
	const [creatorName , setCreatorName] = useState("");
	const [genre , setGenre] = useState("");
	const [playYear , setPlayYear] = useState(0);

	useEffect(()=>{

		const getData =async ()=>{
			try{

				const res = await getCompanyByApi();
				setCompanyData(res);

			}catch(err){
				console.log(err);
			}
		}

		getData();
		console.log("From PAGE");
		console.log(companyData);

	},[])

	const onSubmit =async ()=>{
		try{

			const insertData : FavoriteGameInsert = {
				companyId,
				gameName,
				rating : Number(rating),
				creatorName,
				genre,
				playYear : Number(playYear)
			}
			console.log(insertData);
			const res = await insertAFavoriteGame(insertData);
			console.log('Done Insert');
			console.log(insertData);
			router.push("../");

		}catch(err){
			alert(err);
			console.log(err);
		}
	}

	return(
		<div className="xxborder-4 w-full border-first grid grid-cols-6 bg-third rounded-md">
			
			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-3">
				<label htmlFor="gameName" className="text-black text-md text-second font-bold">Game Name</label>
				<input type="text" id="gameName" value={gameName} onChange={(e)=>setGameName(e.target.value)} className="w-full bg-gray-800 rounded-md text-white p-2"/>
			</div>

			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-3">
				<label htmlFor="company" className="text-black text-md text-second font-bold">Company {companyId}</label>
				<select type="text" id="company" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} className="w-full bg-gray-800 rounded-md text-white p-2">
					<option value="" className="text-subsecond font-bold" >-- Pick a Company --</option>
					{companyData.map((a)=>{
						return(
							<option value={a.companyId} >{a.companyName}</option>
						)
					})}
				</select>
			</div>

			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-2">
				<label htmlFor="creatorName" className="text-black text-md text-second font-bold">Creator</label>
				<input type="text" id="creatorName" value={creatorName} onChange={(e)=>setCreatorName(e.target.value)} className="w-full bg-gray-800 rounded-md text-white p-2"/>
			</div>
			

			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-2">
				<label htmlFor="genre" className="text-black text-md text-second font-bold">Genre</label>
				<input type="text" id="genre" value={genre} onChange={(e)=>setGenre(e.target.value)} className="w-full bg-gray-800 rounded-md text-white p-2"/>
			</div>

			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-1">
				<label htmlFor="rating" className="text-black text-md text-second font-bold">Rating</label>
				<input type="number" id="rating" value={rating} onChange={(e)=>setRating(Number(e.target.value))} className="w-full bg-gray-800 rounded-md text-white p-2"/>
			</div>

			<div className="xborder-4 p-4 gap-2 flex items-start jusitfy-center w-full text-lg flex-col w-full col-span-1">
				<label htmlFor="playYear" className="text-black text-md text-second font-bold">Play Year</label>
				<input type="number" id="playYear" value={playYear} onChange={(e)=>setPlayYear(Number(e.target.value))} className="w-full bg-gray-800 rounded-md text-white p-2"/>
			</div>

			<div className="col-start-5 col-end-7 p-4">
				<AButton label="Submit" onClick={()=>onSubmit()} className=""/>
			</div>

		</div>
	)
}

InputFavoriteGame.layout = EvanderLayout;
export default InputFavoriteGame;
