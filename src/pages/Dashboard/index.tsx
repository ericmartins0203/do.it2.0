import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Form/SearchBox";
import { Card } from "../../components/Card";

export const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
        gar={10}
        paddingX="8"
        mt="8"
      >
        {[1, 2, 3, 4, 5, 6].map((_) => (
          <Card />
        ))}
      </Grid>
    </Box>
  );
};
