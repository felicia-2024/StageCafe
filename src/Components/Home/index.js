import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Layout from "../Layout/Layout";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Products from "./products";


const Home = () => {
  return (
    <Layout>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Online Menu <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div className="full-width-area">
        <Grid
          container
          display="flex"
          justifyContent="center"
          className="black-area"
        >
          <Grid
            item
            px={3}
            xs={12}
            mt={3}
            lg={11}
            display="flex"
            justifyContent="space-between"
          >
            <Typography className="text-yellow" variant="h4">
              Featured Products
            </Typography>
          </Grid>
          <Grid
            item
            p={3}
            xs={12}
            lg={11}
            display="flex"
            justifyContent="space-between"
          >
            <Typography className="text-title" variant="h4">
              Cakes & Sweet Treats
            </Typography>
            <Link href="" className="text-gray">
              View All
            </Link>
          </Grid>
          <Grid item p={3} xs={12} lg={11}>
            <Products />
          </Grid>

          <Grid
            item
            p={3}
            xs={12}
            lg={11}
            display="flex"
            justifyContent="space-between"
          >
            <Typography className="text-title" variant="h4">
              Savouries
            </Typography>
            <Link href="" className="text-gray">
              View All
            </Link>
          </Grid>
          <Grid item p={3} xs={12} lg={11}>
            <Products />
          </Grid>
        </Grid>
      </div>

      
    </Layout>
  );
};

export default Home;
