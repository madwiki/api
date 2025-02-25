// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool } from '@polkadot/types-codec';
import type { BlockHash } from '@polkadot/types/interfaces/chain';

/** @name CreatedBlock */
export interface CreatedBlock extends Struct {
  readonly hash: BlockHash;
  readonly aux: ImportedAux;
}

/** @name ImportedAux */
export interface ImportedAux extends Struct {
  readonly headerOnly: bool;
  readonly clearJustificationRequests: bool;
  readonly needsJustification: bool;
  readonly badJustification: bool;
  readonly needsFinalityProof: bool;
  readonly isNewBest: bool;
}

export type PHANTOM_ENGINE = 'engine';
