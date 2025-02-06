import { useEffect, useState } from "react";
import { useReadFuzzContractHook } from "./useReadFuzzContractHook";
import { IGamePrompt } from "~~/utils/constants";

interface IGameCollectedInfo {
  gameId: number;
  votes: number;
}

export const useCollectedInfoHook = () => {
  const [filteredGames, setFilteredGames] = useState<IGameCollectedInfo[]>([]);
  const [isTotalAcumLoading, setIsTotalAcumLoading] = useState(false);
  const { getTotalAcumulated, useGetGamePrompts } = useReadFuzzContractHook();

  const formattedTotalAcumulated = getTotalAcumulated.data
    ? (Number(getTotalAcumulated.data) / 10 ** 18).toFixed(2)
    : "0";

  const gamePrompt = useGetGamePrompts(BigInt(1));

  useEffect(() => {
    if (gamePrompt.data) {
      const gameCollection: IGameCollectedInfo[] = (gamePrompt.data as IGamePrompt[])?.map(prompt => ({
        gameId: Number(prompt?.gameId),
        votes: Number(prompt?.votes) / 10 ** 18,
      }));
      if (gameCollection.length > 0 && JSON.stringify(gameCollection) !== JSON.stringify(filteredGames)) {
        setFilteredGames(gameCollection);
      }
    }
  }, [gamePrompt, filteredGames]);

  useEffect(() => {
    setIsTotalAcumLoading(getTotalAcumulated.isFetching && !getTotalAcumulated.isFetched);
  }, [getTotalAcumulated]);

  return {
    filteredGames,
    isTotalAcumLoading,
    formattedTotalAcumulated,
  };
};
