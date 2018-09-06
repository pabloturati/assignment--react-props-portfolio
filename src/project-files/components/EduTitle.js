import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    
    const {institute, fieldOfStudy, dates} = this.props.eduList
    
    return (
      <div className="degree">
       <h5 className="degree__institute">{/*pass institute as props in EducationHistory component */ institute} </h5>
       <p className="degree__field">{/*pass field as props in EducationHistory */ fieldOfStudy}</p>
       <p className="degree__dates">{/*pass dates as props in EducationHistory */ dates}</p>
     </div>
    );
  }
}

export default EduTitle
