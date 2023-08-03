const { sumEvenNumbers } = require("../src/nomor3");

describe("Soal Nomor 3", () => {
  it("Harus mendapatkan jumlah semua bilangan genap dalam nested objek", () => {
    const input1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(sumEvenNumbers(input1)).toEqual(6);

    const input2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };
    expect(sumEvenNumbers(input2)).toEqual(12);
  });
});
