export interface DataSource<T> {
  create(newObjectData: T): void;
  getAll(): Promise<Array<T>>;
  getOne(id: string): Promise<T | null>;
  update(id: string, newObjectData: object): void;
  delete(id: string): void;
}
