import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TutionList from './components/TutionList';
import StudentDetail from './components/StudentDetail';
import StudentCreate from './components/StudentCreate';
const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            initial
            rightTitle="Add"
            onRight={() => {
              Actions.studentCreation();
            }}
            key="StudentList"
            component={TutionList}
            title="Students"
          />
          <Scene
            key="studentCreation"
            component={StudentCreate}
            title="Add Student"
          />
        </Scene>
      </Scene>
    </Router>
  );
};
export default RouterComponent;
