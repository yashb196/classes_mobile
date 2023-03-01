import React, { Component } from 'react';
import { Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Card, CardItem } from 'native-base';
import { Input, Button } from './common';
import { connect } from 'react-redux';
import { studentUpdate, studentName, studentStd, studentRtgs } from '../actions';

class StudentDetail extends Component {
  render() {
    return (
      <View><CardItem>
        <Text style={styles.pickerTextStyke}>Date</Text>
        <DatePicker
          style={{ width: 200, alignContent: 'center' }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="18-05-1800"
          maxDate="01-06-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            myDateFunction(date);
            // this.setState({date: date});
          }}
        />
      </CardItem>

        <CardItem>
          <Input
            label="name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(value) =>
              this.props.studentUpdation({ prop: 'name', value })
            }
          />
        </CardItem>
        <CardItem>
          <Input
            label="phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.studentUpdation({ prop: 'phone', value })
            }
          />
        </CardItem>
        <CardItem>
          <Text style={styles.pickerTextStyke}>STD</Text>
          <Picker
            style={{ flex: 1, alignContent: 'center' }}
            selectedValue={this.props.std}
            onValueChange={(value) =>
              this.props.studentUpdation({ prop: 'std', value })
            }>
            <Picker.Item label="I" value="I" />
            <Picker.Item label="II" value="II" />
            <Picker.Item label="II" value="II" />
            <Picker.Item label="III" value="III" />
            <Picker.Item label="IV" value="IV" />
            <Picker.Item label="V" value="V" />
            <Picker.Item label="VI" value="VI" />
            <Picker.Item label="VII" value="VII" />
            <Picker.Item label="VIII" value="VIII" />
            <Picker.Item label="IX" value="IX" />
            <Picker.Item label="X" value="X" />
            <Picker.Item label="XI" value="XI" />
            <Picker.Item label="XII" value="XII" />
            <Picker.Item label="DELF" value="DELF" />
          </Picker>
        </CardItem>
        <CardItem />
        <CardItem>
          <Text style={styles.pickerTextStyke}>Bank or Cash</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.bankorcash}
            onValueChange={(value) =>
              this.props.studentUpdation({ prop: 'bankorcash', value })
            }>
            <Picker.Item label="Bank" value="Bank" />
            <Picker.Item label="Cash" value="Cash" />
          </Picker>
        </CardItem>
        <CardItem>
          <Input
            label="Bank Name"
            placeholder="Axis"
            value={this.props.bankname}
            onChangeText={(value) =>
              this.props.studentUpdation({ prop: 'bankname', value })
            }
          />
        </CardItem>
        <CardItem>
          <Input
            label="PresentDays"
            placeholder="25"
            value={this.props.presentdays}
            onChangeText={(value) =>
              this.props.studentUpdation({ prop: 'presentdays', value })
            }
          />
        </CardItem>
      </View>
    )
  }
}

const styles = {
  pickerTextStyke: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = (state) => {
  const { name,
    phone,
    std,
    bankorcash,
    bankname,
    presentdays,
    date, } = state.StudentDetail;
  return {
    name,
    phone,
    std,
    bankorcash,
    bankname,
    presentdays,
    date
  }
};

export default connect(mapStateToProps, { studentUpdate })(StudentDetail);
