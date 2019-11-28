import { observable, configure, action, computed } from 'mobx';
import util from '../lib/util';

configure({ enforceActions: 'always' });

class AppState {
    constructor() {
        this.setView(util.getObject('view'));
    }

    @observable view = {};

    @observable counter = 0;

    @action
    setView(view) {
        this.view = view;
        util.setObject('view', view);
    }

    @action
    setViewKey(key, value) {
        this.view[key] = value;
    }

    @action
    incCounter() {
        this.counter += 1;
    }

    @action
    decCounter() {
        this.counter -= 1;
    }

    @computed
    get counterTimes2() {
        return this.counter * 2;
    }
}

const store = new AppState();
export default store;
