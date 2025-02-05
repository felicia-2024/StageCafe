import React from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Grid,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Sample from "../../Assets/products/sample.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetails = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item lg={6} xs={12}>
          <Box className="details-product-image">
            <img src={Sample} width="90%" />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box mt={5}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="text-yellow" variant="h4" component="h2">
                  Red Velvet Cake
                </Typography>
                <Typography className="text-title" mt={3}>
                  Note: While a full 1Kg cake is round in shape and can be cut
                  into 12 wedges, a piece of Chocolate Finger Gateaux is
                  prepared separately, and is rectangular in shape.
                </Typography>
                <TableContainer>
                  <Table>
                    <TableRow>
                      <TableCell className="text-title">Weight</TableCell>
                      <TableCell className="text-title">1 KG</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-title">Maximum Order Qty</TableCell>
                      <TableCell className="text-title">3</TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item mt={3} xs={12}>
                <Typography variant="h4" className="text-yellow">
                  LKR 3,000.00 (1 KG)
                </Typography>
              </Grid>
              <Grid item mt={3} xs={12}>
                <form>
                  <input
                    className="text-fields"
                    placeholder="Free Customized Wording"
                  />
                  <Box mt={2}>
                    <Grid container>
                      <Grid
                        item
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        lg={1}
                        xs={2}
                        sx={{ background: "var(--yellow)" }}
                      >
                        <IconButton sx={{ height: "40px", width: "40px" }}>
                          <RemoveIcon sx={{ color: "var(--black)" }} />
                        </IconButton>
                      </Grid>
                      <Grid item lg={1} xs={2}>
                        <input
                          value={1}
                          style={{ textAlign: "center", fontSize: "1rem" }}
                          className="text-fields"
                        />
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        lg={1}
                        xs={2}
                        sx={{ background: "var(--yellow)" }}
                      >
                        <IconButton sx={{ height: "40px", width: "40px" }}>
                          <AddIcon sx={{ color: "var(--black)" }} />
                        </IconButton>
                      </Grid>
                      <Grid
                        item
                        lg={9}
                        display="flex"
                        justifyContent="end"
                        xs={6}
                      >
                        <a
                          href="/product-details"
                          className="primary-button link"
                        >
                          Add to Cart
                        </a>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Grid>
              <Grid item mt={3} xs={12}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDetails;
