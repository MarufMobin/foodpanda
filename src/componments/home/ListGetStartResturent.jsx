import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

function ListGetStartResturent() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 27,
          fontWeight: 500,
          marginY: 4,
          marginTop: 7,
          marginLeft: 5,
        }}
      >
        You prepare the food, we handle the rest
      </Typography>

      <CardMedia
        component="img"
        sx={{ width: "100%", height: "60vh" }}
        image="https://images.deliveryhero.io/image/foodpanda/home-vendor-bd.jpg?width=1200&height=768"
        alt="Paella dish"
      />

      <Container sx={{ mt: -20 }}>
        {/* width: { xs: "90%", sm: "95%", md: "90%" } */}
        <Box
          sx={{
            width: { xs: "90%", sm: "60%", md: "55%" },
            backgroundColor: "white",
            position: "relative",
            padding: 3,
            borderRadius: 4,
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 500, marginY: 2 }}>
            List your restaurant or shop on foodpanda
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontWeight: 400 }}
            variant="subtitle1"
          >
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 400, marginY: 2 }}>
            It is simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas – in
            a heartbeat! Interested? Lets start our partnership today!
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 400, marginY: 2 }}>
            Interested? Lets start our partnership today!
          </Typography>
          <Button
            sx={{ backgroundColor: "#e21b70", color: "white" }}
            variant="contained"
          >
            Get started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ListGetStartResturent;
