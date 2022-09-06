export interface ICrud<T> {
  create: (resource: T) => Promise<string | never>
  list: () => Promise<T[] | never>
  itemById: (id: string) => Promise<T | never>
  itemByEmail: (email: string) => Promise<T | never>
  updateById: (id: string, resource: T) => Promise<void | never>
  patchById: (id: string, resource: T) => Promise<void | never>
  deleteById: (id: string) => Promise<void | never>
}
