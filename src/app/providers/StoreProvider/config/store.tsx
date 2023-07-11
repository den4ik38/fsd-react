import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User/model/slice/UserSlice';
import { createReducerManager } from './ReducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };
    const ReducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: ReducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.ReducerManager = ReducerManager;

    return store;
}
