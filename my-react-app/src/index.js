import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp'

class LoginExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };

        // bind to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    handleSubmit(event) {
        console.log(`Login by user ${this.state.username}.`);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style={{ color: 'navy', fontSize: '1.5em', fontWeight: 'bold' }}>
                    Username:<br />
                    <input type="text" value={this.state.username} onChange={this.handleChange} style={{ width: '250px' }} />
                </label>
                <input type="submit" value="Submit" style={{ backgroundColor: '#000034', color: 'white', width: '120px' }} />
            </form>
        );
    }
}

ReactDOM.render(
    <div>
    <LoginExample />
    <br/>
    <SignUp/>
    </div>,
    document.getElementById('root')
);