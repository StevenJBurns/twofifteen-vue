import { Season } from '@src/core/domain/season/Season';

export interface ISeasonRepository {
  create(id: number, data: object): Promise<Season>;
  getAll(): Promise<Array<Season>>;
  getById(id: number): Promise<Season>;
  update(id: number, data: object): Promise<Season>;
  delete(id: number): Promise<void>;
}
