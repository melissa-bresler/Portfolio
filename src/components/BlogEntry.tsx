import { Grid, Typography } from "@mui/material";
import moment from "moment";

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
      <Grid xs={6} display={"flex"}>
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
            <Typography variant="body1" paragraph>
              {blogText}
            </Typography>
          </Card>
          <Card>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                padding: "5px",
                backgroundColor: "#fff",
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

export const Card: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      {children}
    </div>
  );
};
