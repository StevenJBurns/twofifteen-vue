import { VenueRoof } from '@src/core/domain/venue/VenueRoof.enum';
import { VenueSurface } from '@src/core/domain/venue/VenueSurface.enum';
import type { VenueLocation } from './VenueLocation';

// type VenueName = {
//   startDate: Date;
//   endDate: Date;
//   name: string;
// };

export type VenueParameters = {
  id: string;
  name: string;
  location: VenueLocation;
  constructed?: string;
  opened?: string;
  closed?: string;
  demolished?: string;
  surface: VenueSurface;
  roof: VenueRoof;
};
