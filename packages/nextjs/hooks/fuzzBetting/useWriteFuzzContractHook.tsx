import { useScaffoldWriteContract } from "../scaffold-eth";
import { CONTRACT } from "~~/utils/constants";

export const useWriteFuzzContractHook = () => {
  const { writeContractAsync: writeFuzzBettingAsync } = useScaffoldWriteContract({ contractName: CONTRACT });

  const betOnAgent = (isAgent: boolean, amount: number) => {
    return writeFuzzBettingAsync({
      functionName: "betOnAgent",
      args: [isAgent, BigInt(amount)],
    });
  };

  const voteForPrompt = (promptId: number, amount: number) => {
    return writeFuzzBettingAsync({
      functionName: "voteForPrompt",
      args: [BigInt(promptId), BigInt(amount)],
    });
  };

  return {
    betOnAgent,
    voteForPrompt,
  };
};
