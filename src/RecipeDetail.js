// src/RecipeDetail.js
import React from "react";
import { useLocation } from "react-router-dom";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
} from "@mui/material";

const RecipeDetail = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe)
    return <Typography variant="h6">No recipe data found.</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {recipe.recipe.label}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={recipe.recipe.image}
          alt={recipe.recipe.label}
        />
        <CardContent>
          <Typography variant="body1" paragraph>
            {recipe.recipe.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          <List>
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>{ingredient.text}</ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="secondary"
            href={recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Recipe
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
