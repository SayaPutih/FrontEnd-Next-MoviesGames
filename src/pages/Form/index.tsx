import React from "react";
import EvanderLayout from "../../components/DefaultLayout.tsx";
import DefaultContent from "@/components/Form/DefaultContent.tsx";
import FavoriteGameCardList from "@/components/Form/FavoriteGame/FavoriteGameCardList.tsx";

const App =()=>{
	return(
		<div className = "border-4 border-yellow-700 p-0">
			<DefaultContent />
			<FavoriteGameCardList />
			<FavoriteGameCardList />
		</div>
	)
}

App.layout = EvanderLayout;
export default App;

/*
<div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div><div className = "border-4 border-yellow-700 p-5">
				FormsFormsFormsFormsForms
			</div>*/