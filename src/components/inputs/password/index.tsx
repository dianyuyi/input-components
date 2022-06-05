import React, {FC, useState} from 'react';
import Box from '@mui/material/Box';

import Checklist from './CheckList';
import CommonTextField from 'src/components/inputs/common';
import {Palette} from 'src/styles';

const PasswordField: FC = () => {
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState<string>('');
  const [checkVisible, setCheckVisible] = useState<boolean>(false);

  const handleOnChange = (value: string) => {
    let realValue = password;
    if (value.length < password.length) {
      realValue = realValue.substring(0, password.length - 1);
    } else {
      realValue = realValue + value.charAt(value.length - 1);
    }
    setPassword(realValue);

    const length = value.length;
    let hiddenStr = '';
    for (let i = 0; i < length; i++) {
      hiddenStr = hiddenStr + '*';
    }
    setPasswordShow(hiddenStr);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        width: '335px',
        m: 'auto',
      }}
    >
      <Palette>
        <CommonTextField
          label="Password"
          value={passwordShow}
          placeholder="Password"
          onChange={(e) => handleOnChange(e.target.value)}
          onFocus={() => setCheckVisible(true)}
          onBlur={() => setCheckVisible(false)}
        />
        {checkVisible && (
          <Checklist
            rules={[
              'uppercase',
              'lowercase',
              'number',
              'specialChar',
              'minLength',
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
