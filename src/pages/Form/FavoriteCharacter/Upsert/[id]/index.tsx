"use client"
import React,{useEffect,useState} from "react";
import EvanderLayout from "@/components/DefaultLayout.tsx";
import {useRouter} from "next/navigation";
import {getAllMbti} from "@/api/MbtiApi.ts";
import {getAllFavoriteGame} from "@/api/FavoriteGameApi.ts";
import {upsertAFavoriteCharacter} from "@/api/FavoriteCharacterDetailApi.ts";
import {getCharacterWithFullDetailsById} from "@/api/FavoriteCharacterApi.ts";
import AButton from "@/components/AButton.tsx";
import {useParams} from "next/navigation";

type FavoriteCharacterInsert = {
	gameId : string,
	mbtiId : string,
	characterName : string,
	bestSkillName : string,
	rating : number,
	type : string,
	weapon : string,
	roleInUniverse : string,
	firstColor : string,
	secondColor : string,
	thirdColor : string,
	description : string,
	imageUrl : string,
}

const InputCharacterPage =(
	)=>{

	const params = useParams();
	const router = useRouter();
	const id = params?.id;
	
	const[editMode , setEditMode] = useState(false);

	const[mbtiList , setMbtiList] = useState([]);
	const[gameList , setGameList] = useState([]);

	const[gameId , setGameId] = useState("");
	const[mbtiId , setMbtiId ] = useState("");
	const[characterName , setCharacterName ] = useState("");
	const[bestSkillName , setBestSkillName ] = useState("");
	const[rating, setRating] = useState(0);
	const[type , setType ] = useState("");
	const[weapon , setWeapon ] = useState("");
	const[roleInUniverse , setRoleInUniverse ] = useState("");
	const[firstColor , setFirstColor ] = useState("");
	const[secondColor , setSecondColor ] = useState("");
	const[thirdColor , setThirdColor ] = useState("");
	const[description , setDescription ] = useState("");
	const[imageUrl , setImageUrl] = useState("");

	const[image , setImage ] = useState<File | null>(null);

	const submitForm =async ()=>{

		let uploadFileName = "";
		if(image){
			uploadFileName = await uploadImageGetFileName();
		}

		const submitData = {
		  movieId: null,
		  gameId,
		  MBTIid: mbtiId,
		  CharacterName: characterName,
		  bestSkillName,
		  rating,
		  type,
		  Weapon: weapon,
		  roleInUniverse,
		  firstColor,
		  secondColor,
		  thirdColor,
		  description,
		  imageUrl: uploadFileName? uploadFileName : imageUrl,
		};

		console.log("--Submiting--");
		console.log(submitData);
		console.log({
		  movieId: null,
		  gameId,
		  MBTIid: mbtiId,
		  CharacterName: characterName,
		  bestSkillName,
		  rating,
		  type,
		  Weapon: weapon,
		  roleInUniverse,
		  firstColor,
		  secondColor,
		  thirdColor,
		  description,
		  imageUrl: uploadFileName? uploadFileName : imageUrl,
		});

		console.log("------------File name------------------------");
		console.log(uploadFileName);

		const submit = await upsertAFavoriteCharacter(
			isGuid(id)? id :  "DBA6984F-4716-4239-BC23-31E8AEEF806B",
			submitData
			);

		if(!submit){
			alert("Somthing Wrong with Posting the Data");
		}else{
			router.push("../");
		}
	}

	const isGuid = (value: string) => {
	  const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	  return guidRegex.test(value);
	};

	const uploadImageGetFileName = async () => {
	  if (!image) return imageUrl;

	  const formData = new FormData();
	  formData.append("file", image);
	  formData.append("FileName", `${Date.now()}`);

	  const res = await fetch("https://localhost:7160/api/v1/Files/upload-file", {
	    method: "POST",
	    body: formData
	  });

	  if (!res.ok) {
	    console.error("UPLOAD ERROR", await res.text());
	    return "";
	  }
	  console.log("-----res image ----------------")
	  console.log(res);
	  const data = await res.json();
	  console.log("UPLOAD RESULT:", data);
	  return data.fileName || data.FileName; // biar aman
	};

	useEffect(()=>{

		setEditMode(isGuid(id))

		const getData =async ()=>{
			try{

				if(isGuid(id)){
					const res3 = await getCharacterWithFullDetailsById(id);
					console.log("--RES 3----------------");
					console.log(res3)
					setGameId(res3.gameId)
					setMbtiId(res3.mbtIid)
					setCharacterName(res3.name)
					setBestSkillName(res3.skill)
					setRating(res3.rating)
					setType(res3.type)
					setWeapon(res3.weapon)
					setRoleInUniverse(res3.standing)
					setFirstColor(res3.firstColor)
					setSecondColor(res3.secondColor)
					setThirdColor(res3.thirdColor)
					setDescription(res3.description)
					setImageUrl(res3.imageUrl)
				}

				const res1 = await getAllMbti();
				const res2 = await getAllFavoriteGame();
				
				setMbtiList(res1);
				setGameList(res2);

			}catch(err){
				console.log(err);
			}
		}

		getData()
		console.log(mbtiList);
		console.log(gameList);
		console.log("______________________________________________");
		console.log("Id : " + id);
		console.log("Char Name : " + characterName);
		console.log("Edit Mode : " + editMode);
		console.log("Is Guid : " + isGuid(id))
	},[])	

	return(
		<div className="x w-full p-2 grid grid-cols-6 flex flex-col items-center justify-center bg-third rounded-md mb-20 text-second font-bold text-md">

			<div className="flex  flex-col items-start justify-start h-full col-span-3 p-2 gap-2">
				<label htmlFor = "gameId">Game Id</label>
				<select 
					id = "gameId"
					value = {gameId}
					type = "text"
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setGameId(e.target.value)}
				>
					<option value="" disabled>--Select A Game--</option>
					{
						gameList.map((a,i)=>{
							return(
								<option key={a.id} value={a.id}>{a.gameName}</option>
							)
						})
					}
				</select>
			</div>

			<div className="flex  flex-col items-start justify-start h-full col-span-3 p-2 gap-2">
				<label htmlFor = "mbtiId">MBTI Id</label>
				<select  
					id = "mbtiId"
					type = "text"
					value = {mbtiId}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setMbtiId(e.target.value)}
				>
					<option value="" disabled>--Pick A Mbti--</option>
					{mbtiList.map((a,i)=>{
						return(
							<option key={a.id} value={a.id} >{a.mbtiType}</option>
						)
					})}
				</select>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3">
				<label htmlFor = "characterName">Character Name</label>
				<input 
					id = "characterName"
					type = "text"
					value = {characterName}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setCharacterName(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3" >
				<label htmlFor = "bestSkillName">Skill</label>
				<input 
					id = "bestSkillName"
					type = "text"
					value = {bestSkillName}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setBestSkillName(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3">
				<label htmlFor = "rating">Rating</label>
				<input 
					id = "rating"
					type = "number"
					value = {rating}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setRating(Number(e.target.value))}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3">
				<label htmlFor = "type">Type</label>
				<input 
					id = "type"
					type = "text"
					value = {type}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setType(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3">
				<label htmlFor = "weapon">Weapon</label>
				<input 
					id = "weapon"
					type = "text"
					value = {weapon}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setWeapon(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-3">
				<label htmlFor = "roleInUniverse">Role In Universe</label>
				<input 
					id = "roleInUniverse"
					type = "text"
					value = {roleInUniverse}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setRoleInUniverse(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-2">
				<label htmlFor = "firstColor">#1 Color (Baground)</label>
				<input 
					id = "firstColor"
					type = "color"
					value = {firstColor}
					
					placeholder = ""
					className="w-full bg-gray-900 text-white font-semibold rounded-md"
					onChange = {(e)=>setFirstColor(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-2">
				<label htmlFor = "">#2 Color (Text)</label>
				<input 
					id = "secondColor"
					type = "color"
					value = {secondColor}
					
					placeholder = ""
					className="w-full bg-gray-900 text-white font-semibold rounded-md"
					onChange = {(e)=>setSecondColor(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-2">
				<label htmlFor = "thirdColor">#3 Color (Banner)</label>
				<input 
					id = ""
					type = "color"
					value = {thirdColor}
					
					placeholder = ""
					className="w-full bg-gray-900 text-white font-semibold rounded-md"
					onChange = {(e)=>setThirdColor(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-6">
				<label htmlFor = "description">Description</label>
				<textarea 
					id = "description"
					type = "text"
					value = {description}
					
					placeholder = ""
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setDescription(e.target.value)}
				/>
			</div>

			<div className="flex  flex-col items-start justify-start h-full  p-2 gap-2 col-span-2">
				<label htmlFor = "image">image</label>
				<input 
					id = "image"
					type = "file"
					className="w-full p-2 bg-gray-900 text-white font-semibold rounded-md "
					onChange = {(e)=>setImage(e.target.files?.[0] || null)}
				/>
			</div>

			<div className="col-start-5 col-span-2 p-3">
				{!editMode ?
					<AButton label="Submit" onClick={()=>submitForm()}/>
				: 
					<AButton label="Edit" onClick={()=>submitForm()}/>
				}
			</div>
		</div>
		)
}


InputCharacterPage.layout = EvanderLayout;
export default InputCharacterPage;

/*
37500d94-9e89-4508-b9e2-e466a2457e2a
{
    "gameId": "cb0f08f5-029c-4346-9719-24cc747822be",
    "mbtiId": "fc3f89b0-f437-44e6-ab70-10b57e73c508",
    "characterName": "Sova",
    "bestSkillName": "Recon Dart",
    "rating": 8,
    "type": "Human",
    "weapon": "Odin",
    "roleInUniverse": "Agent",
    "firstColor": "#f5f4ee",
    "secondColor": "#3eb5de",
    "thirdColor": "#2d42a4",
    "description": "My Main agent in Valorant",
    "imageUrl": "https://placehold.co/600x400/EEE/31343C"
}

*/