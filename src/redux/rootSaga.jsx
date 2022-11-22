import { all } from "redux-saga/effects";
import {movieSagas} from './movieSagas'

export default function* rootSaga(){
    // all to run multiple saga in parallel
    yield all([...movieSagas])
}