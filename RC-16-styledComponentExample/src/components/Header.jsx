import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import DisplaySSS from "./styles/DisplaySSS";
import ButtonSSS, { DetayButon } from "./styles/ButonSSS";

const Header = () => {
	return (
		<div>
			<DisplaySSS>
				<LogoSSS src="./images/logo.png" alt="" />
			</DisplaySSS>
			<DisplaySSS>
				<ButtonSSS kadir="res">Apply Courses</ButtonSSS>
				<ButtonSSS omer>Talk to Adviser</ButtonSSS>
			</DisplaySSS>
			<div>
				<div>
					<h1>The IT Career of Your Dreams Starts Here</h1>
					<p>
						Clarusway is a leading international software Bootcamp.
						Join a micro class online with other trainees and learn
						coding skills with a highly-skilled instructor.
					</p>
					<ButtonSSS omer>Start Your New Career</ButtonSSS>
					<DetayButon>Details</DetayButon>
				</div>
				<ImageSSS src="./images/hero.jpg" alt="" />
			</div>
		</div>
	);
};

export default Header;
