import { AppBar, Button, Divider, Drawer, IconButton, Toolbar } from '@material-ui/core';
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';
import { StyledTypography } from './styles';
import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import useStore from 'hooks/useStore';
import { useHistory } from 'react-router-dom';

type NavbarProps = {
  component: React.ComponentType;
}

const AppDrawer = styled(Drawer)`
  width: 200px;
`;

const Navbar: React.FC<NavbarProps> = ({ component: Component }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const history = useHistory();
    const store = useStore();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {
                        !isDrawerOpen && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setIsDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        )
                    }
                    <Button color="inherit">Login</Button>
                    {store.boardStore.boardId && <Button onClick={()=>{history.push('/dashboard');}} color="inherit">Dashboard</Button>}
                    
                    <StyledTypography variant="h6">
                        {store.boardStore.boardId ? 'Board: ' + store.boardStore.boardId : 'dashboard'}
                    </StyledTypography>
                </Toolbar>
            </AppBar>
            <AppDrawer data-testingId="drawer" anchor="left" open={isDrawerOpen} >
                <IconButton onClick={() => setIsDrawerOpen(false)}>
                    <ChevronLeftIcon />
                </IconButton>
                <Divider />
          some options we need to create
            </AppDrawer>
            <Component />
        </>
    );
};

export default observer(Navbar);
