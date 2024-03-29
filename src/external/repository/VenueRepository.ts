import { IVenueRepository } from '@src/core/application/interfaces/IVenueRepository';
import { Venue } from '@src/core/domain/venue/Venue';
import VenueData from '@src/external/json/venues.json';

export class VenueRepository implements IVenueRepository {
  create(id: number, data: object): Promise<Venue> {
    console.log({ id, data });
    throw new Error('Method not implemented.');
  }

  getAll(): Array<Venue> {
    return VenueData as unknown as Array<Venue>;
  }

  getById(id: number): Promise<Venue> {
    console.log({ id });
    throw new Error('Method not implemented.');
  }

  update(id: number, data: object): Promise<Venue> {
    console.log({ id, data });
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    console.log({ id });
    throw new Error('Method not implemented.');
  }
}
