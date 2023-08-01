const { sorting } = require("../src/nomor1");

describe("Soal Nomor 1", () => {
  it("Harus mengurutkan array of number dari yang terbesar ke yang terkecil", () => {
    expect(sorting([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
  });
});
