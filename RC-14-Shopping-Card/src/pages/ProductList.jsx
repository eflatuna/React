import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductList = () => {
	const BASE_URL = "https://65f02ffada8c6584131b0e65.mockapi.io/api/Checkout";
	const [produkte, setProdukte] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		try {
			const { data } = await axios(
				"https://65f02ffada8c6584131b0e65.mockapi.io/api/Checkout"
			);
			setProdukte(data);
		} catch (er) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	if (error) {
		return <p>Something went wrong...</p>;
	}
	return (
		<div className="container mt-3">
			<div className="d-sm-block d-md-flex">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						<article id="product-panel" className="col-md-6">
							{produkte.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									getData={getData}
								/>
							))}
						</article>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductList;
