import { Paper, Grid, Typography } from "@mui/material";
import { CircularProgress } from "@mui/joy";
import LensIcon from "@mui/icons-material/Lens";
import "./MealPlanSummaryCard.css";

const ProgressLegendItem = (props: { name: string; value: number; color: any }) => {
  const { name, value, color } = props;
  return (
    <Grid container style={{ paddingRight: 0 }}>
      <LensIcon color={color} fontSize="small" />
      <Grid item style={{ paddingLeft: 16 }}>
        <Typography variant="body2">{name}</Typography>
      </Grid>
      <Grid item style={{ paddingLeft: 36 }}>
        <Typography variant="body2">{value} Calories</Typography>
      </Grid>
    </Grid>
  );
};

export const MealPlanSummaryCard = () => {
  //TODO: useMealData
  const target = 1800;
  const current = 1100;
  const completedPercentage = target >= current ? (current / target) * 100 : 100;
  const remaining = target >= current ? target - current : 0;
  const isCompleted = current >= target;

  return (
    <Paper className="meal-plan-summary-card">
      <Grid container style={{ paddingTop: 24 }}>
        <Grid item>
          <Typography variant="subtitle2">Meal Plan</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <CircularProgress
            color="secondary"
            value={completedPercentage}
            determinate
            sx={{ "--CircularProgress-size": "140px", "--CircularProgress-trackThickness": "14px", "--CircularProgress-progressThickness": "14px" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body1" color="black">
                  {target}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="black">
                  Target(cal)
                </Typography>
              </Grid>
            </Grid>
          </CircularProgress>
        </Grid>
        <Grid item xs={6}>
          <ProgressLegendItem name="current" value={current} color="secondary" />
          <ProgressLegendItem name="Remaining" value={remaining} color="info" />
        </Grid>
      </Grid>
    </Paper>
  );
};
