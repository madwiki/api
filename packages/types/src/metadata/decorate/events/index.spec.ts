// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple } from '@polkadot/types-codec/types';
import type { IEvent } from '../../../types';

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../../create';
import { Metadata } from '../../Metadata';
import { decorateEvents } from '..';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

const events = decorateEvents(registry, metadata.asLatest, metadata.version);

describe('decorateEvents', (): void => {
  it('should return known errors', (): void => {
    expect(events.balances.Transfer).toBeDefined();
    expect(events.system.CodeUpdated).toBeDefined();
  });

  it('has the correct metadata for known errors', (): void => {
    expect(
      events.staking.Rewarded.meta.toJSON()
    ).toEqual({
      args: ['AccountId32', 'u128'],
      docs: [
        'The nominator has been rewarded by this amount. \\[stash, amount\\]'
      ],
      fields: [
        { docs: [], name: null, type: 0, typeName: 'T::AccountId' },
        { docs: [], name: null, type: 6, typeName: 'BalanceOf<T>' }
      ],
      index: 1,
      name: 'Rewarded'
    });
  });

  it('should check against a specific error', (): void => {
    expect(
      events.system.ExtrinsicSuccess.is({ index: [0, 0] } as unknown as IEvent<AnyTuple>)
    ).toBe(true);
  });
});
