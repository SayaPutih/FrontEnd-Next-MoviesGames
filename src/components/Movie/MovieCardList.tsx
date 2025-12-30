"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";
import {getAllFavoriteMovie} from "@/api/FavoriteMovieDetailApi";
import MovieCard from "./MovieCard"
import {deleteMoviesById} from "@/api/FavoriteMovieApi";
import { Pen, Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import AButton from "../AButton";
import {useRouter} from "next/navigation";

const MovieCardList =()=>{

	const router = useRouter();

	const [allMovies , setAllMovies] = useState<FavoriteMovieDetailType[]>([]);

	const [selectedMovie , setSelectedMovie] = useState("");
	const [selectedId , setSelectedId] = useState("");
	const [deleteModal ,setDeleteModal] = useState(false);

	const [selectedEditMovie, setSelectedEditMovie] = useState<FavoriteMovieDetailType>();
	const [editModal ,setEditModal] = useState(false);
	const [companyId ,setCompanyId] = useState("");
	const [creatorName ,setCreatorName] = useState("");
	const [desc ,setDesc] = useState("");
	const [description ,setDescription] = useState("");
	const [firstColor ,setFirstColor] = useState("");
	const [genre ,setGenre] = useState("");
	const [id ,setId] = useState("");
	const [imageUrl ,setImageUrl] = useState("");
	const [movieName ,setMovieName] = useState("");
	const [playYear ,setPlayYear] = useState(0);
	const [rating ,setRating] = useState(0);
	const [secondColor ,setSecondColor] = useState("");
	const [thirdColor ,setThirdColor] = useState("");
	const [watchYear ,setWatchYear] = useState(0);

	useEffect(()=>{

		const getData = async ()=>{
			try{

				const res = await getAllFavoriteMovie();
				//const data = await res.json();
				setAllMovies(res);
				console.log(allMovies);
			}catch(err){
				console.log(err);
			}
		}

		getData();
		
	},[])

	const openEditModal =(movie : FavoriteMovieDetailType)=>{
		setEditModal(true)
		setSelectedEditMovie(movie)
		console.log(selectedEditMovie)
	}

	const onDelete = async ()=>{
		try{
			const res = await deleteMoviesById(selectedId);
			console.log("Successfully deleted id : "+selectedId);
			setDeleteModal(false);
			router.refresh();
		}catch(err){
			alert(err);
		}
	}

	const openDeleteModal = (label : string,id : string) =>{
		setDeleteModal(true);
		setSelectedMovie(label)
		setSelectedId(id)
	}

	return(
		<div className="border-2 h-full w-full p-2 mb-10 ">
			<h1 className="text-first text-xl font-bold text-start border-2 mb-2">Movie Page div</h1>
			<div className="grid grid-cols-1  sm:grid-cols-5 gap-4 p-4 ">
				{allMovies.map((a)=>{
					return(
						<div className="relative group" key={a.id}>
							<div className="absolute z-10 top-2 right-2 flex flex-row gap-1 
							opacity-0 group-hover:opacity-100 transition">
								<Pencil className="rounded text-yellow-900/50 bg-yellow-500 p-1" onClick={()=>openEditModal(a)}/>
								<Trash className="rounded text-red-900/50 bg-red-500 p-1"  onClick={()=>openDeleteModal(a.movieName,a.id)}/>
							</div>
							<MovieCard  movie={a} />
						</div>
					)
				})}
			</div>
			<div className="my-[20rem]">Lorem</div>
			
			{deleteModal && 
				<div className="bg-black/50 min-h-screen absolute z-10 top-0 w-full left-0 flex items-center justify-center ">
					<div className="rounded-md w-1/3 bg-white h-[200px] flex items-center justify-center flex-col shadow-lg gap-2">
						<h1 className="font-semibold text-black text-lg">Do You Want to Delete Movie</h1>
						<p className="text-md font-bold text-first">{selectedMovie}</p>
						<div className="flex flex-row w-1/2">
							<AButton label="Yes" onClick={()=>onDelete()} />
							<AButton label="No" onClick={()=>setDeleteModal(false)} />
						</div>
					</div>
				</div>
			}

		</div>
	)
}

export default MovieCardList;