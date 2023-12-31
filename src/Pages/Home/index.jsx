import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { PageContainer } from "../../components/PageContainer";
import Ekskavator from "../../assets/Home_image 1.png";
import Avtokranlar from "../../assets/Kateqoriyalar/Avtokranlar.png";
import Traktorlar from "../../assets/Kateqoriyalar/Traktorlar.png";
import Qaldirici_sebetler from "../../assets/Kateqoriyalar/Qaldirici_sebetler.png";
import Forkliftlər from "../../assets/Kateqoriyalar/Forkliftlər.png";
import Katok from "../../assets/Kateqoriyalar/Katok.png";
import Shacman from "../../assets/Kateqoriyalar/Shacman.png";
import Bobcat from "../../assets/Kateqoriyalar/Bobcat.png";
import Pompa from "../../assets/Kateqoriyalar/Pompa.png";
import { CategoryCard } from "../../components/CategoryCard";
import { PaperImg } from "../../components/PaperImg";
import forklift from "../../assets/sinaq/forklift.png";
import belaz from "../../assets/sinaq/belaz.png";

const texnikalar = [
  {
    id: 0,
    title: "Avtokranlar",
    img: Avtokranlar,
  },
  {
    id: 1,
    title: "Traktorlar",
    img: Traktorlar,
  },
  {
    id: 2,
    title: "Qaldırıcı səbətlər",
    img: Qaldirici_sebetler,
  },
  {
    id: 3,
    title: "Forkliftlər",
    img: Forkliftlər,
  },
  {
    id: 4,
    title: "Katok",
    img: Katok,
  },
  {
    id: 5,
    title: "Shacman",
    img: Shacman,
  },
  {
    id: 6,
    title: "Bobcat",
    img: Bobcat,
  },
  {
    id: 7,
    title: "Pompa",
    img: Pompa,
  },
];

export const Home = () => {
  return (
    <PageContainer>
      <Container className="background_radiuses_texture">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="rgba(89, 108, 114, 1)"
             >
              Ağır texnikanızı bizdən satın alın
            </Typography>
            <Typography my={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Typography>
            <Button variant="outlined">Ətraflı</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaperImg src={Ekskavator} />
          </Grid>
          <Grid item xs={12}>
            <Typography my={2} variant="h6" fontWeight="bold">
              Kateqoriyalar
            </Typography>
          </Grid>
          <Grid item container my={2} spacing={2} justifyContent="center">
            {texnikalar.map((texnika) => {
              return (
                <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                  <CategoryCard title={texnika.title} src={texnika.img} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end" justifyContent="space-between">
          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <PaperImg src={forklift} />
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <PaperImg src={belaz} />
            <Box pl={5} pt={5}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="rgba(89, 108, 114, 1)"
              >
                Mega Texnika-da sınaqdan keçirilmiş texnikalar
              </Typography>
              <Typography my={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
              <Button variant="outlined">Haqqımızda</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
