import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const GamePreviewCard: React.FC<{
  title: string;
  description: string;
  link: string;
}> = ({ title, description, link }) => {
  return (
    // {/* TODO: Should have fixed height as tthe boxes are currently different sizes based on the amount of text in them */}
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
            gutterBottom
          >
            {title}
          </Typography>
          {/* TODO: Add Preview of some kind here i.e. image */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* TODO: On hover button turns white, either stop this or change the style */}
          <Button
            size="small"
            component={Link}
            to={link}
            sx={{ color: "white", background: "black" }}
          >
            View Game
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GamePreviewCard;
