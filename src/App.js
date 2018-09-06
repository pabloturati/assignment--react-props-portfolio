import React, { Component } from 'react';
import './project-files/css/styles.css'

import WorkHistory from './project-files/components/WorkHistory'
import SkillsList from './project-files/components/SkillsList'
import EducationHistory from './project-files/components/EducationHistory'
//Data
import {skills, eduList, jobsList} from './project-files/data/datasource'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillsList skills = {skills}/>
        <EducationHistory eduList = {eduList}/>
        <WorkHistory jobsList = {jobsList}/>
      </div>
    );
  }
}

export default App;
