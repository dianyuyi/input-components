import React from "react";
import { Title } from "src/components/title";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Container>
      <Title>Demo Link</Title>
      <Grid item spacing={2}>
        <Box sx={{ p: 2, m: 2,  border: '1px dashed grey' }}>
          <Link href="/password" underline="hover">
            {"Password Demo"}
          </Link>
        </Box>
        <Box sx={{ p: 2,m: 2, border: '1px dashed grey' }}>
          <Link href="/calendar" underline="hover">
            {"Calendar Demo"}
          </Link>
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;
