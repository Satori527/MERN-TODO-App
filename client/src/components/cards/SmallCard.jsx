import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';




export default function OutlinedCard(props) {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(props)

return (
    
    <Box expanded={expanded}
    sx={{ width: '90%', margin: '0 auto',border: '1px solid #707070',  borderRadius: '24px',boxShadow: '2px 4px 4px 2px rgba(0, 0, 0, 0.2)'

    }}>
        <Card variant="outlined"  sx={{  borderRadius: '24px'}}>
        <React.Fragment>
    <CardContent>

    <Typography sx={{ color: 'black',fontWeight:'bold' }} variant="h5" component="div">
        {props.title}
    </Typography>
    
    <Typography variant="body2">
        {props.description}
        <br />
        
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" sx={{color: 'black',fontWeight:'bold'}} onClick={handleExpandClick} >See More</Button>
    </CardActions>
    </React.Fragment>
    </Card>
    </Box>
);
}
