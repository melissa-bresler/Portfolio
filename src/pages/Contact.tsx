// src/pages/Contact.tsx
import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" fullWidth required />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
