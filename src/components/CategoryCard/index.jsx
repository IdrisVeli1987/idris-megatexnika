import { Paper, Typography } from "@mui/material";

export const CategoryCard = ({ title, src }) => {
  return (
    <Paper elevation={12} sx={{ maxWidth: "300px" }}>
      <Typography pt={4} component="h4" fontWeight="bold" textAlign="center">
        {title}
      </Typography>
      <img style={{ width: "100%", objectFit: "contain" }} src={src} alt="" />
    </Paper>
  );
};
