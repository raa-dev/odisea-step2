import { Hex } from "viem";

export const CONTRACT = "FuzzBetting";
export interface IGamePrompt {
  creator: string | Hex;
  exists: boolean;
  gameId: bigint;
  isAgentA: boolean;
  votes: bigint;
}
