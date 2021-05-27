import { render } from '@testing-library/react';
import Board from '../Board';
import { Provider } from 'mobx-react';

const mockUpdate = jest.fn();

jest.mock('react-router', ()=>({
    useParams: () =>({ boardId: 'aaa' })
}));

describe('Board', () => {
    it('renders given board component', async () => {
        const { getByText } = render(
            <Provider boardStore={{ updateBoardId: mockUpdate }}>
                <Board/>
            </Provider>
        );

        expect(mockUpdate).toHaveBeenCalled();
        expect(mockUpdate).toHaveBeenCalledWith('aaa');
    });

});