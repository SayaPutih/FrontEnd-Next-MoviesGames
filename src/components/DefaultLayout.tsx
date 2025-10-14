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
	const showSideBar = withSideBar.some(a=>path.startsWith(a));

	return(
		<Layout className="h-screen  overflow-y-hidden">
			<Header className = "!p-0 flex items-start justify-start flex-col">
				<NavigationBar />
			</Header>
			<Layout className="!p-0 flex-row min-h-0 flex shrink-0 xborder-blue-600 xborder-4 flex-1">
				{showSideBar && <SideNavigationBar />}
				<Content className=" overflow-y-auto flex-1 bg-yellow-100 p-4">
					{/*Content*/}
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

const WithEvanderLayout = (page: ReactElement) => <EvanderLayout>{page}</EvanderLayout>
export default WithEvanderLayout;


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