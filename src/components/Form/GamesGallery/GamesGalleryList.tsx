"use client"

import React,{useState,useEffect} from "react";
import {getAllGamesAndCharacters} from "@/api/FavoriteCharacterDetailApi";
import FavoriteGameCard from "@/components/Card/FavoriteGameCard";
import FavoriteCharacterCard from "@/components/Card/FavoriteCharacterCard";
import FavoriteGameDetailType from "@/types/FavoriteGameDetailType";

const GamesGalleryList =()=>{

    const [gameList ,setGameList] = useState<FavoriteGameDetailType[]>([]);

    useEffect(()=>{
        const getData =async ()=>{
            try{
                const res = await getAllGamesAndCharacters();
                setGameList(res.value);
                console.log(res);
                console.log(gameList);

                
            }catch(err){
                console.log(err + "Something is wrong master Evan");
            }
        }

        getData();
        console.log("---------------------")
        
    },[])

    return(
        <div className=" w-full">
            <div className="border-4border-green-900 flex flex-col gap-5 ">
                {gameList.map((a)=>{
                    return(
                        <>
                        <div key={a.id} className={`${a.charDetails.length > 0 ? 'bg-second/20' : 'bg-first/30'} flex flex-col sm:flex-row w-full border-4border-red-900 lg:h-[720]  rounded-md`}>

                            <div className=" w-full sm:w-[350px] flex flex-col gap-5 p-4">
                                <FavoriteGameCard  {...a} />
                            </div>

                            <div className="border-2x sm:w-4/5 p-2 px-4">
                                {a.charDetails && a.charDetails.length > 0 ? (
                                    <>
                                    <h1 className="text-2xl text-second font-bold text-center flex items-center justify-center mb-3">
                                        <span className="bg-second/30x w-full underline">Characters</span>
                                    </h1>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                                        {a.charDetails.map((ab)=>{
                                            return(
                                                <>
                                                    <FavoriteCharacterCard key={ab.id} {...ab} />
                                                </>
                                            )
                                        })}
                                    </div>
                                    </>
                                ):( 
                                    <h1 className="text-4xl text-first font-bold text-center flex items-center justify-center  h-4/5 p-2">
                                        <span className="bg-first/30x w-full p-2">Nothing</span>
                                    </h1>
                                )}
                            </div>
                            
                        </div>
                        <div className="border-[2px] border-subsecond hidden w-full"></div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default GamesGalleryList;