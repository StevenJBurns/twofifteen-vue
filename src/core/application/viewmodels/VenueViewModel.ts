import { Venue } from '@src/core/domain/venue/Venue';
import { VenueLocation } from '@src/core/domain/venue/VenueLocation';
import { VenueRoof } from '@src/core/domain/venue/VenueRoof.enum';
import { VenueSurface } from '@src/core/domain/venue/VenueSurface.enum';

export class VenueViewModel {
  #id: string;
  #name: string;
  #location: {
    city: string;
    state: string;
    country: string;
  };
  #surface: VenueSurface;
  #roof: VenueRoof;

  private constructor(
    id: string,
    name: string,
    location: {
      city: string;
      state: string;
      country: string;
    },
    surface: VenueSurface,
    roof: VenueRoof,
  ) {
    this.#id = id;
    this.#name = name;
    this.#location = location;
    this.#surface = surface;
    this.#roof = roof;
  }

  static create(venue: Venue) {
    return new VenueViewModel(
      venue.id,
      venue.name,
      venue.location,
      venue.surface,
      venue.roof,
    );
  }

  get id(): string {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get location(): VenueLocation {
    return this.#location;
  }

  get roofType(): string {
    switch (this.#roof) {
      case VenueRoof.Open:
        return 'Open';
      case VenueRoof.Fixed:
        return 'Fixed';
      case VenueRoof.Retractable:
        return 'Retractable';
      case VenueRoof.Unknown:
      default:
        return 'Unknown';
    }
  }

  get surfaceType(): string {
    switch (this.#surface) {
      case VenueSurface.NaturalGrass:
        return 'Grass';
      case VenueSurface.ArtificalTurf:
        return 'Artificial Turf';
      case VenueSurface.PaintedDirt:
        return 'Painted Turf';
      case VenueSurface.Unknown:
      default:
        return 'Unknown';
    }
  }
}
