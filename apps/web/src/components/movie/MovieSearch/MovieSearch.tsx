'use client';

import { Modal, ModalContentEmpty, ModalTitleSrOnly } from '@/components/common/Modal';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';

import { MovieSearchInput } from './MovieSearchInput';
import { MovieSearchStoreProvider } from './MovieSearchProvider';
import { MovieSearchResults } from './MovieSearchResults';

export const MovieSearch = () => {
  const open = useGlobalStore((s) => s.searchModalOpen);
  const searchModalOpenChanged = useGlobalStore((s) => s.searchModalOpenChanged);

  return (
    <Modal open={open} onOpenChange={searchModalOpenChanged}>
      <ModalTitleSrOnly>Search movies</ModalTitleSrOnly>
      <ModalContentEmpty className="w-[600px] drop-shadow-xl">
        <MovieSearchStoreProvider>
          <div className="bg-foreground border-border max-w-lg overflow-clip rounded-lg border">
            <MovieSearchInput />
            <MovieSearchResults />
          </div>
        </MovieSearchStoreProvider>
      </ModalContentEmpty>
    </Modal>
  );
};
