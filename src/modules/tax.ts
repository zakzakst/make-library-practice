import { TaxData } from '../models/tax'

// デフォルトの消費税率
const DEFAULT_TAX_RATE = 0.1

/**
 * 総額から消費税データを取得
 * @param sum 総額
 * @param rate 消費税率
 * @returns 消費税データ
 */
export const getTaxDataFromTotal = (
  sum: number,
  rate: number = DEFAULT_TAX_RATE
): TaxData => {
  // NOTE: 丸め誤差の対応が難しいので一旦ceilで対応
  const price = Math.ceil(sum / (1 + rate))
  const fee = sum - price
  return {
    price,
    fee,
    sum,
  }
}

/**
 * 商品金額から消費税データを取得
 * @param price 商品金額
 * @param rate 消費税率
 * @returns 消費税データ
 */
export const getTaxDataFromPrice = (
  price: number,
  rate: number = DEFAULT_TAX_RATE
): TaxData => {
  // NOTE: 丸め誤差の対応が難しいので一旦floorで対応
  const sum = Math.floor(price * (1 + rate))
  const fee = sum - price
  return {
    price,
    fee,
    sum,
  }
}
