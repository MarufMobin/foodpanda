import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Container
      sx={{
        // width: { xs: "90%", sm: "95%", md: "90%" },

        paddingTop: 5,
        margin: "auto",
      }}
      container
    >
      <Box
        sx={{
          borderTop: "1px solid #ebebeb",
          borderBottom: "1px solid #ebebeb",
          paddingY: 2,
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "10%" }}
            image="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1692004197~exp=1692004797~hmac=1de691f9d5f0aaaaaff12578f12b7e0320b7b4f5d6e31175abc55a7fc646aaf0"
            alt="Paella dish"
          />
          <Box>
            <FacebookIcon
              sx={{
                border: 2,
                borderRadius: "50%",
                borderColor: "#cacaca",
                fontSize: "40px",
                padding: 1,
                marginRight: 2,
                "&:hover": { color: "#e21b70", borderColor: "#e21b70" },
              }}
            />
            <InstagramIcon
              sx={{
                border: 2,
                borderRadius: "50%",
                borderColor: "#cacaca",
                padding: 1,
                fontSize: "40px",

                "&:hover": { color: "#e21b70", borderColor: "#e21b70" },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{
          paddingY: 3,
          textAlign: "center",
          borderBottom: "1px solid #ebebeb",
        }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              color: "#333333",
              display: { xs: "none", sm: "block", md: "block" },
            }}
            variant="caption"
            gutterBottom
          >
            © 2022 foodpanda
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              color: "#333333",
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
            variant="body2"
            gutterBottom
          >
            <span>Press</span>
            <span>Help Center</span>
            <span> Terms and conditions</span>
            <span>Privacy policy</span>
            <span>Refund Account Terms & Conditions</span>
            <span> Cashback Program </span>
            <span> Pandapro Subscription</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              color: "#333333",
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
            variant="body2"
            gutterBottom
          >
            <span> Dine-in </span>
            <span>Security</span>
            <span> Partner with us </span>
            <span> How foodpanda works</span>
            <span>Download foodpanda Apps</span>
            <span>Careers</span>
            <span>Corporate Customer</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              color: "#333333",
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
            variant="body2"
            gutterBottom
          >
            <span>pandago - Request a rider</span>
            <span> foodpanda Deals</span>
            <span> Grocery delivery </span>
            <span> Become an affiliate</span>
            <span>All cities </span>
            <span>Careers</span>
            <span> Ramadan delivery</span>
          </Typography>

          <Typography
            sx={{
              color: "#333333",
              display: { xs: "block", sm: "none", md: "none" },
            }}
            variant="caption"
            gutterBottom
          >
            © 2022 foodpanda
          </Typography>
        </Grid>
      </Grid>

      <br />
      <Grid
        sx={{
          paddingY: 3,
          paddingBottom: 3,
          textAlign: "center",
          borderBottom: "1px solid #ebebeb",
        }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{ fontWeight: "700", textAlign: "left", fontSize: 15 }}
            variant="h6"
            gutterBottom
          >
            PIZZA DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span>Press</span>
            <span>Help Center</span>
            <span> Terms and conditions</span>
            <span>Privacy policy</span>
            <span>Refund Account Terms & Conditions</span>
            <span> Cashback Program </span>
            <span> Pandapro Subscription</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{ fontWeight: "700", textAlign: "left", fontSize: 15 }}
            variant="h6"
            gutterBottom
          >
            BURGERS DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span>Press</span>
            <span>Help Center</span>
            <span> Terms and conditions</span>
            <span>Privacy policy</span>
            <span>Refund Account Terms & Conditions</span>
            <span> Cashback Program </span>
            <span> Pandapro Subscription</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{ fontWeight: "700", textAlign: "left", fontSize: 15 }}
            variant="h6"
            gutterBottom
          >
            ITALIAN FOOD DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span> Dine-in </span>
            <span>Security</span>
            <span> Partner with us </span>
            <span> How foodpanda works</span>
            <span>Download foodpanda Apps</span>
            <span>Careers</span>
            <span>Corporate Customer</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{
              fontWeight: "700",
              textAlign: "left",
              textTransform: "uppercase",
              fontSize: 15,
            }}
            variant="h6"
            gutterBottom
          >
            CHINESE FOOD DELIVERY DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span>pandago - Request a rider</span>
            <span> foodpanda Deals</span>
            <span> Grocery delivery </span>
            <span> Become an affiliate</span>
            <span>All cities </span>
            <span>Careers</span>
            <span> Ramadan delivery</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{
              fontWeight: "700",
              textAlign: "left",
              textTransform: "uppercase",
              fontSize: 15,
            }}
            variant="h6"
            gutterBottom
          >
            PIZZA DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#333333",
              textAlign: "left",
            }}
          >
            <span>pandago - Request a rider</span>
            <span> foodpanda Deals</span>
            <span> Grocery delivery </span>
            <span> Become an affiliate</span>
            <span>All cities </span>
            <span>Careers</span>
            <span> Ramadan delivery</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{
              fontWeight: "700",
              textAlign: "left",
              textTransform: "uppercase",
              fontSize: 15,
            }}
            variant="h6"
            gutterBottom
          >
            INDIAN FOOD DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span>pandago - Request a rider</span>
            <span> foodpanda Deals</span>
            <span> Grocery delivery </span>
            <span> Become an affiliate</span>
            <span>All cities </span>
            <span>Careers</span>
            <span> Ramadan delivery</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography
            sx={{
              fontWeight: "700",
              textAlign: "left",
              textTransform: "uppercase",
              fontSize: 15,
            }}
            variant="h6"
            gutterBottom
          >
            FAST FOOD DELIVERY IN DHAKA
          </Typography>
          <Typography
            sx={{
              color: "#767676",
              textAlign: "left",
            }}
          >
            <span>pandago - Request a rider</span>
            <span> foodpanda Deals</span>
            <span> Grocery delivery </span>
            <span> Become an affiliate</span>
            <span>All cities </span>
            <span>Careers</span>
            <span> Ramadan delivery</span>
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ marginY: 5 }}>
        <Typography>
          <span>Hong Kong | </span>
          <span>Hong Kong | </span>
          <span>Pakistan | </span>
          <span>Singapore | </span>
          <span>Malaysia | </span>
          <span>Thailand | </span>
          <span>Taiwan | </span>
          <span>Romania | </span>
          <span>Bulgaria | </span>
          <span>Philippines | </span>
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
