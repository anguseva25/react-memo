import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";

export function GamePage({ otherPairsCount }) {
  const { pairsCount = otherPairsCount } = useParams();

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5}></Cards>
    </>
  );
}
