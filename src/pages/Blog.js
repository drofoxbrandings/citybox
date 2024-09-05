import React from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Link,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Hero from "../components/Hero/Hero";
import bloghero from "../images/bloghero2.svg";
import blogHeroMob from "../images/bloghero2.svg";
import dubaitocanada from "../images/blog_dubai-to-canada.png";
import useStyles from "./pageStyles";

const Blog = () => {
  const classes = useStyles();
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Layout>
      <Container disableGutters={true}>
        <Hero
          heroTitle=""
          heroSubTitle=""
          height="80vh"
          backgroundImage={downsm ? blogHeroMob : bloghero}
        />
      </Container>
      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container>
          <Grid item xs={12} md={3}>
            {/* <Slide bottom> */}
            <Link href="/blog/cargo-to-canada" underline="none">
              <Card elevation={2}>
                <CardMedia
                  component="img"
                  alt={"Cargo To Canada From UAE | Freight"}
                  image={dubaitocanada}
                  title="Cargo To Canada From UAE | Freight"
                />
                <CardHeader title="Cargo To Canada From UAE | Freight"></CardHeader>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    Moving from Dubai to Canada: A Complete Guide for Shipping
                    Household and Commercial Items
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            {/* </Slide> */}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Blog;
