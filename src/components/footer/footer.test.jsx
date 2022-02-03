import { render, screen } from '@testing-library/react';
import Footer from "./footer";

describe('Footer', () => {
    test('basic test for footer', () => {
        render(<Footer />);
        screen.queryByText('LaslesVPN');
        screen.queryByText('is a private virtual network that');
        screen.queryByText('has unique features and has high security.');
        screen.queryByText('©2020LaslesVPN');
        screen.queryByText('Product');
        screen.queryByText('Download');
        screen.queryByText('Pricing');
        screen.queryByText('Locations');
        screen.queryByText('Server');
        screen.queryByText('Countries');
        screen.queryByText('Blog');
        screen.queryByText('Engage');
        screen.queryByText('LaslesVPN ?');
        screen.queryByText('FAQ');
        screen.queryByText('Tutorials');
        screen.queryByText('About Us');
        screen.queryByText('Privacy Policy');
        screen.queryByText('Terms of Service');
        screen.queryByText('Earn Money');
        screen.queryByText('Affiliate');
        screen.queryByText('Become Partner');
        screen.getByAltText('facebook');
        screen.getByAltText('twitter');
        screen.getByAltText('instagram');
    })
});