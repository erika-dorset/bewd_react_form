import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscription: true,
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(`The input name:  ${name}. The input value:  ${value}.`);

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form style={{marginTop: '50px'}}>
                <label>
                    I wish to sign up for Subscription.
          <input
                        name="subscription"
                        type="checkbox"
                        checked={this.state.subscription}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label style={{ color: 'navy', fontSize: '1.5em', fontWeight: 'bold'}}>
                    Email:
          <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
export default SignUp;