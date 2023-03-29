import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import OpenNavbar from "./OpenNavbar";
import { menus } from "./data";
import {
	Container,
	EmptyBox,
	Logo,
	LogoH1,
	LogoImg,
	LogoImgBox,
	Menu,
	MenuItem,
	MenuLink,
	Nav,
	OpenMenu,
} from "./styled";

const LOGO_IMG = "/assets/images/luniverse_symbol.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleOnClickOpenMenu: VoidFunction = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const changeNav = () => {
		if (window.innerWidth >= 900) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", changeNav);
		return () => {
			window.removeEventListener("resize", changeNav);
		};
	}, []);

	return (
		<>
			<OpenNavbar
				isOpen={isMenuOpen}
				toggle={handleOnClickOpenMenu}
				menus={menus}
			/>
			<Container>
				<Nav>
					{/* Logo */}
					<Logo to="/">
						<LogoImgBox>
							<LogoImg src={LOGO_IMG} />
						</LogoImgBox>
						<LogoH1>Luniverse Car</LogoH1>
					</Logo>

					{/* Button to open menu */}
					<OpenMenu>
						<FaBars onClick={handleOnClickOpenMenu} />
					</OpenMenu>

					{/* Navbar menu */}
					<Menu>
						{menus.map((menu) => (
							<MenuItem key={menu}>
								<MenuLink to={`/${menu.toLowerCase()}`}>{menu}</MenuLink>
							</MenuItem>
						))}
					</Menu>
				</Nav>
			</Container>
			<EmptyBox />
		</>
	);
};

export default Navbar;
