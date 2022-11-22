import {takeLatest, put, fork, call} from 'redux-saga/effects'
import {fetchMovies} from './api'
import {getMovies, setMovies} from './feature/movieSlice'


function* onLoadMoviesAsync(payload){
    try{
        const movieName = payload;
        // call waits for the promise
        const response = yield call(fetchMovies, movieName)
        if(response.status === 200){
            // dispatching new action
            yield put(setMovies({...response.data}))
        }
    }catch(err){
        console.log(err)
    }
}


//specifying watcher
function* onLoadMovies(){
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

export const movieSagas = [fork(onLoadMovies)]