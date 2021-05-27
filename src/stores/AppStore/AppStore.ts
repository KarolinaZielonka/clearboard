import AuthStore from 'stores/AuthStore';
import BoardStore from 'stores/BoardStore/BoardStore';
import { Stores } from './types';

export default class AppStore {
    constructor(
    private readonly __authStore = new AuthStore(),
    private readonly __boardStore = new BoardStore()
    ) {}

    get stores(): Stores {
        return {
            authStore: this.__authStore,
            boardStore: this.__boardStore
        };
    }
}