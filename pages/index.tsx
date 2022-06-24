import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { user, isLoading } = useMe();
  if (isLoading) {
    return null;
  }
  return (
    <GradientLayout
      roundImage
      color="purple"
      subtitle="profile"
      title={`${user.firstName} ${user.lastName}`}
      description={`${user.playlistsCount} Public Playlists`}
      image="https://lh3.googleusercontent.com/a-/AOh14Gh5PgHg9okrWX0k1QsHLaGnd_k2DIkoArlwaDlA=s192-c-rg-br100"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="medium">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => {
            return (
              <Box paddingX="10px" width="20%">
                <Box
                  bg="gray.900"
                  borderRadius="4px"
                  padding="15px"
                  width="100%"
                >
                  <Image
                    src="https://placekitten.com/300/300"
                    borderRadius="100%"
                  />
                  <Box marginTop="20px">
                    <Text fontSize="large">{artist.name}</Text>
                    <Text fontSize="xs">Artist</Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
