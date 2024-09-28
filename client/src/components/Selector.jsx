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

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
          <ToggleButton color='error' value="left" aria-label="left aligned">
            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}
            >High</Typography>
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton color='warning' value="center" aria-label="centered">

            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}>
                Medium
            </Typography>
            
          </ToggleButton>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <ToggleButton color='info' value="right" aria-label="right aligned">
            <Typography sx={{ fontWeight: 'bold',fontSize: '14px',color: 'white' }}>
                Low
            </Typography>
            
          </ToggleButton>
        </StyledToggleButtonGroup>
        
      </Paper>
    </div>
  );
}
