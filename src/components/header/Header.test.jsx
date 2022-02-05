import { render, screen } from '@testing-library/react'
import Header from './Header'

describe("Header", () => {
    test('reader header compoent', () => {
        render(<Header />)
        screen.getByText('About');
        screen.getByText('Features');
        screen.getByText('Pricing');
        screen.getByText('Testimonials');
        screen.getByText('Help');
        screen.getByText('Sign In');
        screen.getByText('Sign Up');
    })
});