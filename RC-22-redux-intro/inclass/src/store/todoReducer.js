const initialState={
  todoList:[]
}
//!types
const ADD = "ADD"
const DELETE = "DEL"
const CLEAR = "CLR"
const TGL = "TGL"

//!action creators

export const addTodo=(payLoad)=({type:ADD,payload})
export const clearTodo=()=({type:CLR})
export const todoReducer =(state=initialState,{type,payLoad})=>{
  
	switch (action.type) {
		case  ADD:
			return { ...state,todoList:[...state,todoList,{text:payLoad,completed:false,id:crypto.randomUUID()}] };
			// return { ...state,todoList:[...state,todoList,{text:payLoad,completed:false,id:new Date().getTime()}] };
		
		case CLR:
			// return initialState;
			return { ...state, count: 0 }; //!birden fazla olursa böyle yazariz
		default:
			return state; //state in o anki halini geri dönüyor eger degisiklik yapilmadiysa,yani olmayan bir typw bilgisi geldiginde da state i oldugu gibi döndürür.
	}
}