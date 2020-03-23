import {all} from "redux-saga/effects";
import {
    watchFetchData,
    watchDeleteData,
    watchAddData,
    watchUpdateData
} from "./tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchDeleteData(),
        watchAddData(),
        watchUpdateData()]);
}
