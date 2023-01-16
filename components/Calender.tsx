import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NativePickers(props: {
  // propsで受け取ったvalue, onchangeで日付を格納してCreateUsefulTodoに渡す
  value: unknown;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) {
  return (
    <>
      <Stack component="form" noValidate spacing={3} className="p-5">
        <TextField
          id="date"
          label="Deadline"
          type="date"
          value={props.value} // 親に渡す
          onChange={props.onChange} // 親に渡す
          defaultValue="2023-01-01"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>
    </>
  );
}
