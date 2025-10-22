import react from "React";

interface AButtonProps{
	label : string;
	onClick? : ()=>void
}

const AButton:React.FC<string> =({label,onClick})=>{
	return(
		<button 
			className="w-full m-2 p-2 bg-blue-500 text-subfirst text-md rounded-md font-bold"
			onClick = {()=>onClick()}
		>
			{label}
		</button>
	)
}

export default AButton;