import { useScaffoldWriteContract } from "../scaffold-eth";
import { CONTRACT } from "~~/utils/constants";

export const useWriteFuzzContractHook = () => {
  const { writeContractAsync: writeFuzzBettingAsync } = useScaffoldWriteContract({ contractName: CONTRACT });

  const betOnAgent = (isAgent: boolean, amount: number) => {
    return writeFuzzBettingAsync({
      functionName: betOnAgent.name,
      args: [isAgent, amount],
    });
  };

  const voteForPrompt = (promptId: string, amount: number) => {
    return writeFuzzBettingAsync({
      functionName: voteForPrompt.name,
      args: [promptId, amount],
    });
  };

  return {
    betOnAgent,
    voteForPrompt,
  };
};
