// src/StyledCard.js
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px", // Adjust the border radius as needed
  boxShadow: theme.shadows[3], // Customize shadow based on Material-UI theme
  overflow: "hidden", // Ensure content doesn't overflow
  transition: "transform 0.3s ease-in-out", // Smooth transition effect
  "&:hover": {
    transform: "scale(1.05)", // Slightly enlarge the card on hover
  },
}));

export default StyledCard;
