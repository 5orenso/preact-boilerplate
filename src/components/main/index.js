import { h, Component } from 'preact';
import Router from 'preact-router';
import { observer } from 'mobx-preact';
import { createHashHistory } from 'history';

import Frontpage from '../frontpage';

// Content stores with observable values and attributes.
import appState from '../../stores/appstate';

/*
    If this is a widget on a page with more widgets you should probably set this
    to false to prevent confusion.
*/
const USE_ROUTER = true;

const STATE = {
    CURRENT_NAV: 'currentNav',
};

@observer
class Main extends Component {
    constructor(props) {
        super(props);
        this.stores = {
            appState,
        };
    }

    handleRoute = (event) => {
        const currentNav = event.url.replace(/^\/([^/?]+).*/g, '$1');
        this.setState({
            [STATE.CURRENT_NAV]: currentNav,
        });
    };

    getMainContent() {
        if (USE_ROUTER) {
            return (<Router onChange={this.handleRoute} history={createHashHistory()}>
                {/*
                    This would be a nice place for/more new routes.
                    <TagList path='/tag' />
                    <TagEdit path='/tag/:tagId' />
                */}
                <Frontpage stores={this.stores} default {...this.props} />
            </Router>);
        }
        return (<Frontpage stores={this.stores} default {...this.props} />);
    }

    render() {
        return (
            <div class='container-fluid'>
                { this.getMainContent() }
            </div>
        );
    }
}

export default Main;
