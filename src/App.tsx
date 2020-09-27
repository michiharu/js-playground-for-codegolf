import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import TextField from "@material-ui/core/TextField";
import { lightGreen } from "@material-ui/core/colors";

import { viewCode, isValidCode, execCode, getByteLen } from "./func/util";
import { originalCode } from "./func/code";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

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

export default function App() {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const [code, setCode] = useState(viewCode());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const isValid = isValidCode(code);
  const res = isValid ? execCode(code) : "";
  const isCorrect = res === originalCode();
  const len = getByteLen(code);

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              JS Playground for CodeGolf
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>

      <main>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div style={{ position: "relative" }}>
                <CssTextField
                  value={code}
                  onChange={handleChange}
                  rows={32}
                  multiline
                  fullWidth
                  error={!isValid}
                />
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
                  <Typography align="right">line: {len}</Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div style={{ position: "relative" }}>
                <CssTextField
                  className={isCorrect ? classes.correct : undefined}
                  value={res}
                  rows={32}
                  multiline
                  fullWidth
                />
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
                  {isCorrect && <Typography align="right">Correct</Typography>}
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}
