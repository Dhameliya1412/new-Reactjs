import {combineReducers} from "redux"
// import {cartreducer} from './Reducer';
import {cartreducer,widhlistreducer} from '../Reducer/reducer'

const rootreducer = combineReducers({
    cartreducer , widhlistreducer
})

export default rootreducer;


