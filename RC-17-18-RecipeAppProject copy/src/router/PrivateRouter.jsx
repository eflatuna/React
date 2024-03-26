import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
	const { name, password } = useContext(RecipeContext);
	const user = true;
	return (name === "ipek" && password === "1234") || user ? (
		<Outlet />
	) : (
		<Navigate to="/" />
	);
};

export default PrivateRouter;
