const { maxSubarraySum } = require("../src/nomor2");

describe("Soal Nomor 2", () => {
  it("Harus mengembalikan jumlah maksimumnya 700 dengan panjang 2 dari array [100, 200, 300, 400]", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  });

  it("Harus mengembalikan jumlah maksimumnya 39 dengan panjang 4 dari array [1, 4, 2, 10, 23, 3, 1, 0, 20]", () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  });

  it("Harus mengembalikan jumlah maksimumnya 5 dengan panjang 2 dari array [-3, 4, 0, -2, 6, -1]", () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });
});
