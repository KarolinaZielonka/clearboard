import { render } from '@testing-library/react';

import Navbar from '../Navbar';


jest.mock('hooks/useStore', () => ({
    default: () => ({ boardStore: ({ boardId: 'aaa' }) }),
    __esModule: true
}));

describe('Navbar', () => {
    it('renders given component', async () => {
        const { getByText } = render(
            <Navbar component={ () => <div>Henlo</div>} />);
  
        const result = await getByText('Henlo');

        expect(result).toBeTruthy();
    });
});