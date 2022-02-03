import { render, screen} from '@testing-library/react'
import Brands from './brands';

describe('Test Brands', () => {
    test('basic test for brands', async () => {
        render(<Brands />);
        screen.getByTestId('brandIm');
        //screen.getByAltText('brand');
    })
})