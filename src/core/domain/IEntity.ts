export interface IEntity<T> {
  create(newArgs: T): T;
}
