import { useScaffoldReadContract } from "../scaffold-eth";
import { CONTRACT } from "~~/utils/constants";

export const useReadFuzzContractHook = () => {
  const useGetPrompt = (promptId: bigint) => {
    return useScaffoldReadContract({
      contractName: CONTRACT,
      functionName: "getPrompt",
      args: [promptId],
    });
  };

  const getCurrentGamePrompts = useScaffoldReadContract({
    contractName: CONTRACT,
    functionName: "getCurrentGamePrompts",
    args: [],
  });

  const useGetGamePrompts = (promptId: bigint) => {
    return useScaffoldReadContract({
      contractName: CONTRACT,
      functionName: "getGamePrompts",
      args: [promptId],
    });
  };

  const getTotalAcumulated = useScaffoldReadContract({
    contractName: CONTRACT,
    functionName: "getTotalAcumulated",
    args: [],
  });

  const useGetUserContribution = () => {
    return useScaffoldReadContract({
      contractName: CONTRACT,
      functionName: "getUserContribution",
      args: [],
    });
  };

  return {
    useGetPrompt,
    useGetGamePrompts,
    getCurrentGamePrompts,
    getTotalAcumulated,
    useGetUserContribution,
  };
};
