import React, { useState } from "react";

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

import { viewCode, isValidCode, execCode, getByteLen } from "./func/util";
import { Page } from "./routes";

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
}

export default function PlayGround(props: Props) {
  const classes = useStyles();
  const { page: { init, origin }} = props;

  const [code, setCode] = useState(viewCode(init));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const isValid = isValidCode(code);
  const res = isValid ? execCode(code) : "";
  const isCorrect = res === origin();
  const len = getByteLen(code);

  return (
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
            <BoxBelowTextfield>
              <Typography align="right">line: {len}</Typography>
            </BoxBelowTextfield>
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
            <BoxBelowTextfield>
              {isCorrect && <Typography align="right">Correct</Typography>}
            </BoxBelowTextfield>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
