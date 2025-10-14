"use client"

import React from "react";
import {usePathname,useRouter,useRoute} from "next/navigation";
import routes from './Route';
import Image from "next/image";
import Sprite from "@/assets/Sprite.png";

const App =()=>{

	const path = usePathname();
	const router = useRouter();

	const changePage =(selectedPage)=>{
		router.push(selectedPage);
	}

	return(
		<nav className = " w-full flex items-center justify-between bg-first px-4">
			<div className="text-white flex items-center justify-center ">
				<Image src={Sprite} width={50} alt="pokeball" />
			</div>
			
			<div className="text-subfirst font-bold flex items-center justify-center gap-4  mx-4 ">
				{routes.map((a,i)=>{
					return(
						<button className=" hover:underline" key={i} onClick={()=>changePage(a.link)}>{a.label}</button>
					)
				})}
			</div>
		
		</nav>
	)
}

export default App;