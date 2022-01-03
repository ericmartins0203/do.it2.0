import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface NotFoundProps {
  isTaskDetailOpen: boolean;
  onTaskDetailClose: () => void;
  selectedTask: Task;
  taskNotFound: string;
}

export const NotFound = ({
  selectedTask,
  isTaskDetailOpen,
  onTaskDetailClose,
  taskNotFound,
}: NotFoundProps) => {
  return (
    <>
      <ModalTaskDetail
        task={selectedTask}
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
      />
      <Box>
        <Header />
        <SearchBox />
        <Center mt="4" textAlign="center" display="flex" flexDir="column">
          <Heading>Não encontramos resultados para:</Heading>
          <Text fontSize="xl" color="gray.300" fontWeigth="bold">
            {taskNotFound}
          </Text>
          <Box
            mt="6"
            w={["80%", "40%"]}
            padding="6"
            boxShadow="base"
            bg="white"
          >
            <Stack>
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                h="20px"
                borderRadius="20px"
                width="80%"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                h="20px"
                borderRadius="20px"
                width="60%"
              />
            </Stack>
            <Stack mt="8">
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                h="15px"
                borderRadius="20px"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                h="15px"
                borderRadius="20px"
              />
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};
