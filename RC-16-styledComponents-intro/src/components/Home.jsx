import React from "react";
import HeaderS, { LinkS } from "./style/HeaderStyle";
import DivStyle from "./style/ContainerStyle";
import ButtonS, { TomatoButton } from "./style/ButonStyle";

const Home = () => {
	return (
		<DivStyle>
			<HeaderS>STYLED COMPONENTS</HeaderS>

			<LinkS href="#">LINK</LinkS>

			<ButtonS saban>TIKLA1</ButtonS>
			<ButtonS elif>TIKLA2</ButtonS>
			<ButtonS>TIKLA3</ButtonS>

			<TomatoButton>TIKLA4</TomatoButton>
			<TomatoButton asiye>TIKLA5</TomatoButton>
		</DivStyle>
	);
};

export default Home;
