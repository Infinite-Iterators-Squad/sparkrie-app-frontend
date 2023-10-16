import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { DateCalendarView } from "./custom/DateCalendarView";
import { MealPlanSummaryCard } from "./home/MealPlanSummaryCard";

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
        <MealPlanSummaryCard />
      </Grid>
    </Container>
  );
};
