import { h, Component } from 'preact';

const initialState = {
    message: 'Hello world',
};

class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // eslint-disable-next-line
    render() {
        const { message } = this.state;

        return (
            <div>
                <div class='row'>
                    <div class='col-12'>
                        {message}
                    </div>
                </div>
            </div>
        );
    }
}

export default Frontpage;
