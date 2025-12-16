"use Client"

import React,{useState,useEffect} from "react";
import AButton from "@/components/AButton"

const DeleteModal =({message,title,onClickPassedAccept,onClickPassedCancel})=>{
	return(
		<div className = "bg-black/30 flex items-center justify-center fixed w-full min-h-screen top-0 left-0 z-[100]">
			<div className = "font-semibold bg-white w-1/3 h-[300px] flex flex-col items-center p-4 justify-between p-6 rounded-md ">

				<div className="flex flex-col items-center justify-center p-4">
					<h1 className="text-2xl mb-8 text-first">Deleting {title}</h1>
				 	<p className="text-lg">Are you sure you wanna delete the {title} <span className="text-second underline font-bold">{message}</span> This cannot be undone!</p>
				</div>

				<div className="flex flex-row items-center w-full justify-between">
				 	<AButton label="Accept" onClick={()=>onClickPassedAccept()}/>
				 	<AButton label="Cancel" onClick={()=>onClickPassedCancel()}/>
				 </div>
			</div>
		</div>
	)
}

export default DeleteModal;

