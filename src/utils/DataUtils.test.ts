import { translateChartData } from "./DataUtils";

const testData = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

describe("DataUtils", () => {
  it("translateChartData", () => {
    const result = translateChartData(testData);

    expect(result).toEqual({ 2: 5, 4: 1, 5: 3, 9: 1 });
  });
});
