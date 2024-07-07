import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreeshots";

interface props {
  gameId: number;
}

const GameScreeshots = ({ gameId }: props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return;

  if (error) throw error;
  return (
    <SimpleGrid
      spacing={4}
      columns={{
        md: 2,
        sm: 1,
      }}
    >
      {data?.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreeshots;
