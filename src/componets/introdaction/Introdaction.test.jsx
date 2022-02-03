import { render, screen } from '@testing-library/react'
import Introdaction from './Introdaction'

describe("Introdaction", () => {
    test('reader Introdaction compoent', () => {
        render(<Introdaction />)
        screen.getByText('Want anything to be easy with LaslesVPN.');
        screen.getByText('Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.');
        screen.getByText('Get Started');
    })
});