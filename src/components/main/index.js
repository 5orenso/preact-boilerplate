import { h, Component } from 'preact';
import Router from 'preact-router';
import { createHashHistory } from 'history';
import Progress from '../progress';
import Error from '../error';
import Status from '../status';
import Frontpage from '../frontpage';

/*
    If this is a widget on a page with more widgets you should probably set this
    to false to prevent confusion.
*/
const USE_ROUTER = false;

const STATE = {
    CURRENT_NAV: 'currentNav',
};

class Main extends Component {
    handleRoute = (event) => {
        const currentNav = event.url.replace(/^\/([^/?]+).*/g, '$1');
        this.setState({
            [STATE.CURRENT_NAV]: currentNav,
        });
    };

    getMainContent = () => {
        if (USE_ROUTER) {
            return (<Router onChange={this.handleRoute} history={createHashHistory()}>
                {/*
                    This would be a nice place for/more new routes.
                    <TagList path='/tag' />
                    <TagEdit path='/tag/:tagId' />
                */}
                <Frontpage default />
            </Router>);
        }
        return (<Frontpage default />);
    }

    render() {
        return (
            <div class='col-12'>
                <div class='sticky-top'>
                    <Progress />
                    {/*
                        This would be a nice place to put your navbar.
                    */}
                    <Error />
                    <Status />
                </div>

                { this.getMainContent() }

            </div>
        );
    }
}

export default Main;
