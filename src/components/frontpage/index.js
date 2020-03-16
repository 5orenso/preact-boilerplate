import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

import Top from '../navigation/top';

import util from '../../lib/util';

const initialState = {};

@observer
class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        const { appState } = this.props.stores;
        const { darkmode } = appState;
        util.toggleDarkModeClasses(darkmode);
    }

    // eslint-disable-next-line
    render(props) {
        const { appState } = this.props.stores;
        const { counter } = appState;

        return (
            <div>
                <Top {...props} />
                <div class='row'>
                    <div class='col-12'>
                        <button type='button' onClick={() => appState.decCounter()}>-</button>
                        Counter: {counter}
                        <button type='button' onClick={() => appState.incCounter()}>+</button>

                        <hr />

                        <button type='button' onClick={() => appState.toggleDarkmode()}>Toggle darkmode</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Frontpage;
