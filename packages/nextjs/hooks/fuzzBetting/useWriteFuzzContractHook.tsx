import { useScaffoldWriteContract } from "../scaffold-eth";
import { CONTRACT } from "~~/utils/constants";

export const useWriteFuzzContractHook = () => {
  const { writeContractAsync: writeFuzzBettingAsync } = useScaffoldWriteContract({ contractName: CONTRACT });

  const useBetOnAgent = () => {
    return writeFuzzBettingAsync({
      functionName: "betOnAgent",
      args: [],
    });
  };

  const useVoteForPrompt = (promptId: string, amount: number) => {
    return writeFuzzBettingAsync({
      functionName: "voteForPrompt",
      args: [promptId, amount],
    });
  };

  return {
    useBetOnAgent,
    useVoteForPrompt,
  };
};
