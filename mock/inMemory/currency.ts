import { Currency } from '../../api/core/entities/currency'

export const euroCurrency: Currency = {
  id: 'EUR',
  name: 'Euro',
  symbol: '€',
  precision: 2
}

export const dollarCurrency: Currency = {
  id: 'USD',
  name: 'Dollar',
  symbol: '$',
  precision: 2
}

export const poundCurrency: Currency = {
  id: 'GBP',
  name: 'Pound',
  symbol: '£',
  precision: 2
}

export const yenCurrency: Currency = {
  id: 'JPY',
  name: 'Yen',
  symbol: '¥',
  precision: 0
}

export const allCurrencyDatas: Currency[] = [
  euroCurrency,
  dollarCurrency,
  poundCurrency,
  yenCurrency
]
