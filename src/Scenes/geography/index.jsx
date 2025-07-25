import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../Components/GeographyChart";
import Header from "../../Components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ height: "100vh", width: "100vw", m: 0, p: 0 }}>
      <Box sx={{ p: 2, pb: 0 }}>
        <Header title="Geography" subtitle="Simple Geography Chart" />
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 76px)", // 76px can be changed: Header height (roughly)
          width: "100vw",
          border: `1px solid ${colors.grey[100]}`,
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
