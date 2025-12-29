
import React,{ReactElement} from "react";
import {Layout} from "antd";
import {usePathname} from "next/navigation";

import NavigationBar from "./Navigation/NavigationBar.tsx";
import SideNavigationBar from "./Navigation/SideNavigationBar.tsx";

const {Header,Content} = Layout;

const EvanderLayout : React.FC<{children : React.ReactNode}>=({
	children
})=>{

	const path = usePathname();
	const withSideBar = ["/Form"];
	const showSideBar = path && withSideBar.some(a=>path.startsWith(a));

	return(
		<Layout className="h-screen  overflow-y-hidden">
			<Header className = "!p-0 flex items-start justify-start flex-col">
				<NavigationBar />
			</Header>
			<Layout className="!p-0 flex-row min-h-0 flex shrink-0 xborder-blue-600 xborder-4 flex-1">
				{showSideBar && <SideNavigationBar />}
				<Content className=" overflow-y-auto flex-1 bg-yellow-100 p-4 flex flex-col justify-start items-center">
					{/*Content*/}
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

const WithEvanderLayout = (page: ReactElement) => <EvanderLayout>{page}</EvanderLayout>
export default WithEvanderLayout;

/*
Atas | Bawah
1. Marron | Hitem -> Classical Event Vibes
2. Marron | Putih -> Christmas and Holiday Vibes
3. Putih | Hitem -> Bagus cocok bisa di pake buat kerja serta hal2 profesional dan event



Paling atas paling bagus




30 Des----
Lat Pulldown lat 8x4 Sub
Preacher Bar Curl 8x4
Face Pull 10x3 SUb
Barbell Row 8x4
Dumbell lat Pullover 12x3
Barbell Shrugs 12x1
Dumbell Shrugs 12x2
Incline Bicep Curl 12x3

31 Des----
Gallon Squad
Db Rdl
Bulgarian Squad
Gallon Calf 
Db Calf

1 Jan--------
Push Ups
Ascended Push Ups
Gallon Shrugs

3 Jan-------
Short Hand Lat Pull Down
Bar Cable Row
Smith Shrugs -> Change New Wo (Pullover)
Reverse Fly
Bicep Curl

4 Jan-----
Dumbell Bench Press
Tricep KickBack
Low Cable Fly
Tricep Extention bar


---------
Multi Press
Cable Long Pushdown
T Bar Row
Single Arm Pull Down

*/





		// <Layout className="h-screen flex flex-col !p-0">
		// 	{/* HEADER tetap di atas */}
		// 	<Header className="border-4 border-yellow-500 flex items-start justify-start flex-col !p-0 shrink-0">
		// 		<NavigationBar />
		// 	</Header>

		// 	{/* 🔹 Main body area flex horizontal */}
		// 	<Layout className="flex !flex-row flex-1 !min-h-0 border-4 border-yellow-500 !p-0">
		// 		{showSideBar && (
		// 			<SideNavigationBar className="border-4 border-blue-500 shrink-0" />
		// 		)}

		// 		{/* 🔹 Scroll hanya di sini */}
		// 		<Content className="border-4 border-yellow-500 flex-1 overflow-y-auto p-4">
		// 			{children}
		// 		</Content>
		// 	</Layout>
		// </Layout>