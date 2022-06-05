import React, {FC} from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: '#fff',
    maxWidth: 'calc(133% - 24px)',
    transform: 'translate(14px, -9px) scale(0.75)',
  },
  '.MuiOutlinedInput-root': {
    '& .MuiInputBase-input + fieldset': {
      borderRadius: '8px',
      borderWidth: '3px',
    },
    '& fieldset legend': {
      maxWidth: '100%',
    },
  },
});

interface TextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  label?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => any;
  onFocus?: (e: any) => any;
  onBlur?: (e: any) => any;
  onClick?: (e: any) => any;
}

const CommonTextField: FC<TextFieldProps> = ({
  label,
  variant,
  color,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onClick,
}) => {
  return (
    <StyledTextField
      label={label}
      variant={variant}
      color={color}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      InputLabelProps={{shrink: true}}
    />
  );
};

CommonTextField.defaultProps = {
  variant: 'outlined',
  color: 'primary',
};

export default CommonTextField;
