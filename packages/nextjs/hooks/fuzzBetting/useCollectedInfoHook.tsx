import { useEffect, useState } from "react";
import { useReadFuzzContractHook } from "./useReadFuzzContractHook";
import { IGamePrompt } from "~~/utils/constants";

export const useCollectedInfoHook = () => {
  const [filteredGames, setFilteredGames] = useState<number[]>([]);
  const [isTotalAcumLoading, setIsTotalAcumLoading] = useState(false);
  const { getTotalAcumulated, useGetGamePrompts } = useReadFuzzContractHook();

  const formattedTotalAcumulated = getTotalAcumulated.data
    ? (Number(getTotalAcumulated.data) / 10 ** 18).toFixed(2)
    : "0";

  const gamePrompt = useGetGamePrompts(1);

  useEffect(() => {
    if (gamePrompt.data) {
      const gameIds = (gamePrompt.data as IGamePrompt[])?.map(prompt => Number(prompt?.gameId));
      setFilteredGames(gameIds);
    }
  }, [gamePrompt]);

  useEffect(() => {
    setIsTotalAcumLoading(getTotalAcumulated.isFetching && !getTotalAcumulated.isFetched);
  }, [getTotalAcumulated]);

  return {
    filteredGames,
    isTotalAcumLoading,
    formattedTotalAcumulated,
    gamePrompt,
  };
};
