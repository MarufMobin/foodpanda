import { Image } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: { xs: "98%", sm: "95%", md: "90%" },
        margin: "auto",
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid #ebebeb",
          borderBottom: "1px solid #ebebeb",
          paddingTop: 8,
          paddingBottom: 8,
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
            <Image
              sx={{
                border: 2,
                borderRadius: "50%",
                borderColor: "#cacaca",
                padding: 1,
                marginRight: 2,
                "&:hover": { color: "#e21b70" },
              }}
            />
            <Image
              sx={{
                border: 2,
                borderRadius: "50%",
                borderColor: "#cacaca",
                padding: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{ paddingY: 3, textAlign: "center" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ color: "#333333" }} variant="caption" gutterBottom>
            © 2022 foodpanda
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ color: "#333333" }} variant="body2" gutterBottom>
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
          <Typography variant="body2" gutterBottom>
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
          <Typography variant="body2" gutterBottom>
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
    </Box>
  );
}

export default Footer;
