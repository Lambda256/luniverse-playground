/**
 * Styles settings
 */

export const fontWeight = {
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
};

export const color = {
	black: "#000",
	white: "#fff",

	dark: "#333",
	light: "#eee",

	primary: "#1366FF",
	secondary: "#0643B3",
	tertiary: "#2B75FF",
	quaternary: "#B37A00",
	quinary: "#FFB412",

	error: "#ff6b6b",

	bg: "#ebebeb",
	bg1: "rgba(88, 88, 88, 0.1)",
	bg2: "rgba(88, 88, 88, 0.1)",

	timeLine: "#ddd",
	arrow: "#ddd",
};

export const boxShadow = {
	style1:
		"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
	style2: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

export const zIndex = {
	navbar: 999,
	container: 1,
	content: 10,
	infoWrap: 2,
	arrow: 1,
	pointer: 2,
};

export const height = {
	navbar: "4rem",
};

export const width = {
	xxs: "480px",
	xs: "600px",
	sm: "768px",
	md: "900px",
	lg: "1024px",
	xl: "1280px",
	timeLine: "8px",
};

export const breakpoint = {
	xs: `screen and (max-width: ${width.xs})`,
	sm: `screen and (max-width: ${width.sm})`,
	md: `screen and (max-width: ${width.md})`,
	lg: `screen and (max-width: ${width.lg})`,
	xl: `screen and (max-width: ${width.xl})`,
};

export const mixins = {
	// flex
	flexBox: (direction = "row", justify = "center", align = "center") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

	// grid
	gridBox: (
		justifyItems = "center",
		justifyContent = "center",
		align = "center"
	) => `
    display: grid;
    justify-items: ${justifyItems};
    justify-content: ${justifyContent};
    align-items: ${align};
  `,

	// position
	positionCenter: (type = "absolute") => {
		if (type === "absolute" || type === "fixed")
			return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
		return;
	},
};

export const components = {
	// defualt settings for common components
	container: (direction = "row", justify = "center", align = "center") => `
		${mixins.flexBox(direction, justify, align)}
		position: relative;
		width: 100%;
		min-height: calc(100vh - ${height.navbar} - 4rem);
	`,

	title: (fontSize = "3rem") => `
		font-size: ${fontSize};
		font-weight: ${fontWeight.bold};
		line-height: calc(${fontSize} + 2rem);
	`,
};
