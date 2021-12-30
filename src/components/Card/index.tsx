import {
  Box,
  Flex,
  Heading,
  HStack,
  Center,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const Card = () => {
  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "transformY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="7"
      w={["330px", "auto"]}
    >
      <Flex justify="space-between">
        <Heading as="h1" size="md"></Heading>
        <HStack spacing="4">
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
          >
            <FaTrash color={theme.colors.gray[300]} />
          </Center>
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
          >
            <FaCheck color="gray.200" />
          </Center>
        </HStack>
      </Flex>
      <Box w="100%" marginTop="4">
        <Text>Start study through Kenzie app, for 1 hour and a half</Text>
        <Progress colorScheme="purple" mt="2.5" value={10}></Progress>
        <Text color="gray.200" mt="3">
          7 march 2021
        </Text>
      </Box>
    </Box>
  );
};
