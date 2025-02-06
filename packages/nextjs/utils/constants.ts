import { Hex } from "viem";

export const CONTRACT = "FuzzBetting";
export const FUZZ_BETTING_ADDRESS = "0x9b9379dECaee972a47A1A80B068b9D87ba074ffe";
export const MY_TOKEN_ADDRESS = "0xcF1D868D3a33d781b3eD32D0A6800F18EC4cBe0C";
export interface IGamePrompt {
  creator: string | Hex;
  exists: boolean;
  gameId: bigint;
  isAgentA: boolean;
  votes: bigint;
}
