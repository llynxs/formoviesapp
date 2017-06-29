import { fork } from 'redux-saga/effects';
import { watchMedia } from './watch';

export default function* rootSaga() {
	yield [
		fork(watchMedia),
	];
}
