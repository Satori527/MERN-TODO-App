import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Button } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import * as React from 'react';

export default function NestedList( {setFilter, filter, setCreateTask}) {
const [open, setOpen] = React.useState(true);

const [active, setActive] = React.useState([false, false, false, false]);
const [buttonColor, setButtonColor] = React.useState(['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0']);

const handleClick = () => {
setOpen(!open);
};

React.useEffect(() => {
    if (filter === 0) {
        setButtonColor(['#d0d0d0', '#f0f0f0', '#f0f0f0', '#f0f0f0']);
    } else if (filter === 1) {
        setButtonColor(['#f0f0f0', '#d0d0d0', '#f0f0f0', '#f0f0f0']);
    } else if (filter === 2) {
        setButtonColor(['#f0f0f0', '#f0f0f0', '#d0d0d0', '#f0f0f0']);
    } else if (filter === 3) {
        setButtonColor(['#f0f0f0', '#f0f0f0', '#f0f0f0', '#d0d0d0']);
    }


}, [filter]);

return (
    
<Box position={'fixed'} sx={{ width: 220,zIndex: 999,marginTop: '60px' }}>
    <List
    sx={{ width: '100%', maxWidth: 240, bgcolor: '#f0f0f0', height: '100vh',display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '10px'}}
        component="nav"
        aria-labelledby="nested-list-subheader"

    >
    <div className='h-10'>
    </div>

        <Button color='secondary' variant="contained" sx={{width: '90%',height: '48px', borderRadius: '12px',alignItems: 'center',justifyContent: 'center',alignContent: 'center'}} onClick={() => setCreateTask(true)}>
            <AddIcon />&nbsp; Create Task
        </Button>


        <div className='h-2'>
        </div>
        {/* <ListItemButton>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItemButton> */}
        <ListItemButton onClick={handleClick} sx={{width: '90%', borderRadius: '12px',border: '2px solid #707070',flexGrow: 0}}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Filters" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{display: 'flex', flexDirection: 'column', gap: '10px'}} component="div" disablePadding>

            <ListItemButton sx={{ pl: 4, borderRadius: '12px', backgroundColor: buttonColor[0] }} onClick={() => setFilter(0)}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All"  />
            </ListItemButton>

            <ListItemButton   sx={{ pl: 4, borderRadius: '12px', backgroundColor: buttonColor[1] }} onClick={() => setFilter(1)} >
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText  primary="Due Date" />
            </ListItemButton>

            <ListItemButton  sx={{ pl: 4, borderRadius: '12px', backgroundColor: buttonColor[2] }} onClick={() => setFilter(2)}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText  primary="Priority"  />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4, borderRadius: '12px', backgroundColor: buttonColor[3] }}  onClick={() => setFilter(3)}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText  primary="Status" />
            </ListItemButton>
        </List>
        </Collapse>
    </List>
</Box>
);
}
