/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem } from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Input, Button, Spinner } from './common';



class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" color="#00ff00" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        value={this.props.email}
                        label="Email" placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password} />
                </CardItem>
                {this.renderError()}
                <CardItem>
                    {this.renderButton()}
                </CardItem>


            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.error
    };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
