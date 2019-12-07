import { all, call } from 'redux-saga/effects'
//all() allows all sagas to be used concurrently, vs the first running, the second waiting for it to complete, then running next

import { fetchCollectionStart } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart), call(userSagas),
    ])
}