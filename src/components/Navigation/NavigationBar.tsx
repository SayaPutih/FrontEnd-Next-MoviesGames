"use client"

import React,{useState} from "react";
import {usePathname,useRouter,useRoute} from "next/navigation";
import sideBarRoutes from './SideBarRoutes';
import routes from './Route';

import Image from "next/image";
import Sprite from "@/assets/Sprite.png";

const App =()=>{

	const path = usePathname();
	const router = useRouter();
	
	const [showNav , setShowNav] = useState(false);
	const toggleNav =()=>{
		setShowNav(!showNav);
		console.log("Hide And Show")
	}

	const changePage =(selectedPage)=>{
		router.push(selectedPage);
		
	}

	const redirectPage =(destination)=>{
		console.log("Redirecting")
		router.push(destination)
		toggleNav();
	}

	const isActive =(currentRoute)=>{
		return path === currentRoute;
	}

	return(
		<nav className = " w-full flex items-center justify-between bg-first px-4">
			<div className="text-white flex items-center justify-center ">
				<Image src={Sprite} width={50} alt="pokeball" onClick={()=>toggleNav()} />
			</div>
			
			<div className="text-subfirst font-bold flex items-center justify-center gap-4  mx-4 ">
				{routes.map((a,i)=>{
					return(
						<button className=" hover:underline" key={i} onClick={()=>changePage(a.link)}>{a.label}</button>
					)
				})}
			</div>

			{showNav &&
			<nav className = {`sm:hidden items-start justify-start flex-col gap-[0.25rem]  bg-third left-0 z-50 absolute bottom-0 h-full w-full `}>
				{
					sideBarRoutes .map((a,i)=>{
						return(
						<div 
							key = {i}
							className={` text-black flex items-center  justify-center shadow-lg text-second w-full p-2 ${isActive(a.path) ? "bg-yellow-100" : ""}`}
						>
							<button 
								onClick={()=>redirectPage(a.path)} 
								className={`font-bold ${isActive(a.path) ? " text-first" : "text-yellow-600"}`}
							>
								{a.label}
							</button>
						</div>
						)
					})
				}
				<div className={` flex items-center font-bold  justify-center shadow-lg text-red-700 self-end bg-red-200 w-full p-2`}>
					<button onClick={()=>toggleNav()}>Back</button>
				</div>
			</nav>
		}
		
		</nav>
	)
}

export default App;

{/* <section className="static w-1/6">
		<button className="sm:hidden flex abosulute bg-black text-white z-10" onClick={()=>toggleNav()}>
			Show
		</button>
		{showNav &&
			<nav className = {`w-full h-full items-start justify-start flex-col gap-[0.25rem] bg-third z-10 absolute `}>
				{
					sideBarRoutes .map((a,i)=>{
						return(
						<div 
							key = {i}
							className={` text-black flex items-center  justify-center shadow-lg text-second w-full p-2 ${isActive(a.path) ? "bg-yellow-100" : ""}`}
						>
							<button 
								onClick={()=>redirectPage(a.path)} 
								className={`font-bold ${isActive(a.path) ? " text-first" : "text-yellow-600"}`}
							>
								{a.label}
							</button>
						</div>
						)
					})
				}

			</nav>
		}</section> */}