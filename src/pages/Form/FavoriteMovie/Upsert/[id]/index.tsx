"use client"
import React,{useState,useEffect} from "react";
import {getFavoriteMovieById,upsertAFavoriteMovie} from "@/api/FavoriteMovieDetailApi";
import {getCompanyByApi} from "@/api/CompanyApi";
//import FavoriteMovieDetail from "@/types/FavoriteMovieDetailType";
import CompanyType from "@/types/CompanyType";
import {useParams,useRouter} from "next/navigation";
import EvanderLayout from "@/components/DefaultLayout";
import AButton from "@/components/AButton";

type submitDataFavoriteMovieDetail = {
    movieName : string,
    companyId : string,
    rating : number,
    creatorName : string,
    genre : string,
    playYear : number,
    desc : string,
    watchYear : number,
    firstColor : string,
    secondColor : string,
    thirdColor : string,
    description : string,
};

const UpsertAFavoriteMoviePage =()=>{

    const router = useRouter();
    const path = useParams();
    const id = path?.id as string;

    const [editMode , setEditMode] = useState(false);

    const [listOfCompany , setListOfCompany] = useState<CompanyType[]>([]);

    const [companyId , setCompanyId] = useState("");
    const [movieName , setMovieName] = useState("");
    const [rating , setRating] = useState(0);
    const [creatorName, setCreatorName] = useState("");
    const [genre, setGenre] = useState("");
    const [playYear, setPlayYear] = useState(0);
    const [desc, setDesc] = useState("");
    const [watchYear, setWatchYear] = useState(0);
    const [firstColor, setFirstColor] = useState("");
    const [secondColor, setSecondColor] = useState("");
    const [thirdColor, setThirdColor] = useState("");
    const [description, setDescription] = useState("");

    const isGuid =(Guid : string)=>{
        const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	    return guidRegex.test(Guid);
    }

    const onSubmit =async ()=>{
        
        const submitData: submitDataFavoriteMovieDetail = {
            companyId,
            movieName,
            rating,
            creatorName,
            genre,
            playYear,
            desc,
            watchYear,
            firstColor,
            secondColor,
            thirdColor,
            description
        };

        console.log("----------------------------");
        console.log(submitData);
        const res = await upsertAFavoriteMovie(
            "623fe1f8-aa7f-439d-8e12-104750fd9647"
            ,submitData
        );

        if(res){
            return router.push("/Form/FavoriteMovie");
        }else{
            alert(res);
        }
    }

    useEffect(()=>{

        setEditMode(isGuid(id))

        const getApi =async ()=>{
            try{

                const resCompany = await getCompanyByApi();
                console.log(resCompany);
                setListOfCompany(resCompany);

                if(editMode){
                    const res = await getFavoriteMovieById(id);
                    setMovieName(res.movieName); //v
                    setRating(res.rating); //v
                    setCreatorName(res.creatorName); //v
                    setGenre(res.genre); //v
                    setPlayYear(res.playYear); //v
                    setDesc(res.desc); //v
                    setWatchYear(res.watchYear); //v
                    setFirstColor(res.firstColor);
                    setSecondColor(res.secondColor);
                    setThirdColor(res.thirdColor);
                    setDescription(res.description); //v
                }

            }catch(err){
                console.log("Failed fetching API on page : " + err);
            }
        }

        getApi();

    },[])

    return(
        <div className="xborder-2 grid grid-cols-8 w-full p-2 bg-third">

            <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="movieName" className="text-second font-bold text-md mb-1" >Movie Name</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="movieName"
                    type="text"
                    value={movieName}
                    onChange={(a)=>setMovieName(a.target.value)}
                />
            </div> 

        
            <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="companyId" className="text-second font-bold text-md mb-1" >Company</label>
                <select 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="companyId"
                    value={companyId}
                    onChange={(a)=>setCompanyId(a.target.value)}
                >
                    <option value="" disabled>-- Select A Company --</option>
                    {listOfCompany.map((a)=>{
                        return(
                            <option value={a.companyId} key={a.companyId}>{a.companyName}</option>
                        )
                    })}
                </select>
            </div> 


            <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="creatorName" className="text-second font-bold text-md mb-1" >Creator</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="creatorName"
                    type="text"
                    value={creatorName}
                    onChange={(a)=>setCreatorName(a.target.value)}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="genre" className="text-second font-bold text-md mb-1" >Genre</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="genre"
                    type="text"
                    value={genre}
                    onChange={(a)=>setGenre(a.target.value)}
                />
            </div> 

             <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="desc" className="text-second font-bold text-md mb-1" >Desc</label>
                <textarea 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="desc"
                    value={desc}
                    onChange={(a)=>setDesc(a.target.value)}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-4">
                <label htmlFor="description" className="text-second font-bold text-md mb-1" >Description</label>
                <textarea 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="description"
                    value={description}
                    onChange={(a)=>setDescription(a.target.value)}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-2">
                <label htmlFor="playYear" className="text-second font-bold text-md mb-1" >Watch Year</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="playYear"
                    type="text"
                    value={playYear}
                    onChange={(a)=>setPlayYear(Number(a.target.value))}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-2">
                <label htmlFor="watchYear" className="text-second font-bold text-md mb-1" >Play Year</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="watchYear"
                    type="text"
                    value={watchYear}
                    onChange={(a)=>setWatchYear(Number(a.target.value))}
                />
            </div>

            <div className="xborder-2 flex flex-col p-2 col-span-2">
                <label htmlFor="rating" className="text-second font-bold text-md mb-1" >Rating</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md p-1 text-md"
                    id="rating"
                    type="text"
                    value={rating}
                    onChange={(a)=>setRating(Number(a.target.value))}
                />
            </div>

            <div className="xborder-2 flex flex-col p-2 col-span-2 col-start-1">
                <label htmlFor="firstColor" className="text-second font-bold text-md mb-1" >First Color</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md text-md w-full"
                    id="firstColor"
                    value={firstColor}
                    type="color"
                    onChange={(a)=>setFirstColor(a.target.value)}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-2">
                <label htmlFor="secondColor" className="text-second font-bold text-md mb-1" >Second Color</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md text-md w-full"
                    id="secondColor"
                    value={secondColor}
                    type="color"
                    onChange={(a)=>setSecondColor(a.target.value)}
                />
            </div> 

            <div className="xborder-2 flex flex-col p-2 col-span-2">
                <label htmlFor="thirdColor" className="text-second font-bold text-md mb-1" >Third Color</label>
                <input 
                    className="bg-gray-900 font-semibold text-subfirst rounded-md text-md w-full"
                    id="thirdColor"
                    value={thirdColor}
                    type="color"
                    onChange={(a)=>setThirdColor(a.target.value)}
                />
            </div> 
            
             

            <div className="col-start-6 w-full col-end-9 p-2">
                <AButton label="Submit" className="w-full" onClick={()=>onSubmit()} />
            </div>

        </div>
    )
}

UpsertAFavoriteMoviePage.layout = EvanderLayout;
export default UpsertAFavoriteMoviePage;

/*
"623fe1f8-aa7f-439d-8e12-104750fd9647"
"06FDEF90-921B-44B6-9155-39F202FA13F6"
{
    "companyId" : "06FDEF90-921B-44B6-9155-39F202FA13F6"
    "movieName": "A", 
    "rating": 4, 
    "creatorName": "A", 
    "genre": "A", 
    "playYear": 2020,
    "desc": "A",
    "description": "A",
    "firstColor": "#db0000",
    "secondColor": "#0033ff",
    "thirdColor": "#44ff00",
    "watchYear": 2019
}
*/