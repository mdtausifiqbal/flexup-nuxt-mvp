export interface GroupingData {
  id: string
  name: string
  representativeAccountId: string
  groupingContractId: string
  creationDate: Date
  countryId: string
}

export interface Grouping extends GroupingData {
  label: string
}
