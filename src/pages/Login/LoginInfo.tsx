import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary-purple.svg";

export const LoginInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      ></Image>
      <Heading as="h1">O jeito fácil, grátis</Heading>
      <Text maxWidth="350px">
        Flexível e atrativo de genenciar
        <b>seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
};
