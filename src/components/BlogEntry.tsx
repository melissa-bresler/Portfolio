import { Box, Typography } from "@mui/material";
import moment from "moment";

const BlogEntry: React.FC<{ date: string | Date }> = ({ date }) => {
  const displayDate = moment(date).format("DD-MM-YYYY");

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* LEFT SIDE */}
      {/* box componenet to put images into */}
      {/* RIGHT SIDE */}
      <Typography variant="h4" gutterBottom>
        {displayDate}
      </Typography>
      <Card>
        {/* Blog entry text*/}
        <></>
      </Card>
      <Card>
        {/* list of key changes */}
        <li></li>
      </Card>
    </Box>
  );
};

export default BlogEntry;

export const Card: React.FC<{ children: any }> = ({ children }) => {
  return <div>{children}</div>;
};
