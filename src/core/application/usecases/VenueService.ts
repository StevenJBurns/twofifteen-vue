import { IVenueRepository } from '@src/core/application/interfaces/IVenueRepository';
import { VenueList } from '@src/core/application/usecases/VenueList';

export class VenueService {
  private readonly venueList: VenueList;

  constructor(private readonly venueRepository: IVenueRepository) {
    this.venueList = new VenueList(this.venueRepository);
  }

  getVenueList() {
    return this.venueList.execute();
  }
}
