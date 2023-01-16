import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputTask(props: {
  value: unknown;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) {
  return (
    <>
      <Box
        component="form"
        // sx={{
        //   "& > :not(style)": { m: 1, width: "25ch" },
        // }}
        noValidate
        autoComplete="off"
        className="p-5"
      >
        <TextField
          id="standard-basic"
          label="Task"
          variant="standard"
          value={props.value}
          onChange={props.onChange}
        />
      </Box>
      <div></div>
    </>
  );
}
