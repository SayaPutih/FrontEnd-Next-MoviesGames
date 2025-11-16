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

	const submitForm =async ()=>{

		const submitData : FavoriteCharacterInsert ={
				gameId,
				mbtiId,
				characterName,
				bestSkillName,
				rating,
				type,
				weapon,
				roleInUniverse,
				firstColor,
				secondColor,
				thirdColor,
				description,
			}

		console.log("--Submiting--");
		console.log(submitData);
		console.log({
		  gameId,
		  mbtiId,
		  characterName,
		  bestSkillName,
		  rating,
		  type,
		  weapon,
		  roleInUniverse,
		  firstColor,
		  secondColor,
		  thirdColor,
		  description
		});

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

	useEffect(()=>{

		setEditMode(isGuid(id))

		const getData =async ()=>{
			try{

				if(isGuid(id)){
					const res3 = await getCharacterWithFullDetailsById(id);

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
				<label htmlFor = "firstColor">#1 Color</label>
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
				<label htmlFor = "">#2 Color</label>
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
				<label htmlFor = "thirdColor">#3 Color</label>
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

{
	gameId": '37f91681-34d9-4a33-b17a-7c10ee3204b1', "
	mbtiId": 'b8ac38f2-b4a8-40f9-b7a3-02015ea016bd', "
	characterName": 'DoctorStrangeReal', "
	bestSkillName": 'string', "
	rating": 10,"
	bestSkillName": "string","
	characterName": "DoctorStrangeReal","
	description": "Blue Man","
	firstColor": "#1c69e6","
	gameId": "37f91681-34d9-4a33-b17a-7c10ee3204b1","
	mbtiId": "b8ac38f2-b4a8-40f9-b7a3-02015ea016bd","
	rating": 10,"
	roleInUniverse": "string","
	secondColor": "#ffed69","
	thirdColor": "#7c97c2","
	type": "string","
	weapon ": "AAA","
}


f10746dd-f2a6-4d8a-ab6c-fbedbd7adc04
{
    "gameId": "623fe1f8-aa7f-439d-8e12-104750fd9647",
    "mbtiId": "b8ac38f2-b4a8-40f9-b7a3-02015ea016bd",
    "characterName": "Ash Ketchum",
    "bestSkillName": "Ash Ketchum",
    "rating": 4,
    "type": "Ash Ketchum",
    "weapon": "Ash Ketchum",
    "roleInUniverse": "Ash Ketchum",
    "firstColor": "#0b50da",
    "secondColor": "#cc0f0f",
    "thirdColor": "#2840f0",
    "description": "Ash Ketchum"
}

0
{
    "gameId": "cb0f08f5-029c-4346-9719-24cc747822be",
    "mbtiId": "",
    "characterName": "Sova",
    "bestSkillName": "Recon Dart",
    "rating": 8,
    "type": "Human",
    "weapon": "Odin",
    "roleInUniverse": "Agent",
    "firstColor": "#f5f4ed",
    "secondColor": "#38b3dd",
    "thirdColor": "#263ca1",
    "description": "Agent from Valorant my Favorite Agent because it has wallbang potential"
}

*/