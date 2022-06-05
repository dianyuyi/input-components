import React, {FC, useState} from 'react';
import Box from '@mui/material/Box';
import {format} from 'date-fns';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {CalendarPicker} from '@mui/x-date-pickers/CalendarPicker';
import {YearPicker} from '@mui/x-date-pickers/YearPicker';
import {MonthPicker} from '@mui/x-date-pickers/MonthPicker';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CommonTextField from 'src/components/inputs/common';
import {
  CalendarContainer,
  CustomBox,
  CustomCalendarWrapper,
  ToolBar,
  Maintitle,
  SubLabel,
  SwitchBar,
  PickerButton,
  ArrowButton,
  DialogActionBar,
  ActionButton,
} from './styled';
import {Palette} from 'src/styles';

const Calendar: FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>('day');
  const [pickerDate, setPickerDate] = useState<string>(
      format(value ?? new Date(), 'MMMM yyyy'),
  );

  const handlePickerDate = (value: Date, formatStr: string) => {
    return format(value, formatStr);
  };

  const handleDateChangeType = (actionType: string) => {
    if (viewType === 'year') {
      handleYearChange(actionType);
    } else if (viewType === 'month') {
      handleMonthChange(actionType);
    } else {
      handleDayChange(actionType);
    }
  };

  const handleYearChange = (type: string) => {
    const newDate = new Date(value);
    const currentYear = newDate.getFullYear();
    if (type === 'prev') {
      newDate.setFullYear(currentYear - 1);
    } else {
      newDate.setFullYear(currentYear + 1);
    }
    handlePickerDate(newDate, 'yyyy');
    setValue(newDate);
  };

  const handleMonthChange = (type: string) => {
    const newDate = new Date(value);
    const currentMonth = newDate.getMonth();
    if (type === 'prev') {
      if (currentMonth === 0) {
        newDate.setMonth(11);
        newDate.setFullYear(newDate.getFullYear() - 1);
      } else {
        newDate.setMonth(currentMonth - 1);
      }
    }
    if (type === 'next') {
      if (currentMonth === 11) {
        newDate.setMonth(0);
        newDate.setFullYear(newDate.getFullYear() + 1);
      } else {
        newDate.setMonth(currentMonth + 1);
      }
    }
    handlePickerDate(newDate, 'MMMM yyyy');
    setValue(newDate);
  };

  const handleDayChange = (type: string) => {
    const newDate = new Date(value);
    const currentDate = newDate.getDate();
    if (type === 'prev') {
      newDate.setDate(currentDate - 1);
    }
    if (type === 'next') {
      newDate.setDate(currentDate + 1);
    }
    handlePickerDate(newDate, 'MMMM yyyy');
    setValue(newDate);
  };

  const handleViewSwitch = (type: string, formatStr: string) => {
    const viewDate = handlePickerDate(value, formatStr);
    setPickerDate(viewDate);
    setViewType(type);
  };
  const handleDialogAction = (action: string) => {
    if (action === 'cancel') {
      setValue(null);
    }
    setModalOpen(false);
  };

  return (
    <Palette>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarContainer>
          <CommonTextField
            label="Birthday"
            placeholder="mm/dd/yyyy"
            value={value ? handlePickerDate(value, 'MM/dd/yyyy') : ''}
            onClick={() => setModalOpen(!modalOpen)}
          />
          {modalOpen && (
            <CustomBox>
              <Box>
                <ToolBar>
                  <SubLabel>{'TEXT'}</SubLabel>
                  <Maintitle>
                    {handlePickerDate(value ?? new Date(), 'EEE, MMM d')}
                  </Maintitle>
                </ToolBar>
                <SwitchBar>
                  <ArrowButton onClick={() => handleDateChangeType('prev')}>
                    <ArrowBackIosNewIcon />
                  </ArrowButton>
                  <PickerButton
                    onClick={() => handleViewSwitch('year', 'yyyy')}
                  >
                    {pickerDate}
                  </PickerButton>
                  <ArrowButton onClick={() => handleDateChangeType('next')}>
                    <ArrowForwardIosIcon />
                  </ArrowButton>
                </SwitchBar>
                {viewType === 'day' ? (
                  <CustomCalendarWrapper>
                    <CalendarPicker
                      date={value ?? new Date()}
                      onChange={(newDate) => setValue(newDate)}
                      showDaysOutsideCurrentMonth={true}
                    />
                  </CustomCalendarWrapper>
                ) : viewType === 'month' ? (
                  <CustomCalendarWrapper>
                    <MonthPicker
                      date={value ?? new Date()}
                      onChange={(newDate) => {
                        setValue(newDate);
                        handleViewSwitch('day', 'MMMM yyyy');
                      }}
                    />
                  </CustomCalendarWrapper>
                ) : (
                  <CustomCalendarWrapper>
                    <YearPicker
                      date={value ?? new Date()}
                      autoFocus={true}
                      onChange={(newDate) => {
                        setValue(newDate);
                        handleViewSwitch('month', 'MMMM yyyy');
                      }}
                    />
                  </CustomCalendarWrapper>
                )}
                <DialogActionBar>
                  <ActionButton onClick={() => handleDialogAction('cancel')}>
                    Cancel
                  </ActionButton>
                  <ActionButton onClick={() => handleDialogAction('ok')}>
                    OK
                  </ActionButton>
                </DialogActionBar>
              </Box>
            </CustomBox>
          )}
        </CalendarContainer>
      </LocalizationProvider>
    </Palette>
  );
};

export default Calendar;
