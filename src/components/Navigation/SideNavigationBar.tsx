"use client"

import React from "react";
import {usePathname,useRouter,useRoute} from "next/navigation";
import sideBarRoutes  from "./SideBarRoutes.ts";

const App =()=>{

	const router = useRouter();
	const path = usePathname();

	const redirectPage =(destination)=>{
		console.log("Redirecting")
		router.push(destination)
	}

	return(
		<nav className = "border-4 border-yellow-900 w-1/6 flex items-start justify-start flex-col">
			
			{
				sideBarRoutes .map((a,i)=>{
					return(
					<div 
						key = {i}
						className="text-black flex items-center justify-center border-2 border-yellow-300 w-full p-2"
					>
						<button onClick={()=>redirectPage(a.path)}>{a.label}</button>
					</div>
					)
				})
			}

		</nav>
	)
}

export default App;