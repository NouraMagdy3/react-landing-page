import { render, screen } from '@testing-library/react';
import Subscribe from "./subscribe";

describe('Subscribe', () => {
    test('basic test for subscribe', () => {
        render(<Subscribe />);
        screen.queryByText('Subscribe Now for');
        screen.queryByText('Get Special Features!');
        screen.queryByText("Let's subscribe with us and find the fun.");
        screen.queryByText('Subscribe Now');
    })
});