import { Component } from 'preact';

class Container extends Component {
    render(props, state) {
        // props === this.props
        // state === this.state
        return <h1>Hello, {props.name}!</h1>;
    }
}

default export Container
