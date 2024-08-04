// src/StyledTextField.js
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff", // Background color
    "& fieldset": {
      borderColor: "#ccc", // Border color
    },
    "&:hover fieldset": {
      borderColor: "#aaa", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#aaa", // Border color when focused
    },
    "& input": {
      color: "#000", // Text color
    },
    "& input::placeholder": {
      color: "#666", // Placeholder color
    },
  },
}));

export default StyledTextField;
