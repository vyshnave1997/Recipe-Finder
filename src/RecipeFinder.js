// src/RecipeFinder.js
import React, { useState } from "react";
import StyledTextField from "./StyledTextField"; // Use the updated StyledTextField if created
import StyledCard from "./StyledCard";
import {
  Button,
  CircularProgress,
  Typography,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { fetchRecipes } from "./api";

const RecipeFinder = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchByName = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchRecipes(query, "");
      setRecipes(data.hits);
    } catch (err) {
      setError("Failed to fetch recipes");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px", padding: "16px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Recipe Finder
      </Typography>

      {/* Search by Recipe Name */}
      <Typography variant="h6" gutterBottom align="center">
        Search by Recipe Name
      </Typography>
      <StyledTextField
        label="Enter recipe name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{ style: { textAlign: "center" } }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearchByName}
        disabled={loading}
        fullWidth
        style={{ marginTop: "16px" }}
      >
        Search by Name
      </Button>

      {loading && (
        <CircularProgress style={{ display: "block", margin: "16px auto" }} />
      )}
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}

      {/* Recipe Cards */}
      <Grid container spacing={3} justifyContent="center">
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h6" component="div">
                    {recipe.recipe.label}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" noWrap>
                    {recipe.recipe.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={recipe.recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    style={{ marginTop: "8px" }}
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeFinder;
