import React from "react";
import {
	FaDiscord,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import {
	Container,
	LinkContainer,
	LinkItem,
	LinkItems,
	LinkTitle,
	LinkWrapper,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrapper,
	WebsiteRights,
	Wrapper,
} from "./styled";

const Footer = () => {
	const toggleHome = () => {
		window.scrollTo({top: 0, behavior: "smooth"})
	};

	return (
		<Container>
			<Wrapper>
				<LinkContainer>
					<LinkWrapper>
						<LinkItems>
							<LinkTitle> About us </LinkTitle>
							<LinkItem to="/">Testimonials</LinkItem>
							<LinkItem to="/">Team members</LinkItem>
							<LinkItem to="/">Investors</LinkItem>
							<LinkItem to="/">Terms of Service</LinkItem>
						</LinkItems>

						<LinkItems>
							<LinkTitle> Contact us </LinkTitle>
							<LinkItem to="/">Contact</LinkItem>
							<LinkItem to="/">Support</LinkItem>
							<LinkItem to="/">Location</LinkItem>
							<LinkItem to="/">FAQ</LinkItem>
						</LinkItems>
					</LinkWrapper>

					<LinkWrapper>
						<LinkItems>
							<LinkTitle> Documents </LinkTitle>
							<LinkItem to="/">User Guide</LinkItem>
							<LinkItem to="/">Development</LinkItem>
							<LinkItem to="/">APIs</LinkItem>
							<LinkItem to="/">White Paper</LinkItem>
							<LinkItem to="/">Roadmap</LinkItem>
						</LinkItems>

						<LinkItems>
							<LinkTitle> Social Media </LinkTitle>
							<LinkItem to="/">Instagram</LinkItem>
							<LinkItem to="/">Facebook</LinkItem>
							<LinkItem to="/">Youtube</LinkItem>
							<LinkItem to="/">Twitter</LinkItem>
							<LinkItem to="/">Discord</LinkItem>
						</LinkItems>
					</LinkWrapper>
				</LinkContainer>
				<SocialMedia>
					<SocialMediaWrapper>
						<SocialLogo to="/" onClick={toggleHome}>Luniverse</SocialLogo>
						<WebsiteRights>
							Lambda256 © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="" target="_blank" aria-label="Discord">
								<FaDiscord />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrapper>
				</SocialMedia>
			</Wrapper>
		</Container>
	);
};

export default Footer;
