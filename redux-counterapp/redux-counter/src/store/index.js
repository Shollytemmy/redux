import { createStore } from 'redux'

const counterReducer = (state = {counter: 0}, {type, payload}) => {

    switch(type){
        case 'INCREASE':
            return { ...state, counter: state.counter + 1}
            case 'DECREASE': 
            return {counter: state.counter - 1}
            case 'INC_BY':
                return{counter: state.counter + payload}
            default:
                return state
    }
   

}




const store = createStore(counterReducer)

export default store