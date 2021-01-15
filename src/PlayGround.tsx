import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";

import { viewCode, execCode, getByteLen } from "./func/util";
import { Page } from "./routes";
import { Checkbox, FormControlLabel, Grow } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {},
    correct: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: lightGreen.A400,
        },
      },
    },
  })
);

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-multiline": {
      paddingBottom: 48.5,
    },
  },
})(TextField);

function BoxBelowTextfield(props: { children: React.ReactNode }) {
  return (
    <Box
      position="absolute"
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
  fps: number | "Disable time refresh";
  timeLimit: number;
};

const defaultPlayGroundSettings: PlayGroundSettings = {
  fps: 10,
  timeLimit: 200,
};

export default function PlayGround(props: Props) {
  const classes = useStyles();
  const {
    page: { init, origin },
  } = props;

  const [{ fps, timeLimit }, setSettings] = useState(defaultPlayGroundSettings);

  const [code, setCode] = useState(viewCode(init));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);

  const [, setNow] = useState(new Date());
  useEffect(() => {
    fps !== "Disable time refresh" && console.log(1000 / fps);
    const timer =
      fps !== "Disable time refresh"
        ? window.setInterval(() => setNow(new Date()), 1000 / fps)
        : -1;
    return () => {
      if (timer !== -1) {
        window.clearInterval(timer);
      }
    };
  }, [fps]);

  const { status, body } = execCode(code, [], { timeLimit });
  const isValid = status === "success";
  const isCorrect = body === origin();
  const len = getByteLen(code);

  const checkbox = (
    <Checkbox
      checked={fps === "Disable time refresh"}
      onChange={(e, checked) =>
        setSettings({
          fps: checked ? "Disable time refresh" : defaultPlayGroundSettings.fps,
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
            label="Time Limit"
            type="number"
            variant="standard"
            style={{ width: 100 }}
            inputProps={{ style: { textAlign: "right" } }}
            value={timeLimit}
            onChange={(e) =>
              setSettings({ fps, timeLimit: Number(e.target.value) })
            }
          />
        </Box>
        <Box ml={5}>
          <FormControlLabel control={checkbox} label="Disable time refresh" />
        </Box>
        <Grow in={fps !== "Disable time refresh"}>
          <Box ml={1}>
            <TextField
              label="FPS"
              type="number"
              variant="standard"
              style={{ width: 100 }}
              inputProps={{ style: { textAlign: "right" } }}
              value={fps}
              onChange={(e) =>
                setSettings({ fps: Number(e.target.value), timeLimit })
              }
            />
          </Box>
        </Grow>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div style={{ position: "relative" }}>
            <CssTextField
              value={code}
              onChange={handleChange}
              rows={32}
              multiline
              fullWidth
              inputProps={{ spellCheck: "false" }}
              error={!isValid}
            />
            <BoxBelowTextfield>
              <Typography align="right">line: {len}</Typography>
            </BoxBelowTextfield>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div style={{ position: "relative" }}>
            <CssTextField
              className={isCorrect ? classes.correct : undefined}
              value={body}
              rows={32}
              multiline
              fullWidth
            />
            <BoxBelowTextfield>
              {isCorrect && <Typography align="right">Correct</Typography>}
            </BoxBelowTextfield>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
