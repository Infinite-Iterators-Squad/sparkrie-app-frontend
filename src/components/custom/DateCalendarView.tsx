import React, { Fragment } from "react";
import dayjs from "dayjs";
import { Grid, Paper, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

export const DateCalendarView = () => {
  const month = dayjs().format("MMM YYYY");

  return (
    <Fragment>
      <Grid container style={{ paddingTop: 48 }}>
        <Typography variant="body2" color="primary">
          {month}
        </Typography>
      </Grid>
      {/* <Grid container>
        <Paper className="date-calendar-container">
          <DateCalendar defaultValue={dayjs()} />
        </Paper>
      </Grid> */}
    </Fragment>
  );
};
