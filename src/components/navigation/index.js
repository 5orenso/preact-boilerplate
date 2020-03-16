import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

const initialState = {
    dealer: {},
};

@observer
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
    }

    render(props) {
        const { appState } = this.props.stores;
        const { darkmode } = appState;
        const { path = '' } = props;
        return (
            <nav class='navbar navbar-expand-lg navbar-themed'>
                <a class='navbar-brand' href='/'>
                    <img src={`/img/logo${darkmode ? '-black' : '-white'}.png`} style='height: 60px;' />
                </a>

                <button class='navbar-toggler' type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon' />
                </button>

                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav mr-auto' />
                    <div class='my-0 my-lg-0'>
                        <ul class='navbar-nav mr-auto'>
                            <li class='mr-5'>
                                <button class='btn btn-link'
                                    onClick={() => appState.toggleDarkmode()}
                                >
                                    <i class={`${darkmode ? 'fas text-warning' : 'far'} fa-moon`} />
                                </button>
                            </li>
                            <li class={`nav-item ${path.match(/^\/home/) ? 'active' : ''}`}>
                                <a class='nav-link' href='/home'>
                                    <i class='fas fa-box-open' /> Home
                                </a>
                            </li>
                            <li class={`nav-item ${path.match(/^\/away/) ? 'active' : ''}`}>
                                <a class='nav-link' href='/away'>
                                    <i class='fas fa-tools' /> Away
                                </a>
                            </li>

                            <li class={`nav-item ${path.match(/^\/logout/) ? 'active' : ''}`}>
                                <a class='nav-link' href='/logout'>
                                    <i class='fas fa-sign-out-alt' /> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
