import { render, screen } from '@testing-library/react';
import Customers from "./customers";

describe('Customers', () => {
    test('basic test for customers', () => {
        render(<Customers />);
        screen.queryByText('Trusted by Thousands of');
        screen.queryByText('Happy Customer');
        screen.queryByText('These are the stories of our customers who have joined us with great');
        screen.queryByText('pleasure when using this crazy feature.');
    })
});