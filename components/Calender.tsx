import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { GoTop } from "./GoTop";

export default function NativePickers() {
  return (
    <>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="Deadline"
          type="date"
          defaultValue="2023-01-01"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>
      <GoTop />
    </>
  );
}
