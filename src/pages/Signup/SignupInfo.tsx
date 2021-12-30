import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";
import LogoSecondary from "../../assets/logo-secondary-purple.svg";
import SimpleIcon from "../../assets/SimpleIcon.svg";

export const SignupInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["10px", "20px", "150px"]}
    >
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      ></Image>
      <VStack spacing="14" mt={["10px", "0"]}>
        <Flex w="100%">
          <Center borderRadius="5px" bg="White" w="50px" h="50px">
            <FaForward color={theme.colors.purple["800"]} size={25} />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Agilidade </Heading>
            <Text>Agilize seus projetos com rapidez e muita pergormance</Text>
          </Box>
        </Flex>
        <Flex w="100%">
          <Center borderRadius="5px" bg="White" w="50px" h="50px">
            <Image src={SimpleIcon} w="25px" />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Simplicidade </Heading>
            <Text>Armazene seus projetos em uma interface altamente usual</Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
