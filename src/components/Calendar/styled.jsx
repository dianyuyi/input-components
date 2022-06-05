import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;
export const CustomBox = styled.div`
  font-family: 'Inter';
  display: flex;
  width: 320px;
  height: 469px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  & .MuiPickersToolbar-penIconButton {
    display: none;
  }
`;

export const CustomCalendarWrapper = styled.div`
  width: 320px;
  height: 240px;
  overflow-y: scroll;
  & .MuiCalendarPicker-root {
    > div:first-of-type {
      display: none;
    }
  }
  & .MuiPickersDay-dayOutsideMonth {
    opacity: 0.5;
  }
  & .MuiPickersDay-root {
    &:hover {
      color: rgba(0, 0, 0, 0.87);
      background: #fff;
    }
  }

  & .PrivatePickersSlideTransition-root {
    min-height: 200px;
  }
  & .PrivatePickersMonth-root,
  .PrivatePickersYear-yearButton {
    &:hover {
      color: rgba(0, 0, 0, 0.87);
      background: #fff;
      border-radius: 0;
    }
    &.Mui-selected {
      border-radius: 0;
    }
  }
`;

export const InitialButton = styled.button`
  appearance: none;
  user-select: none;
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px;
`;

export const Maintitle = styled.h4`
  margin: 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 137.5%;
`;

export const SubLabel = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

export const CustomIcon = styled.div`
  width: 10px;
  height: 10px;
  background: #626a12;
`;
export const SwitchBar = styled.div`
  width: 320px;
  height: 48px;
  display: flex;
  justify-content: space-between;
`;
export const PickerButton = styled(InitialButton)`
  color: #fff;
`;
export const ArrowButton = styled(InitialButton)`
  color: #fff;

  & svg {
    width: 8px;
    height: 12px;
  }
`;

export const DialogActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export const ActionButton = styled(InitialButton)`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  min-width: 100px;
  padding: 6px 8px;
  border-radius: 4px;
  color: #fff;
`;
