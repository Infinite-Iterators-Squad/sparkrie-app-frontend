import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { DateCalendarView } from "./custom/DateCalendarView";
import { TargetSummaryCard } from "./home/TargetSummaryCard";

export const HomePage = () => {
  return (
    <Container className="container-with-padding">
      <Grid container>
        <Typography variant="subtitle1" color="primary">
          Home
        </Typography>
      </Grid>
      <DateCalendarView />
      <Grid container>
        <TargetSummaryCard title="Meal Plan" target={1800} completed={1200} />
      </Grid>
    </Container>
  );
};
