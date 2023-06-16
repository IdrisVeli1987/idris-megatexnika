import { Box, Button, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MegaTexnikaLogo from "../../assets/logo.png";
export const Header = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#rgba(255, 192, 31, 1)", py: 2 }}>
        <Container>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography>
              +994(12) 123 45 67 | Fətəli Xan Xoyski 111A, Bakı Azərbaycan
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <img
            src={MegaTexnikaLogo}
            alt="MegaTexnikaLogo"
            style={{ objectFit: "contain" }}
          />
          <Stack flexDirection="row" gap={1}>
            <Typography component='a' href='#'>Əsas səhifə</Typography>
            <Typography component='a' href='#'>Haqqımızda</Typography>
            <Typography component='a' href='#'>Texnikalar</Typography>
            <Typography component='a' href='#'>İcarə şərtləri</Typography>
            <Typography component='a' href='#'>Blog</Typography>
            <Typography component='a' href='#'>Əlaqə</Typography>
          </Stack>
          <Stack flexDirection="row" gap={1}>
            <Typography>AZ</Typography>
            <Typography>EN</Typography>
            <Typography>RU</Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
