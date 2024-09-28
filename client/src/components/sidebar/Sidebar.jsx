import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Fab } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export default function NestedList() {
const [open, setOpen] = React.useState(true);

const handleClick = () => {
setOpen(!open);
};

return (
    
<Box position={'fixed'} sx={{ width: 220,zIndex: 999,marginTop: '60px' }}>
    <List
        sx={{ width: '100%', maxWidth: 240, bgcolor: '#f0f0f0', height: '100vh',display: 'flex', flexDirection: 'column',alignItems: 'center'}}
        component="nav"
        aria-labelledby="nested-list-subheader"

    >
    <div className='h-10'>
    </div>

        <Fab color="secondary" aria-label="add" sx={{width: '90%',height: '48px', borderRadius: '12px',alignItems: 'center',justifyContent: 'center',alignContent: 'center'}}>
            <AddIcon />&nbsp; Create Task
        </Fab>
        <div className='h-5'>
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
            <ListItemText primary="Sort By" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Due Date" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Priority" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Status" />
            </ListItemButton>
        </List>
        </Collapse>
    </List>
</Box>
);
}
