import { Grid, Typography } from "@mui/material";
import moment from "moment";
import { Card } from "../../Card";

const BlogEntry: React.FC<{
  date: string | Date;
  blogText: string;
  image: string;
  imageAlt: string;
  switchSides: boolean;
  keyChanges: string[];
}> = ({ date, blogText, image, imageAlt, switchSides, keyChanges }) => {
  const displayDate = moment(date).format("DD-MM-YYYY");

  return (
    <>
      <Grid xs={6} display={"flex"} sx={{ paddingTop: "5%" }}>
        {!switchSides && (
          <Grid item width={"50%"}>
            <img
              src={image}
              alt={imageAlt}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        )}

        <Grid item width={"50%"}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            {displayDate}
          </Typography>
          <Card>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", width: "90%" }}
            >
              {blogText}
            </Typography>
          </Card>
          <Card>
            <div
              style={{
                border: "1px solid var(--lightgrey)",
                borderRadius: "8px",
                //TODO: tested this with pink instead of grey and it's not terrible
                boxShadow: "0 2px 5px var(--lightestgrey)",
                padding: "5px",
                backgroundColor: "var(--white)",
                width: "100%",
                margin: "20px",
              }}
            >
              <ul
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  justifyItems: "center",
                  padding: 0,
                  listStyleType: "none",
                  gridRowGap: "10px",
                }}
              >
                {keyChanges.map((change, index) => (
                  <div key={index}>
                    <li>{change}</li>
                  </div>
                ))}
              </ul>
            </div>
          </Card>
        </Grid>
        {switchSides && (
          <Grid item width={"50%"}>
            <img
              src={image}
              alt={imageAlt}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default BlogEntry;
