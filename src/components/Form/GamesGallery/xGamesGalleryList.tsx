"use client"

import React,{useState,useEffect} from "react";
import {getAllGamesAndCharacters} from "@/api/FavoriteCharacterDetailApi";
import FavoriteGameCard from "@/components/Card/xFavoriteGameCard";
import FavoriteCharacterCard from "@/components/Card/xFavoriteCharacterCard";
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
            <div className=" grid grid-cols-5  gap-5 ">
                {gameList.map((a)=>{
                    return(
                        <>
                        <div key={a.id} className={`${a.charDetails.length > 0 ? 'bg-second/20' : 'bg-first/30'} flex flex-col sm:flex-row  rounded-md`}>

                            <div className=" w-full  flex flex-col  p-2">
                                <FavoriteGameCard  {...a} />
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default GamesGalleryList;