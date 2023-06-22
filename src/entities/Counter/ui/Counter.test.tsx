import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('check title', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });
    test('check increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const increment = screen.getByTestId('increment');
        fireEvent.click(increment);
        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });
    test('check decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrement = screen.getByTestId('decrement');
        fireEvent.click(decrement);
        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
