import { render, screen } from '@testing-library/react';
import Network from "./network";

describe('Network', () => {
    test('basic test for network', () => {
        render(<Network />);
        screen.queryByText('Huge Global Network');
        screen.queryByText('of Fast VPN');
        screen.queryByText('See LaslesVPN everywhere to make it easier for you when you move locations.');
        screen.getByAltText('network');
    })
});