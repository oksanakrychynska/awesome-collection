import {
  patchState,
  signalStore,
  withMethods,
  withState,
  withComputed
} from '@ngrx/signals';

import { computed } from '@angular/core';

export interface UserCollection {
  id: number;
  name: string;
  favorite: boolean;
}

type CollectionsState = {
  collections: UserCollection[];
  loading: boolean;
};

const initialState: CollectionsState = {
  collections: [],
  loading: false
};

export const CollectionsStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    favouriteCollections: computed(() =>
      store.collections().filter(c => c.favorite)
    ),

    totalCollections: computed(() =>
      store.collections().length
    )
  })),

  withMethods((store) => ({

    addCollection(user: UserCollection) {
      patchState(store, {
        collections: [...store.collections(), user]
      });
    },

    removeCollection(id: number) {
      patchState(store, {
        collections: store.collections().filter(c => c.id !== id)
      });
    },

    setFavourite(id: number) {
      patchState(store, {
        collections: store.collections().map(c =>
          c.id === id
            ? {
              ...c,
              favourite: !c.favorite
            }
            : c
        )
      });
    },

    setLoading(loading: boolean) {
      patchState(store, { loading });
    }
  }))
);
