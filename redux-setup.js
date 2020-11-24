const redux = require('redux');
const initialState = {
    ccounter:0
}

const createStore = redux.createStore;
//Reducer

const rootReducer = (state = initialState,action) =>{
    return state;
}
//Store
const store = createStore(rootReducer);

console.log(store.getState());

//Dispatching Action
store.dispatch({type:'INC_COUNT'});
store.dispatch({type:'ADD_COUNT',value:10});
//Subscription
