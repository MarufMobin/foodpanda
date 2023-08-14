import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ebebeb",
        borderBottom: "1px solid #ebebeb",
        width: { xs: "98%", sm: "95%", md: "90%" },
        paddingTop: 8,
        paddingBottom: 8,
        margin: "auto",
      }}
    >
      <Box>
        <img
          src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1692004197~exp=1692004797~hmac=1de691f9d5f0aaaaaff12578f12b7e0320b7b4f5d6e31175abc55a7fc646aaf0"
          alt=""
        />
      </Box>
      <span>
        <Image />
      </span>
    </Box>
  );
}

export default Footer;
