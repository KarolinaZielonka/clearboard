import { action, makeObservable, observable } from 'mobx';

export default class BoardStore {
    boardId: string
    
    constructor(){
        makeObservable(this, {
            boardId: observable,
            updateBoardId: action
        });
        this.boardId = '';
    }

    updateBoardId(value: string):void{
        this.boardId = value;
    }
}