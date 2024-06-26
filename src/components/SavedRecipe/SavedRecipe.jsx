import { Container, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./SavedRecipe.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SavedRecipe({ savedRecipe }) {
  return (
    <>
      <Container className={styles.header} maxWidth="xl">
        <img
          className={styles.image}
          src={savedRecipe.recipe_data.image}
          alt="recipe-img"
        />
        <div className="titleWrapper">
          <p className={styles.title}>{savedRecipe.title}</p>
        </div>
      </Container>

      <Box>
        <Grid
          className={styles.content}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid className={styles.ingredients} item xs={6} md={3}>
            <p className={styles.contentHeader}>Ingredients:</p>
            <ul>
              {savedRecipe.recipe_data.ingredients.map((ingredient, idx) => (
                <li
                  key={idx}
                >{`${ingredient.name}: ${ingredient.amount.metric.value} ${ingredient.amount.metric.unit}`}</li>
              ))}
            </ul>
          </Grid>
          <Grid className={styles.instructions} item xs={6} md={6}>
            <p className={styles.contentHeader}>Instructions:</p>
            {savedRecipe.recipe_data.instructions.map((element, idx) => (
              <section key={idx}>
                <p className={styles.contentSubheader}>{element.name}</p>
                <ol>
                  {element.steps.map((step, idx) => (
                    <li key={idx} className={styles.stepsWrapper}>
                      <p>{step.step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
