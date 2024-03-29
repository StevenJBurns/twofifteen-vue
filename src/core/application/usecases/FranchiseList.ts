import { IUseCase } from '@src/core/application/interfaces/IUseCase';
import { Franchise } from '@src/core/domain/franchise/Franchise';
import { IFranchiseRepository } from '@src/core/application/interfaces/IFranchiseRepository';

export class FranchisesList implements IUseCase {
  #franchiseRepository: IFranchiseRepository;

  constructor(franchiseRepoistory: IFranchiseRepository) {
    this.#franchiseRepository = franchiseRepoistory;
  }

  execute(): Promise<Array<Franchise>> {
    return this.#franchiseRepository.getAll();
  }
}
