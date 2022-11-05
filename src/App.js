import { Button, VStack, Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <VStack mt="67px" spacing="30px">
        <Box bg="#D9D9D9" w="256px" h="283px"></Box>
        <Heading>NUOTIO</Heading>
        <Button
          colorScheme={"teal"}
          size="lg"
          borderRadius="20"
          w="223px"
          h="48px"
        >
          Sign in
        </Button>
        <Button
          colorScheme={"teal"}
          size="lg"
          borderRadius="20"
          w="223px"
          h="48px"
        >
          Sign up
        </Button>
      </VStack>
    </div>
  );
}

export default App;
