import AuthStore from 'stores/AuthStore';
import BoardStore from 'stores/BoardStore/BoardStore';

export type Stores = {
  authStore: AuthStore;
  boardStore: BoardStore;
};