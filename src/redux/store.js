import {createStore, combineReducers, applyMiddleware} from 'redux'; // depuis la librairie redux (npm i redux)
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import commentReducer from './comments/reducerComments';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ // grace à combineReducer on peut importer plusieur reducer en meme temps
    phone : phoneReducer,
    television : tvReducer,
    comments : commentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(phoneReducer); c'est dans le cas ou on avais un seul reducer

export default store;
