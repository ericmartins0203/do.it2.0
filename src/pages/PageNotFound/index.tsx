import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import NotFoundImg from "../../assets/notfound.svg";

export const PageNotFound = () => {
  const history = useHistory();
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="space-evenly"
      h={["auto", "auto", "100vh", "100vh"]}
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      <Box mt="4">
        <Heading>Ooops!</Heading>
        <Text mt="4">
          Não encontramos a página que você procurou, <br />{" "}
          <b>vamos procurar novamente.</b>
        </Text>
        <Button
          bg="red.600"
          h="60px"
          color="white"
          w="100%"
          mt="4"
          _hover={{ bg: "red.700" }}
          onClick={() => history.push("/")}
        >
          Ir para minhas tarefas
        </Button>
      </Box>
      <Image src={NotFoundImg} />
    </Flex>
  );
};
