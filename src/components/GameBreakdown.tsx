import { Grid, Typography } from "@mui/material";
import { Card } from "./BlogEntry";
import moment from "moment";
import UnityGame from "./UnityGame";

const GameBreakdown: React.FC<{
  date: string | Date;
  description: string;
  title: string;
  platforms: string[];
  status: string;
  logos: { name: string; alt: string }[];
  playGame: boolean;
  gameArt: { src: string; alt: string };
}> = ({
  date,
  description,
  title,
  platforms,
  status,
  logos,
  playGame,
  gameArt,
}) => {
  const displayDate = moment(date).format("DD-MM-YYYY");

  return (
    <>
      <Grid xs={6} display={"flex"}>
        <Grid item width={"50%"}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Typography
            variant="overline"
            fontSize={14}
            sx={{
              textAlign: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: 0,
            }}
            gutterBottom
          >
            {platforms.join(" | ")}
          </Typography>
          <Card>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              {description}
            </Typography>
          </Card>
          <Grid
            xs={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item width={"50%"}>
              <Card>
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    padding: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography variant="overline" fontSize={16}>
                    {status}
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item width={"50%"}>
              <Card>
                <div style={{ display: "flex" }}>
                  {logos.map((logo, index) => (
                    <div key={index}>
                      <img
                        src={logo.name}
                        alt={logo.alt}
                        style={{ width: "50px", height: "auto", margin: 5 }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </Grid>
          </Grid>
          <Card>
            <Typography variant="h5" style={{ color: "light-grey" }}>
              {displayDate}
            </Typography>
          </Card>
        </Grid>
        <Grid item width={"50%"} marginLeft={"5px"}>
          {/* TODO: Make game embed flexible like a variable*/}
          {playGame ? (
            <UnityGame />
          ) : (
            <img
              src={gameArt.src}
              alt={gameArt.alt}
              style={{ width: "90%", height: "auto", margin: 5 }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default GameBreakdown;
