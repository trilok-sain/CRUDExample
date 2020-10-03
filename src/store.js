import { createStore, applyMiddleware } from "redux";
import CRUDExample from "./redux/reducer";
import thunk from 'redux-thunk';

export default createStore(CRUDExample, applyMiddleware(thunk));
