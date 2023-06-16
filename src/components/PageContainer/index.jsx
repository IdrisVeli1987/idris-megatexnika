import { Footer } from "../Footer";
import { Header } from "../Header";

export const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
};
