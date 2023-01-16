// import { Button } from "@mui/material";
import BasicButton from "../components/Button";
import Calender from "../components/Calender";
import CheckBox from "../components/CheckBox";
import { GoTop } from "../components/GoTop";
import InputTask from "../components/InputTask";

export default function MUItest() {
  return (
    <>
      {/* <Button>text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button> */}
      {/* <Calender /> */}
      {/* <InputTask value={undefined} onChange={undefined} /> */}
      {/* <CheckBox /> */}
      <BasicButton />
      <GoTop />
    </>
  );
}
