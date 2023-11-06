import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByProperties } from '../../generic/methods/interfaces'

export const createGetByProperties: CreateGetByProperties =
  <T extends Entity>(entityName: EntityName) =>
  (
    property1: keyof T,
    value1: unknown,
    property2: keyof T,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    // Check if the property exists on the first entity in the list
    if (entities.length === 0) throw new Error(`No data found in database for this entity`)
    if (!(property1 in entities[0])) {
      throw new Error(`Property "${property1 as string}" does not exist on this entity"`)
    }
    if (!(property2 in entities[0])) {
      throw new Error(`Property "${property2 as string}" does not exist on this entity`)
    }
    if (andOr === 'and') {
      return Promise.resolve(
        entities.filter(
          (entity: Entity) =>
            entity[property1 as string] === value1 && entity[property2 as string] === value2
        )
      )
    } else {
      return Promise.resolve(
        entities.filter(
          (entity: Entity) =>
            entity[property1 as string] === value1 || entity[property2 as string] === value2
        )
      )
    }
  }
