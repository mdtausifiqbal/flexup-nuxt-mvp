import { individualAdapter } from 'adapters/database/inMemory/individual'
import { Individual, IndividualData } from '../entities/individual'

export const individualGateway = {
  getById: async (id) => {
    const data = await individualAdapter.getById(id)
    if (!data) return undefined
    return computeIndividual(data)
  }
}

export const computeIndividual = (individualData: IndividualData): Individual => {
  return {
    ...individualData,
    fullName: `${individualData.firstName} ${individualData.lastName}`
  }
}
