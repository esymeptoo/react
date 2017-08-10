const initialData = {
	 text: 1
}

export default function Add(state = initialData, action){
	switch(action.type) {
		case 'add': 
			return {
				...state,
				text: ++(state.text)
			}
		default: return state;
	}
}