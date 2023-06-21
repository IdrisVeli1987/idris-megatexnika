import { Button, Container, Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components/PageContainer";

export const Home = () => {
  return (
    <PageContainer>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="rgba(89, 108, 114, 1)"
            >
              Ağır texnikanızı bizdən satın alın
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Typography>
            <Button variant="outlined">Ətraflı</Button>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
