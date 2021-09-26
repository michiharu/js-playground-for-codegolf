import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { lightGreen } from '@mui/material/colors';

import { viewCode, execCode, getByteLen } from './func/util';
import { Page } from './routes';

function BoxBelowTextfield(props: { children: React.ReactNode }) {
  return (
    <Box
      width="100%"
      height={30}
      bottom={0}
      left={0}
      px={1}
      pt={0.5}
      bgcolor="lightGray"
      borderRadius="0 0 4px 4px"
      display="flex"
      justifyContent="flex-end"
    >
      {props.children}
    </Box>
  );
}

type Props = {
  page: Page;
};

type PlayGroundSettings = {
  fps: number | 'Disable time refresh';
  timeLimit: number;
};

const defaultPlayGroundSettings: PlayGroundSettings = {
  fps: 10,
  timeLimit: 200,
};

const PlayGround: React.FC<Props> = (props) => {
  const {
    page: { init },
  } = props;

  const [{ fps, timeLimit }, setSettings] = useState(defaultPlayGroundSettings);

  const [code, setCode] = useState(viewCode(init));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value);

  const [, setNow] = useState(new Date());
  useEffect(() => {
    const timer = fps !== 'Disable time refresh' ? window.setInterval(() => setNow(new Date()), 1000 / fps) : -1;
    return () => {
      if (timer !== -1) {
        window.clearInterval(timer);
      }
    };
  }, [fps]);

  const { status, body } = execCode(code, { timeLimit });
  const isValid = status === 'success';
  const isCorrect = body === execCode(viewCode(init), { timeLimit }).body;
  const len = getByteLen(code);

  const checkbox = (
    <Checkbox
      checked={fps === 'Disable time refresh'}
      onChange={(e, checked) =>
        setSettings({
          fps: checked ? 'Disable time refresh' : defaultPlayGroundSettings.fps,
          timeLimit,
        })
      }
      name="checkedA"
    />
  );

  return (
    <Box p={2}>
      <Box display="flex" flexDirection="row" mb={2}>
        <Box>
          <TextField
            label="Calculation time limit"
            type="number"
            variant="standard"
            style={{ width: 100 }}
            inputProps={{ style: { textAlign: 'right' } }}
            value={timeLimit}
            onChange={(e) => setSettings({ fps, timeLimit: Number(e.target.value) })}
          />
        </Box>
        <Box ml={5}>
          <FormControlLabel control={checkbox} label="Disable time refresh" />
        </Box>
        <Grow in={fps !== 'Disable time refresh'}>
          <Box ml={1}>
            <TextField
              label="FPS"
              type="number"
              variant="standard"
              style={{ width: 100 }}
              inputProps={{ style: { textAlign: 'right' } }}
              value={fps}
              onChange={(e) => setSettings({ fps: Number(e.target.value), timeLimit })}
            />
          </Box>
        </Grow>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={6}>
          <div style={{ position: 'relative' }}>
            <TextField
              value={code}
              onChange={handleChange}
              rows={31}
              multiline
              fullWidth
              inputProps={{ spellCheck: 'false' }}
              error={!isValid}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px 4px 0 0' } }}
            />
            <BoxBelowTextfield>
              <Typography align="right">Number of characters: {len}</Typography>
            </BoxBelowTextfield>
          </div>
        </Grid>
        <Grid item xs={12} xl={6}>
          <div style={{ position: 'relative' }}>
            <TextField
              value={body}
              rows={31}
              multiline
              fullWidth
              sx={{
                letterSpacing: 1.5,
                '& fieldset': {
                  borderColor: isCorrect ? lightGreen.A400 : undefined,
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px 4px 0 0',
                },
              }}
            />
            <BoxBelowTextfield>{isCorrect ? 'Correct' : 'Incorrect'}</BoxBelowTextfield>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayGround;
