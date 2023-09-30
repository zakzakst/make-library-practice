import { getTaxDataFromPrice } from './lib/index'

const defaultText = '入力欄に商品金額を入力してください'
const inputEl = <HTMLInputElement>document.getElementById('input')
const resultEl = <HTMLParagraphElement>document.getElementById('result')

const init = () => {
  updateText('')

  inputEl.addEventListener('change', () => {
    updateText(inputEl.value)
  })
}

const updateText = (value: string) => {
  // 入力欄が空の場合、初期文言を設定
  if (value === '') {
    resultEl.innerText = defaultText
    return
  }

  const inputNum = Number(value)
  // 入力値のバリデーション
  if (typeof inputNum !== 'number' || inputNum < 1) {
    resultEl.innerText = '1以上の整数を入力してください'
  } else if (!Number.isInteger(inputNum)) {
    resultEl.innerText = '整数を入力してください'
  } else {
    const taxData = getTaxDataFromPrice(inputNum)
    resultEl.innerText = `商品金額${taxData.price}円のとき、消費税は${taxData.tax}円で総額は${taxData.sum}円です`
  }
}

init()
