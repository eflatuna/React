// const [count,setCount]=useState()
// const [todos,setTodos]=useState()

import { DEC, INC, RESET } from "../types/counterTypes";

const initialState = {
	count: 10,
};

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INC:
			return { count: state.count + 1 };
		case DEC:
			return { count: state.count - 1 };
		case RESET:
			// return initialState;
			return { ...state, count: 0 }; //!birden fazla olursa böyle yazariz
		default:
			return state; //state in o anki halini geri dönüyor eger degisiklik yapilmadiysa,yani olmayan bir typw bilgisi geldiginde da state i oldugu gibi döndürür.
	}
	//!Reducer fonksiyonu mutlaka bir obje döndürür
};
