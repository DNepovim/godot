export const enumToSchemaOptions = <T extends any>(enumObject: {}): Array<T> =>
  Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .map(key => enumObject[key])