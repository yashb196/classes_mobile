/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';

import { Card, CardItem } from 'native-base';
import { Button } from './common';
import { connect } from 'react-redux';
import { studentUpdation, studentCreation } from '../actions';
import StudentForm from './StudentForm';

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '01-01-2020' };
  }
  onButtonPress() {
    const {
      name,
      phone,
      std,
      bankorcash,
      bankname,
      presentdays,
      date,
    } = this.props;
    this.props.studentCreation({
      name,
      phone,
      std: std || 'I',
      bankorcash: bankorcash || 'Bank',
      bankname,
      presentdays,
      date,
    });
  }
  render() {
    return (
      <Card>
        <StudentForm {...this.props} />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    name,
    phone,
    std,
    bankorcash,
    bankname,
    presentdays,
    date,
  } = state.studentForm;

  return {
    name,
    phone,
    std,
    bankorcash,
    bankname,
    presentdays,
    date,
  };
};

export default connect(mapStateToProps, { studentUpdation, studentCreation })(
  StudentCreate,
);
