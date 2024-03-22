import styled from "styled-components";

const ButtonS = styled.button`
	color: ${({ saban }) => (saban ? "blue" : "red")};

	background-color: ${({ saban, elif }) =>
		saban ? "lightblue" : elif ? "blue" : "brown"};

	cursor: pointer;
	padding: 1rem 1.5rem;
	font-family: "tahoma";
	font-size: 30px;
	&:hover {
		transform: scale(0.95);
	}
`;

export const TomatoButton = styled(ButtonS)`
	color: ${({ asiye }) => (asiye ? "tomato" : "green")};

	width: 300px;
	background-color: aquamarine;
`;

export default ButtonS;
