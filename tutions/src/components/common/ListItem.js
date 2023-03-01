/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
class ListItem extends Component {
    onRowPress() {
        Actions.studentEdit({ student: this.props.student });
    }
    render() {
        console.log(this.props.student);
        const { name } = this.props.student;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
};

export default ListItem;
