import React, {useState, useEffect, ReactNode} from 'react';
import {Modal, List} from './styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface CustomIconComponents {
  ValidIcon: React.ReactNode;
  InvalidIcon: React.ReactNode;
}
interface PasswordProps {
  value: string;
  valueAgain?: string;
  minLength?: number;
  maxLength?: number;
  iconSize?: number;
  validColor?: string;
  invalidColor?: string;
  onChange?: (isValid: boolean) => boolean;
  messages?: {
    [key in RuleNames]?: string;
  };
  iconComponents?: CustomIconComponents;
}
export type RuleNames =
  | 'uppercase'
  | 'lowercase'
  | 'number'
  | 'specialChar'
  | 'minLength'
  | 'maxLength'
  | 'match'
  | 'notEmpty';

export interface ReactPasswordChecklistProps extends PasswordProps {
  className?: string;
  style?: React.CSSProperties;
  rules: Array<RuleNames>;
}
const ReactPasswordProps: React.FC<ReactPasswordChecklistProps> = ({
  className,
  style,
  rules,
  value,
  valueAgain,
  minLength,
  maxLength,
  onChange,
  messages = {},
  ...remainingProps
}) => {
  const [isValid, setIsValid] = useState(false);
  const ruleDefinitions: {
    [key in RuleNames]: {valid: boolean; message: string};
  } = {
    uppercase: {
      valid: (() => {
        let i = 0;
        if (value.length === 0) {
          return false;
        }
        while (i < value.length) {
          const character = value.charAt(i);
          if (character == character.toLowerCase()) {
            // Character is lowercase, numeric, or a symbol
          } else if (character == character.toUpperCase()) {
            return true;
          }
          i++;
        }
        return false;
      })(),
      message: messages.uppercase || 'Have at least one uppercase letter',
    },
    lowercase: {
      valid: (() => {
        let i = 0;
        if (value.length === 0) {
          return false;
        }
        while (i < value.length) {
          const character = value.charAt(i);
          if (character == character.toUpperCase()) {
            // Character is lowercase, numeric, or a symbol
          } else if (character == character.toLowerCase()) {
            return true;
          }
          i++;
        }
        return false;
      })(),
      message: messages.lowercase || 'Have at least one lowercase letter.',
    },
    number: {
      valid: /\d/g.test(value),
      message: messages.number || 'Have at least one number',
    },
    specialChar: {
      valid: /[~`¿¡!#$%^&*€£@+÷=\-[\]';,{}()|":<>?._]/g.test(value),
      message:
        messages.specialChar ||
        'Have at least one special character\n(!@#$...etc)',
    },
    minLength: {
      valid: value.length >= (minLength || 100),
      message: messages.minLength || `Longer than ${minLength} characters.`,
    },
    maxLength: {
      valid: value.length <= (maxLength || 16),
      message: messages.maxLength || `Less than ${maxLength} characters.`,
    },
    match: {
      valid: value.length > 0 && value === valueAgain,
      message: messages.match || 'Passwords match.',
    },
    notEmpty: {
      valid: Boolean(value.length > 0 && valueAgain && valueAgain.length > 0),
      message: messages.notEmpty || 'Password fields are not empty.',
    },
  };

  const enabledRules = rules.filter((rule) => Boolean(ruleDefinitions[rule]));

  useEffect(() => {
    if (enabledRules.every((rule) => ruleDefinitions[rule].valid)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value, valueAgain]);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(isValid);
    }
  }, [isValid]);

  return (
    <Modal>
      <ul className={className} style={style}>
        {enabledRules.map((rule) => {
          const {message, valid} = ruleDefinitions[rule];
          return (
            <Rule key={rule} valid={valid} {...remainingProps}>
              {message}
            </Rule>
          );
        })}
      </ul>
    </Modal>
  );
};

interface RuleProps {
  valid: boolean;
  validColor?: string;
  invalidColor?: string;
  children?: ReactNode;
}
const Rule: React.FC<RuleProps> = ({
  valid,
  validColor,
  invalidColor,
  children,
}) => {
  return (
    <List className={valid ? 'valid' : 'invalid'}>
      {valid ? (
        <CheckCircleIcon sx={{color: validColor}} />
      ) : (
        <CheckCircleOutlineIcon sx={{color: invalidColor}} />
      )}
      <span>{children}</span>
    </List>
  );
};

ReactPasswordProps.defaultProps = {
  validColor: '#00D1FF',
  invalidColor: '#565656',
};

export default ReactPasswordProps;
