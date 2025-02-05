import { useCollectedInfoHook } from "~~/hooks/fuzzBetting/useCollectedInfoHook";

export const CollectedLayout = () => {
  const { filteredGames, isTotalAcumLoading, formattedTotalAcumulated, gamePrompt } = useCollectedInfoHook();

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-[34px] font-bold">Tokens Collected</h1>
      {filteredGames?.map((gameId: number) => (
        <div key={gameId}>
          <h2 className="text-[21px]">Game no. {gameId}</h2>
          <div>
            <div>
              <h4>Summary</h4>
              { isTotalAcumLoading && <p>Loading...</p>}
              {!isTotalAcumLoading && <p>{formattedTotalAcumulated} tokens</p>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
