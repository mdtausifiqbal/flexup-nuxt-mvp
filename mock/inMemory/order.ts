import type { Order } from 'entities/order'
import * as items from './item'
import * as tranches from './tranche'

// Orders with raw data only
export const commercialOrderData: Order = {
  id: 'commercialOrder',
  supplierAccountId: 'flexupAccount',
  clientAccountId: 'pizzaDOroAccount',
  name: 'T blues & rouges',
  nature: 'commercial',
  amountInclTax: 253.1
}

export const commercialOrder: Order = {
  ...commercialOrderData,
  items: items.itemsForCommercialOrder,
  tranches: tranches.tranchesForcommercialOrder,
  amountExclTax: 221,
  taxAmount: 32.1,
  amountInclTax: 253.1,
  averageTaxRate: 0.145249
}

export const orderWithRebateData: Order = {
  id: 'orderWithRebate',
  supplierAccountId: 'cosysAccount',
  clientAccountId: 'doMazyAccount',
  name: 'Prestation de service',
  nature: 'commercial',
  amountInclTax: 20000 // Note that this value is overriden by the items total calculation
}
export const orderWithRebate: Order = {
  ...orderWithRebateData,
  items: [items.orderWithRebateItem],
  tranches: tranches.tranchesForOrderWithRebate,
  amountExclTax: 138,
  taxAmount: 27.6,
  amountInclTax: 165.6,
  averageTaxRate: 0.2
}

export const orderWithNoItemsData: Order = {
  id: 'orderWithNoItems',
  supplierAccountId: 'pizzaDOroAccount',
  clientAccountId: 'fabrizioAccount',
  name: 'Chaussettes',
  nature: 'commercial',
  amountExclTax: 1000,
  amountInclTax: 1200,
  taxAmount: 200,
  averageTaxRate: 0.2 // Note: if there are no items, the both amounts must be provided in order to be able to calculate the tax amount and average tax rate
}
export const orderWithNoItems: Order = {
  ...orderWithNoItemsData,
  items: [],
  tranches: [tranches.orderWithNoItemsFirm100]
}

export const orderWithNoTranchesData: Order = {
  id: 'orderWithNoTranches',
  supplierAccountId: 'fabrizioAccount',
  clientAccountId: 'cosysAccount',
  name: 'Chaussures',
  nature: 'commercial',
  amountInclTax: 1540
}
export const orderWithNoTranches: Order = {
  ...orderWithNoTranchesData,
  items: [items.orderWithNoTranchesItem],
  amountExclTax: 1400,
  taxAmount: 140,
  averageTaxRate: 0.1,
  tranches: []
}

export const fundingOrderData: Order = {
  id: 'fundingOrder',
  supplierAccountId: 'doMazyAccount',
  clientAccountId: 'fabrizioAccount',
  amountInclTax: 1200,
  name: 'Funding',
  nature: 'financial'
}
export const fundingOrder: Order = {
  ...fundingOrderData,
  items: [],
  amountExclTax: 1200,
  taxAmount: 0,
  averageTaxRate: 0.0,
  tranches: tranches.tranchesForFundingOrder
}

export const donationOrderData: Order = {
  id: 'donationOrder',
  supplierAccountId: 'pizzaDOroTakeAwayAccount',
  clientAccountId: 'pizzaDOroAccount',
  amountInclTax: 100,
  amountExclTax: 100, // Note: if there are no items, the both amounts must be provided in order to be able to calculate the tax amount and average tax rate
  taxAmount: 0,
  averageTaxRate: 0.0,
  name: 'Donation',
  nature: 'donation'
}
export const donationOrder: Order = {
  ...donationOrderData,
  items: [],
  tranches: [tranches.donationOrder100]
}

export const orderDatas: Order[] = [
  commercialOrderData,
  orderWithNoItemsData,
  orderWithRebateData,
  orderWithNoTranchesData,
  fundingOrderData,
  donationOrderData
]
export const orders: Order[] = [
  commercialOrder,
  orderWithNoItems,
  orderWithRebate,
  orderWithNoTranches,
  fundingOrder,
  donationOrder
]

export const pizzaDOroAccountOrderDatas: Order[] = [
  commercialOrderData,
  orderWithNoItemsData,
  donationOrderData
]
export const pizzaDOroAccountOrders: Order[] = [commercialOrder, orderWithNoItems, donationOrder]

export const fabrizioAccountOrderDatas: Order[] = [
  orderWithNoItemsData,
  orderWithNoTranchesData,
  fundingOrderData
]
export const fabrizioAccountOrders: Order[] = [orderWithNoItems, orderWithNoTranches, fundingOrder]
