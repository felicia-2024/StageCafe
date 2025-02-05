import React from "react";
import Layout from "../Layout/Layout";
import { Card, Grid, Typography, Button } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

const SignIn = () => {
  return (
    <Layout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="login-container"
      >
        <Grid item lg={4} md={6} xs={12}>
          <Card className="authentication-card" sx={{ p: 4 }}>
            <Typography variant="h5" className="text-yellow" gutterBottom>
              Sign In
            </Typography>
            <input
            style={{marginTop: '1rem'}}
              className="text-fields"
              placeholder="Username"
              type="text"
            />
            <input
            style={{marginTop: '1rem'}}
              className="text-fields"
              placeholder="Password"
              type="password"
            />
            <button className="secondary-button sign-in">Sign In</button>
            <Typography variant="body2" align="center" className="text-title" my={2}>
              or
            </Typography>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              className="google-btn"
              sx={{mb:3}}
            >
              Sign in with Google
            </Button>
            <a href="/sign-up" className="text-title" style={{mt:"1rem"}}>Create an Account</a>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SignIn;
