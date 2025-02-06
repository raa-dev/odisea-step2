import { useCollectedInfoHook } from "~~/hooks/fuzzBetting/useCollectedInfoHook";

export const CollectedLayout = () => {
  const { filteredGames, isTotalAcumLoading, formattedTotalAcumulated } = useCollectedInfoHook();

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-[34px] font-bold">Tokens Collected</h1>
      {filteredGames?.map(({ gameId, votes }) => (
        <div key={gameId}>
          <h2 className="text-[21px]">Game no. {gameId}</h2>
          <div>
            <h3 className="text-[21px] font-bold">Summary</h3>
            {isTotalAcumLoading && <p>Loading...</p>}
            {!isTotalAcumLoading && (
              <span>
                <p>{formattedTotalAcumulated} tokens</p>
                <p>{votes} votes</p>
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
