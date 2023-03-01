import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
// import axios from 'axios';
import { connect } from 'react-redux';
import { studentsFetch } from '../actions';
import { ListItem } from './ListItem';


class TutionList extends Component {
  componentWillMount() {
    this.props.studentsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ students }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(students);
  }

  renderRow() {
    return <ListItem student={student} />;
  }
  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSourceource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const students = _.map(state.students, (val, uid) => {
    return { ...val, uid };
  });
  return { students };
};
export default connect(mapStateToProps, { studentsFetch })(TutionList);
