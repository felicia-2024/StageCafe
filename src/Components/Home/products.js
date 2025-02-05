import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ItemData from "./itemData";
import Sample from "../../Assets/products/sample.png";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 700, xs: 350 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2} mb={5} mt={1}>
      {ItemData.map((item, index) => (
        <Grid key={index} item lg={2.4} md={4} xs={12}>
          <Card className="product-card">
            <CardActionArea>
              <Box className="product-image">
                <img
                  src={require(`../../Assets/products/${item.image}`)}
                  width="90%"
                />
                <Box className="product-overlay">
                  <button onClick={handleOpen} className="view-button">
                    View Details
                  </button>
                </Box>
              </Box>
              <CardContent>
                <Typography gutterBottom className="product-name" variant="h6">
                  {item.name}
                </Typography>
                <Typography className="product-price" variant="h5">
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

      <Modal
        open={open}
        onClose={handleClose}
        className="product-modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-body">
          <Box display="flex" justifyContent="space-between">
            <Typography className="text-yellow" variant="h4" component="h2">
              Red Velvet Cake
            </Typography>
            <IconButton onClick={handleClose}>
                <CloseIcon className="text-yellow"/>
            </IconButton>
          </Box>
          <Box className="product-image" display="flex" justifyContent="center">
            <img src={Sample} width="70%"  />
          </Box>
          <Typography variant="h5" className="text-yellow">
            LKR 3,000.00 (1 KG)
          </Typography>
          <Typography className="text-title" mt={3}>
            Note: While a full 1Kg cake is round in shape and can be cut into 12
            wedges, a piece of Chocolate Finger Gateaux is prepared separately,
            and is rectangular in shape.
          </Typography>
          <Box mt={2} display="flex" gap={2}>
            <a href="/product-details" className="secondary-button link">Buy Now</a>
            <a href="/product-details" className="primary-button link">Add to Cart</a>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Products;
