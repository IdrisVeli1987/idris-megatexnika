import { Paper } from "@mui/material";

export const PaperImg = ({ src }) => {
  return (
    <Paper xs={{ p: 2 }}>
      <img style={{ width: "100%" }} src={src} alt="Ekskavator" />
    </Paper>
  );
};
