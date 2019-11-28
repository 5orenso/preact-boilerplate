import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

const initialState = {
    message: 'Hello world',
};

@observer
class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // eslint-disable-next-line
    render() {
        const { message } = this.state;
        const { appState } = this.props.stores;
        const { view, counter } = appState;

        return (
            <div>
                <div class='row'>
                    <div class='col-12'>
                        {message}
                        {JSON.stringify(view)}
                        <button type='button' onClick={() => appState.decCounter()}>-</button>
                        Counter: {counter}
                        <button type='button' onClick={() => appState.incCounter()}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Frontpage;
