import React from 'react';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Volume = () => {
  return (
    <div className="text-white mr-24 flex items-center">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <PlaylistPlayIcon className="text-white" />
        </Grid>
        <Grid item>
          <VolumeDownIcon className="text-white" />
        </Grid>
        <Grid item xs>
          <Slider
            aria-labelledby="continuous-slider"
            size="small"
          //      onChange={(e) => setVolume(e)}
            min={0}
            max={100}
            defaultValue={100}
            valueLabelDisplay="auto"
            sx={{
              color: 'green', // This will change the slider color to green
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Volume;
