import { Franchise } from '@src/core/domain/franchise/Franchise';

export interface IFranchiseRepository {
  create(data: object): Promise<Franchise>;
  getAll(): Promise<Array<Franchise>>;
  getById(id: number): Promise<Franchise>;
  update(id: number, data: object): Promise<Franchise>;
  delete(id: number): Promise<void>;
}
