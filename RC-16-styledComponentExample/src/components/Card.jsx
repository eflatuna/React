import data from "../data.js";
import ImageSSS from "./styles/ImageSSS.jsx";
import KartSSS from "./styles/KartSSS.jsx";
const Card = () => {
	return (
		<div>
			{data.map((item) => {
				return (
					<KartSSS
						key={item.id}
						nida={item.id % 2 === 1 && "row-reverse"}
					>
						<div>
							<h2>{item.title}</h2>
							<p>{item.body}</p>
						</div>
						<ImageSSS src={`./images/${item.image}`} alt="" />
					</KartSSS>
				);
			})}
		</div>
	);
};

export default Card;
