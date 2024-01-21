import {
  Card,
  CardBody,
  CardFooter,
  Image,
  AspectRatio,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";

function SetFirstLetterWordCaptital(props) {
  let str = String(props.dishNames);
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return <span> {str.join(" ")}</span>;
}

export const RecipeCard = ({
  recipe,
  clickFn,
  label,
  image,
  mealType,
  dishType,
  cautions,
  dietLabels,
  healthLabels,
}) => {
  return (
    <Card
      maxW="sm"
      style={{ backgroundColor: "#FFFFFF" }}
      onClick={() => clickFn(recipe)}
    >
      <center>
        <CardBody>
          <AspectRatio ratio={1.85 / 1}>
            <Image src={image} alt={label} borderRadius="lg" />
          </AspectRatio>
          <Text mt="5" mb="3" textTransform="uppercase">
            {mealType}
          </Text>
          <Heading mt="5" mb="5" fontSize="24">
            {label}
          </Heading>
          {healthLabels.includes("Vegetarian") && (
            <Tag
              m="3"
              bg="#E9D8FD"
              color="#44337A"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Vegetarian
            </Tag>
          )}
          {healthLabels.includes("Vegan") && (
            <Tag
              m="3"
              bg="#E9D8FD"
              color="#44337A"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Vegan
            </Tag>
          )}
          {dietLabels && (
            <div>
              {dietLabels.map((dietLabel) => (
                <Tag
                  m="3"
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
          <Text mb="3">
            Dish:
            <span style={{ fontWeight: "bold" }}>
              <SetFirstLetterWordCaptital dishNames={dishType} />
            </span>
          </Text>
          {cautions && (
            <div>
              <Text mt="3">Cautions:</Text>
              {cautions.map((caution) => (
                <Tag
                  m="3"
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
        </CardBody>
      </center>
      <CardFooter></CardFooter>
    </Card>
  );
};
