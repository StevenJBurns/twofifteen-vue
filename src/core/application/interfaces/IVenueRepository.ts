import { Venue } from '@src/core/domain/venue/Venue';

export interface IVenueRepository {
  create(id: number, data: object): Promise<Venue>;
  getAll(): Array<Venue>;
  getById(id: number): Promise<Venue>;
  update(id: number, data: object): Promise<Venue>;
  delete(id: number): Promise<void>;
}
