import { Paper, Grid, Typography } from "@mui/material";
import { CircularProgress } from "@mui/joy";
import "./TargetSummaryCard.css";

interface TargetSummaryCard {
  title: string;
  target: number;
  completed: number;
}

export const TargetSummaryCard = (props: TargetSummaryCard) => {
  const { title, target, completed } = props;
  const isCompleted = completed >= target;

  return (
    <Paper className="target-summary-card">
      <Grid container>
        <Grid item>
          <Typography variant="subtitle2">Meal Plan</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <CircularProgress
            color="secondary"
            value={(completed / target) * 100}
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
          {/* <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress color="secondary" style={{ height: 140, width: 140, borderRadius: 24 }} value={(completed / target) * 100} variant="determinate" />
            <Box className="circular-progress-inner-box ">
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="body1">{target}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Target(cal)</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box> */}
        </Grid>
      </Grid>
    </Paper>
  );
};
