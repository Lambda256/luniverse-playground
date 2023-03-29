import React, { FC } from "react";
import {
	CloseIcon,
	Icon,
	OpenNavbarContainer,
	OpenNavbarLink,
	OpenNavbarMenu,
	OpenNavbarRoute,
	OpenNavbarWrapper,
	SideBtnWrap,
} from "./styled";

const OpenNavbar: FC<{
	isOpen: boolean;
	toggle: VoidFunction;
	menus: string[];
}> = ({ isOpen, toggle, menus }) => {
	return (
		<OpenNavbarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<OpenNavbarWrapper>
				<OpenNavbarMenu>
					{menus.map((menu) => (
						<div key={"open-navbar" + menu}>
							<OpenNavbarLink to={menu.toLowerCase()} onClick={toggle}>
								{menu}
							</OpenNavbarLink>
						</div>
					))}
				</OpenNavbarMenu>
				<SideBtnWrap>
					<OpenNavbarRoute to="/signin">Sign In</OpenNavbarRoute>
				</SideBtnWrap>
			</OpenNavbarWrapper>
		</OpenNavbarContainer>
	);
};

export default OpenNavbar;
