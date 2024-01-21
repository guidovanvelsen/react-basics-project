import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Grid,
  Container,
  Tag,
  Box,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Grid>
        <Button m="5" onClick={() => clickFn()}>
          Back to recipes
        </Button>
      </Grid>
      <Image
        boxSize="100%"
        h="350px"
        mb="10"
        objectFit="cover"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
      />

      <SimpleGrid spacing={3} minChildWidth="400px">
        <Container>
          <Text mt="2" mb="2" textTransform="uppercase">
            {recipe.recipe.mealType}
          </Text>
          <Heading size="md" mt="2" mb="2">
            {recipe.recipe.label}
          </Heading>
          <Text>Total cooking time: {recipe.recipe.totalTime} minutes</Text>
          <Text>Servings: {recipe.recipe.yield}</Text>
          <Heading size="sm" mt="4" mb="2">
            Ingredients:
          </Heading>
          <List>
            {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
              <ListItem key={index}>{ingredientLine}</ListItem>
            ))}
          </List>
        </Container>

        <Container>
          {recipe.recipe.healthLabels && (
            <div>
              <Text mt="2" mb="2">
                Health labels:
              </Text>
              {recipe.recipe.healthLabels.map((healthLabel) => (
                <Tag
                  m="1"
                  bg="#E9D8FD"
                  color="#44337A"
                  fontWeight="bold"
                  textTransform="uppercase"
                  key={healthLabel}
                >
                  {healthLabel}
                </Tag>
              ))}
            </div>
          )}

          {recipe.recipe.dietLabels && (
            <div>
              <Text mt="2" mb="2">
                Diet:
              </Text>
              {recipe.recipe.dietLabels.map((dietLabel) => (
                <Tag
                  m="1"
                  bg="#C6F6D5"
                  color="#22543D"
                  fontWeight="bold"
                  textTransform="uppercase"
                  key={dietLabel}
                >
                  {dietLabel}
                </Tag>
              ))}
            </div>
          )}

          {recipe.recipe.cautions && (
            <div>
              <Text mt="2" mb="2">
                Cautions:
              </Text>
              {recipe.recipe.cautions.map((caution) => (
                <Tag
                  m="1"
                  bg="#FED7D7"
                  color="#822727"
                  fontWeight="bold"
                  textTransform="uppercase"
                  key={caution}
                >
                  {caution}
                </Tag>
              ))}
            </div>
          )}

          <Text mt="2" mb="2">
            Total nutrients:
          </Text>
          <Flex mb="2">
            <Box mr="10">
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Calories
              </Text>
            </Box>
            <Box mr="10">
              {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "}
              {recipe.recipe.totalNutrients.CHOCDF.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Carbs
              </Text>
            </Box>
            <Box mr="10">
              {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}{" "}
              {recipe.recipe.totalNutrients.PROCNT.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Protein
              </Text>
            </Box>
            <Box>
              {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}{" "}
              {recipe.recipe.totalNutrients.FAT.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Fat
              </Text>
            </Box>
          </Flex>
          <Flex mb="2">
            <Box mr="10">
              {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}{" "}
              {recipe.recipe.totalNutrients.CHOLE.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Cholesterol
              </Text>
            </Box>
            <Box>
              {Math.round(recipe.recipe.totalNutrients.NA.quantity)}{" "}
              {recipe.recipe.totalNutrients.NA.unit}
              <Text fontWeight="bold" textTransform="uppercase">
                Sodium
              </Text>
            </Box>
          </Flex>
        </Container>
      </SimpleGrid>
    </>
  );
};
