import { Box, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I reset my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reset your password by going to the Settings page and
            clicking on "Change Password."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I contact customer support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reach out to our support team via the Help section or email
            us at support@example.com.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I export my data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, go to the Reports section and click on “Export Data” to
            download your information in CSV or PDF format.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I delete my account?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can request account deletion from the profile settings page.
            Please note this action is irreversible.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How often is data updated on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Data updates in real-time or every minute depending on the
            feature you're using
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
