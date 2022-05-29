import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Palette } from "src/styles";


const Calendar = () => {
  const [value, setValue] = useState(null);
  return (
    <Palette>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Birthday"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
  </Palette>
  )
}

export default Calendar