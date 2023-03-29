import React from "react"
import { Route, Routes } from "react-router-dom"
import MainContainer from "./components/MainContainer";
import AuthTokenForm from "./components/AuthTokenForm"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ItemInfoPage from "./pages/ItemInfoPage"
import MintPage from "./pages/MintPage"
import MyPage from "./pages/MyPage"
import Footer from "./components/Footer";

function App() {
	

  return (
		<>
			<Navbar />
			<MainContainer>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
						<Route path="authtoken" element={<AuthTokenForm />} />
						<Route path="mint" element={<MintPage />} />
						<Route path="mypage" element={<MyPage />} />
						<Route path="item/:itemId" element={<ItemInfoPage />} />
					</Route>
				</Routes>
			</MainContainer>
			<Footer />
		</>
	);
}

export default App
