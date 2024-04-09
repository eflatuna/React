import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
// import { INC } from "../../redux/types/counterTypes";
import {
	decrement,
	increment,
	reset,
} from "../../redux/actions/CounterActions";

const Counter = () => {
	// useSelector(state => state.reducer)
	// const {count} = useSelector(state => state)
	const count = useSelector((state) => state.counter.count); //state in kendisne
	const dispatch = useDispatch(); // setter
	return (
		<div className="app">
			<h2 className="counter-header">Counter With Redux</h2>
			<h1>counter:{count}</h1>
			<div>
				<button
					className="counter-button negative"
					onClick={() => dispatch(decrement())}
				>
					decrease
				</button>
				<button
					className="counter-button zero"
					onClick={() => dispatch(reset())}
				>
					reset
				</button>
				<button
					className="counter-button positive"
					// onClick={() => dispatch("INC")} //! action obje olmak zorunda o nedenle argüman gönderirken obje olarak göndermek zorundayız. Bu şekilde hata alırız.
					// onClick={() => dispatch({ tip: "INC" })}//? obje içerisinde gönderdiğimiz property type adında olmalı
					onClick={() => dispatch(increment())} //* dispatch içerisinde verdiğimiz argüman reducer içerisindeki action parametresine karşılık gelir.
				>
					increase
				</button>
			</div>
		</div>
	);
};

export default Counter;
