"use client"
import React from "react";
import {usePathname,useRouter} from "next/navigation";
import {useState} from "react";
import EvanderLayout from "@/components/DefaultLayout";

const NotFoundPage =()=>{


	const route = usePathname();
	const router = useRouter();
	const [routePath , useRoutePath] = useState(route);

	const goToHomePage = () =>{
		
		router.push("/")
	}

	return(
		<div 
			className="bg-secondx h-screen flex font-semiboldx 
									text-second flex-col items-center justify-center gap-2"
		>
			<h1 className="text-2xl font-bold">
				Page Not Found 
			</h1>
			<h1 className="text-lg">
				{/*The page you are finding is not found <br />
				The page : */}
				<span className="font-bold underline text-first"> {routePath}</span>
			</h1>
			<h1 className="hover:underlinex xhover:text-third
				text-third p-2 rounded-md bg-first font-bold hover:bg-second" onClick={()=>goToHomePage()}>
				Go To Home
			</h1>
		</div>
	)
}

NotFoundPage.layout = EvanderLayout;
export default NotFoundPage;