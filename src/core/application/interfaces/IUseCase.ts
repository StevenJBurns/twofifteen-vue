import { IViewModel } from '@src/core/application/interfaces/IViewModel';

export interface IUseCase {
  execute: () => IViewModel | void;
}
