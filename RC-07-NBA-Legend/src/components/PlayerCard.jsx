import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
	// const{img,name,statistics}=player

	const [showImage, setShowImage] = useState(true);

	return (
		<Card
			className="player-card m-auto"
			onClick={() => setShowImage(!showImage)}
		>
			{showImage ? (
				<Card.Img className="player-logo" variant="top" src={img} />
			) : (
				<ul className="m-auto">
					{statistics.map((item, i) => (
						<li key={i} className="h5 text-start list-unstyled">
							{i === 0
								? "🏀"
								: i === 1
								? "🌸"
								: i === 2
								? "🎉"
								: "💯"}
							{item}{" "}
						</li>
					))}
				</ul>
			)}

			<Card.Footer>
				<Card.Title>{name} </Card.Title>
			</Card.Footer>
		</Card>
	);
};

export default PlayerCard;
