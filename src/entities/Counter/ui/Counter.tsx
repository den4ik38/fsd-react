import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="counter-title">
                {value}
            </h1>
            <button data-testid="increment" onClick={increment}>
                {t('Increment')}
            </button>
            <button data-testid="decrement" onClick={decrement}>
                {t('Decrement')}
            </button>
        </div>
    );
};
