import * as React from 'react';
import { observer } from 'mobx-react-lite';
import useStore from 'hooks/useStore';

const mockBoards = [
    {
        id: '1',
        photoImg: 'https://picsum.photos/200/300',
        name: 'Board 1'
    },
    {
        id: '2',
        photoImg: 'https://picsum.photos/200/300',
        name: 'Board 2'
    },
];

const Dashboard: React.FC = () => {
    const asd = useStore();
    asd.boardStore.updateBoardId('');
    
    return (
        <>
            {
                mockBoards.map((b) => (
                    <>
                        <img src={b.photoImg} />
                        {b.name}
                    </>
                ))
            }
        </>
    );
};

export default observer(Dashboard);
