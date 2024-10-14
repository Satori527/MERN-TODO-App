import EventNoteIcon from '@mui/icons-material/Eventnote';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';
import './MuiHeader.css';

const options = ['Create Task','Due Date Sort', 'Status Filter', 'Priority Filter'];
const settings = ['Logout'];

function ResponsiveAppBar() {
    
    const status = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [auth, setAuth] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleLoginNavigation = () => {
        Navigate('/login')
    };

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    const handleLogout = () => {
        setAnchorElUser(null);
        dispatch(logout())
        Navigate('/login')
    };

return (
<AppBar id="MuiHeader" position="sticky" sx={{zIndex: 998,boxShadow: '1px 2px 8px 1px rgba(0, 0, 0, 0.12)' }}>
    <Container maxWidth="2xl">
    <Toolbar disableGutters>
        <EventNoteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        TODO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>


        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            {options.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>
        <EventNoteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />


        <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        TODO
        </Typography>


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        </Box>


        <Box sx={{ flexGrow: 0 }}>
        {status?<Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={userData.user.avatar} />
            </IconButton>
        </Tooltip>:
        <Button color="secondary" variant="contained" onClick={handleLoginNavigation}>Login</Button>}
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleLogout}>
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>
    </Toolbar>
    </Container>
</AppBar>
);
}
export default ResponsiveAppBar;
