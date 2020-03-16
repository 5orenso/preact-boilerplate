import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

const initialState = {
};

@observer
class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
    }

    render(props = this.props) {
        let url = props.url.replace(/^\//, '');
        url = url.split('/');
        if (url[1]) {
            url[1] = url[1].toUpperCase();
        }
        return (
            <nav aria-label='breadcrumb'>
                <ol class='breadcrumb py-1 font-weight-lighter mb-0'>
                    <li class='breadcrumb-item'><a href='/'>Boilerplate</a></li>
                    {url.map((u, idx) => (
                        <li class='breadcrumb-item'>
                            <a href={`/${url.slice(0, idx + 1).join('/')}`}>{decodeURIComponent(u)}</a>
                        </li>
                    ))}
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;

