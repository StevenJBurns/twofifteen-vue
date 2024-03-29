import { VenueParameters } from '@src/core/domain/venue/VenueParameters';
import { VenueRoof } from '@src/core/domain/venue/VenueRoof.enum';
import { VenueSurface } from '@src/core/domain/venue/VenueSurface.enum';
import type { VenueLocation } from './VenueLocation';

export class Venue {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly location: VenueLocation,
    public readonly surface: VenueSurface,
    public readonly roof: VenueRoof,
  ) {}

  static create(newVenueArgs: VenueParameters) {
    console.log({ newVenueArgs });
    const { id, name, location, surface, roof } = newVenueArgs;
    return new Venue(id, name, location, surface, roof);
  }

  get properties(): VenueParameters {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      surface: this.surface,
      roof: this.roof,
    };
  }
}
