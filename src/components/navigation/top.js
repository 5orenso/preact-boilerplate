import { h, Component } from 'preact';
import { observer } from 'mobx-preact';
import PubSub, { topics } from '../../lib/pubsub';

import Progress from '../progress';
import Error from '../error';
import Status from '../status';

import Navigation from './index';
import Breadcrumb from './breadcrumb';

const initialState = {
    height: 100,
};

@observer
class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
    }

    toggleLanguageSelection() {
        const { showLanguageSelection } = this.state;
        this.setState({ showLanguageSelection: !showLanguageSelection });
    }

    componentDidUpdate() {
        let { height } = this.state;
        height = document.getElementById('topNavigationBar').offsetHeight;
        PubSub.publish(topics.LEFT_MENU_HEIGHT_UPDATED, height);
    }

    render(props = this.props) {
        return (
            <div class='sticky-top mb-1' id='topNavigationBar'>
                <Progress />
                {/*
                    This would be a nice place to put your navbar.
                */}
                <Error />
                <Status />
                <Navigation {...props} />
                <Breadcrumb {...props} />
            </div>
        );
    }
}

export default Top;
