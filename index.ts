function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  let rank = 1;
  const rankWithPriority = [
    {
      score: ranked[0],
      rank: 1,
    },
  ];
  for (let i = 1; i < ranked.length; i++) {
    if (ranked[i] < ranked[i - 1]) {
      rank++;
    }
    rankWithPriority.push({
      score: ranked[i],
      rank,
    });
  }

  return player.map((p) => {
    let i = 0;
    while (i < rankWithPriority.length) {
      const r = rankWithPriority[i];
      if (r.score < p) {
        break;
      }
      i++;
    }

    if (i === rankWithPriority.length) {
      return rankWithPriority[i - 1].rank + 1;
    }

    if (i === 0) {
      return rankWithPriority[i].rank;
    }

    return rankWithPriority[i - 1].rank;
  });
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
