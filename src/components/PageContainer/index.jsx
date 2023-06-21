import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ my: 5 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
