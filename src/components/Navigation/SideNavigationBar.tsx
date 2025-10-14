"use client"

import React from "react";
import {usePathname,useRouter} from "next/navigation";
import sideBarRoutes  from "./SideBarRoutes.ts";

const App =()=>{

	const router = useRouter();
	const path = usePathname();

	const redirectPage =(destination)=>{
		console.log("Redirecting")
		router.push(destination)
	}

	const isActive =(currentRoute)=>{
		return path === currentRoute;
	}

	return(
		<nav className = "w-1/6 flex items-start justify-start flex-col gap-[0.25rem] bg-third  ">
			
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
	)
}

export default App;