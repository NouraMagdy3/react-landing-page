import { render, screen } from '@testing-library/react'
import Plan from './Plan'

describe("Plan", () => {
    test('reader Plan compoent', () => {
        render(<Plan />)
        screen.getByText('Free Plan');
        screen.getByText('Standard Plan');
        screen.getByText('Premium Plan');
        screen.getByText('Unlimited Bandwitch');
        screen.getByText('Encrypted Connection');
        screen.getByText('No Traffic Logs');
        screen.getByText('Works on All Devices');
        screen.getByText('Yes Traffic Logs');
        screen.getByText('Connect Anyware');
        screen.getByText('Yes Traffic Logs');
        screen.getByText('Connect Anyware');
        screen.getByText('Get New Features');
    })
});