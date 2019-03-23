import  {createStore} from 'redux';
import ToDoReducer from './reducers/ToDo';

const initialState ={
    data: [],
};

const store = createStore(ToDoReducer,initialState);

export default store;