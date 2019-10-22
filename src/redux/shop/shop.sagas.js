import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapToMap } from '../../firebase/firebase.utils'

import ShopActionTypes from './shop.types'
import { 
    fetchCollectionFailure, fetchCollectionSuccess
} from './shop.actions'

export function* fetchCollectionAsync() {
    yield console.log('I am fired')
        try {
            const collectionRef = firestore.collection('collections')
            const snapshot = yield collectionRef.get()
            const collectionMap = yield call(convertCollectionsSnapToMap, snapshot)
                yield put(fetchCollectionSuccess(collectionMap))
        } catch(error) {
                yield put(fetchCollectionFailure(error.message))
        }
            // collectionRef.get().then(snapshot => {
            //   const collectionsMap = convertCollectionsSnapToMap(snapshot)
            //   dispatch(fetchCollectionSuccess(collectionsMap))
            // }).catch(error => dispatch(fetchCollectionFailure(error.message)))
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync )
}