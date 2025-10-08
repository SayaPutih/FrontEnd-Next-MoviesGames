import React from "react";

const App =()=>{
	return(
		<div className="flex flex-col gap-4 bg-gray-400 p-4 rounded-md">
			<h1 className="text-third text-2xl font-bold">Infernape</h1>
			<p className="text-subfirst text-lg">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
				when an unknown printer took a galley of type and scrambled it to make a type 
				specimen book. It has survived not only five centuries, but also the leap into 
				electronic typesetting, remaining essentially unchanged. It was popularised in 
				the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
				and more recently with desktop publishing software like Aldus PageMaker 
				including versions of Lorem Ipsum.
			</p>

			<div className="flex flex-row gap-2 self-end">
				<div className="w-16 h-16 bg-first rounded-md"></div>
				<div className="w-16 h-16 bg-second rounded-md"></div>
				<div className="w-16 h-16 bg-third rounded-md"></div>
				<div className="w-16 h-16 bg-subfirst rounded-md"></div>
				<div className="w-16 h-16 bg-subsecond rounded-md"></div>
			</div>

		</div>
	)
}

export default App