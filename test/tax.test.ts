import { expect, test } from "vitest";
import { getTaxDataFromTotal, getTaxDataFromPrice } from "../src/modules/tax";

// 「総額から消費税データを取得」関数のテスト
test("総額110円の商品金額は100円", () => {
  expect(getTaxDataFromTotal(110).price).toBe(100);
});

// 「商品金額から消費税データを取得」関数のテスト
test("商品金額100円の総額は110円", () => {
  expect(getTaxDataFromPrice(100).sum).toBe(110);
});
