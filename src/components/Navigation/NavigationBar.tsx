"use client"

import React from "react";
import {usePathname,useRouter,useRoute} from "next/navigation";
import routes from './Route.ts'

const App =()=>{

	const path = usePathname();
	const router = useRouter();

	const changePage =(selectedPage)=>{
		router.push(selectedPage);
	}

	return(
		<nav className = " w-full flex items-center justify-between bg-first">
			<div className="text-white flex items-center justify-center ">Test</div>
			<div className="text-white flex items-center justify-center ">Test</div>
			
			<div className="text-white flex items-center justify-center gap-4  mx-4 ">
				{routes.map((a,i)=>{
					return(
						<button key={i} onClick={()=>changePage(a.link)}>{a.label}</button>
					)
				})}
			</div>
		
		</nav>
	)
}

export default App;