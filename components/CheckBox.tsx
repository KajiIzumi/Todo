import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckBox(props: {
  value: boolean;
  onChange:
    | ((event: React.SyntheticEvent<Element, Event>, checked: boolean) => void)
    | undefined;
}) {
  return (
    <FormGroup>
      <FormControlLabel
        className="p-3"
        control={<Checkbox defaultChecked />}
        label="Importance"
        sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
        value={props.value}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}
