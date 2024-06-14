import {createStore} from "redux";
import rootreducer from "./components/redux/Reducer/main"
// import {rootreducer} from "./components/redux/reducer/main"

const store = createStore(
    rootreducer
)
export default store;    



