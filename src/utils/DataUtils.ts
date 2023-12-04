import { isNaN } from "lodash";

export const translateChartData = (data: number[]) => {
  const counts: { [index: string]: number } = {};

  for (const num of data) {
    if (!isNaN(num)) counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return counts;
};
