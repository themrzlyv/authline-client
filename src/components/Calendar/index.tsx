import React from 'react';
import moment from 'moment';
import { TextField } from '@mui/material';

const Calendar = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    console.log('selectedDate', selectedDate);
  
  return (
    <>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        value={moment(selectedDate).format('YYYY-MM-DD')}
        onChange={(e) => setSelectedDate(moment(e.target.value).toDate())}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};

export default Calendar;
