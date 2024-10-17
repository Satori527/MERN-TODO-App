import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function CustomizedDividers({handleToggle, options}) {
  const [alignment, setAlignment] = React.useState(0);
  const [formats, setFormats] = React.useState(() => ['italic']);

  //const options = ['High', 'Medium', 'Low'];

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    handleToggle(newAlignment);
  };

  // React.useEffect(() => {
  //   handleToggle();
  // }, [alignment]);

  // const handleToggle = () => {
  //   if(alignment === 'left'){
  //     () => setPriority(0)
      
  //   }
  //   if(alignment === 'center'){
  //     () => setPriority(1)
  //   }
  //   if(alignment === 'right'){
  //     () => setPriority(2)
  //   }
    
  // }

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: 'flex',
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
          borderRadius: '16px',
          padding: '4px',
        })}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ backgroundColor: '#000000',
          borderRadius: '12px', }}
        >
          <ToggleButton color='error' value={0} aria-label="left aligned">
            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}
            >{options[0]}</Typography>
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton color='warning' value={1} aria-label="centered">

            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}>
                {options[1]}
            </Typography>
            
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton color='success' value={2} aria-label="right aligned">
            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}>
                {options[2]}
            </Typography>
            
          </ToggleButton>
        </StyledToggleButtonGroup>
        
      </Paper>
    </div>
  );
}
