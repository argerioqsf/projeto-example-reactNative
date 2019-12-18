import { all } from 'redux-saga/effects';
import WhatcherExample from './WhatcherExample';

export default function* saga() {
  yield all([
    WhatcherExample.watcherExample(),
  ])
}