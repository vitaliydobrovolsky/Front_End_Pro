import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure, addTodoRequest, addTodoSuccess } from './slices/todoSlice';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = yield response.json();
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  try {
    yield put(addTodoSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

export function* todoSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosSaga);
  yield takeLatest(addTodoRequest.type, addTodoSaga);
}
