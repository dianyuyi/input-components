import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Checklist from "./CheckList";
import { Palette } from "src/styles";

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  ".MuiOutlinedInput-root": {
    "& .MuiInputBase-input + fieldset": {
      borderRadius: "8px",
      borderWidth: "3px",
    },
  },
});

const PasswordField: FC = () => {
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState("");
  const [checkVisible, setCheckVisible] = useState(false);

  const handleOnChange = (value: string) => {
    let realValue = password;
    if (value.length < password.length) {
      realValue = realValue.substring(0, password.length - 1);
    } else {
      realValue = realValue + value.charAt(value.length - 1);
    }
    setPassword(realValue);

    const length = value.length;
    let hiddenStr = "";
    for (let i = 0; i < length; i++) {
      hiddenStr = hiddenStr + "*";
    }
    setPasswordShow(hiddenStr);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        width: "335px",
        m: "auto",
      }}
    >
      <Palette>
        <StyledTextField
          label="Password"
          variant="outlined"
          color="primary"
          value={passwordShow}
          id="validation-outlined-input"
          onChange={(e) => handleOnChange(e.target.value)}
          onFocus={() => setCheckVisible(true)}
          onBlur={() => setCheckVisible(false)}
        />
        {checkVisible && (
          <Checklist
            rules={[
              "uppercase",
              "lowercase",
              "number",
              "specialChar",
              "minLength",
            ]}
            minLength={8}
            value={password}
          />
        )}
      </Palette>
    </Box>
  );
};

export default PasswordField;
