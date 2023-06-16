import { Stack, Typography } from "@mui/material";

export const Header = ({}) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#rgba(255, 192, 31, 1)" }}>
        <Container>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography>
              +994(12) 123 45 67 | Fətəli Xan Xoyski 111A, Bakı Azərbaycan
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
