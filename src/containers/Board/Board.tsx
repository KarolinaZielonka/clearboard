import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import useStore from 'hooks/useStore';
import { Box } from './styles';

const Board: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const store = useStore();
    store.boardStore.updateBoardId(boardId);

    return (
        <>
            <Box>
                <canvas id="boardCanvas" />
            </Box>
        </>
    );
};

export default observer(Board);
