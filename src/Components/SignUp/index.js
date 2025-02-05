import React from "react";
import Layout from "../Layout/Layout";
import { Card, Grid, Typography, Button } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

const SignUp = () => {
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
              Sign Up
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
              placeholder="Email"
              type="text"
            />
            <input
            style={{marginTop: '1rem'}}
              className="text-fields"
              placeholder="Password"
              type="password"
            />
            <input
            style={{marginTop: '1rem'}}
              className="text-fields"
              placeholder="Confirm Password"
              type="password"
            />
            <button className="secondary-button sign-in">Sign Up</button>
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
              Sign Up with Google
            </Button>
            <a href="/sign-in" className="text-title" style={{mt:"1rem"}}>Already have an Account</a>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SignUp;
