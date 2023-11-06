import type { CurrencyData } from 'lib/entities/currency'
import { createGetById } from './methods'

export const currencyAdapter = {
  getById: createGetById<CurrencyData>('currency')
}
