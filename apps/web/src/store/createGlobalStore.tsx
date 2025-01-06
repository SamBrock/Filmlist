import { createStore } from 'zustand/vanilla';

export type GlobalStoreState = {
  searchModalOpen: boolean;
};

export type GlobalStoreActions = {
  openSearchModal: () => void;
  closeSearchModal: () => void;
  searchModalOpenChanged: (open: boolean) => void;
};

export type GlobalStore = GlobalStoreState & GlobalStoreActions;

export const defaultInitState: GlobalStoreState = {
  searchModalOpen: false,
};

export const createGlobalStore = (initState: GlobalStoreState = defaultInitState) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    openSearchModal: () => set({ searchModalOpen: true }),
    closeSearchModal: () => set({ searchModalOpen: false }),
    searchModalOpenChanged: (open) => set({ searchModalOpen: open }),
  }));
};
