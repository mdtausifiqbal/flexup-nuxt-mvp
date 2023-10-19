import { OrderData } from 'entities/order'
import { OrderAdapter } from '../interfaces'

import axios from './myAxios'

export const createOrderAdapterJsonServer = (accountId: string): OrderAdapter => {
  const getAll = async (): Promise<OrderData[]> => {
    const clientOrders = (await axios.get<OrderData[]>(`/order?clientAccountId=${accountId}`)) ?? []
    const supplierOrders =
      (await axios.get<OrderData[]>(`/order?supplierAccountId=${accountId}`)) ?? []
    // console.log('clientOrders', clientOrders)
    // console.log('supplierOrders', supplierOrders)
    return [...clientOrders, ...supplierOrders]
  }
  const getById = async (orderId: string): Promise<OrderData | undefined> => {
    const result = (await getAll()) ?? []
    return result.find((order) => order.id === orderId)
  }
  const getByProperty = async (property: keyof OrderData, value: unknown): Promise<OrderData[]> => {
    const result = (await getAll()) ?? []
    return result.filter((order) => order[property] === value)
  }

  return {
    getAll,
    getById,
    getByProperty
  }
}
