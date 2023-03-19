import { legacy_createStore, combineReducers } from "redux";
import { refreshReducer } from "./RefreshReducer";
import { isLockColorReducer } from "./LockElementReducer";

const rootReducer = combineReducers({
    refreshReducer: refreshReducer,
    isLockColorReducer: isLockColorReducer,
})

const store = legacy_createStore(rootReducer)

export default store