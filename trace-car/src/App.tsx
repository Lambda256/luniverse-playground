import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Item from "./pages/Item";
import MyPage from "./pages/MyPage";
import AuthToken from "./pages/AuthToken";
import MainContainer from "./components/MainContainer";

function App() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<Routes>
					<Route path="/" >
						<Route index element={<Home />}/>
						<Route path="items" >
							<Route index element={<List />} />
							<Route path=":eventId" >
								<Route index element={<Item />} />
								<Route path="update" element={<Update/>}/>
							</Route>
							<Route path="create" element={<Create/>}/>
						</Route>
						<Route path="authtoken" element={<AuthToken/>}/>
						<Route path="mypage" element={<MyPage/>}/>
					</Route>
				</Routes>
			</MainContainer>
		</>
	);
}

export default App;
