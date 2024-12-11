import React, { useEffect, useState } from 'react'

const Student = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    setFirstName(props.student.firstName);
    setLastName(props.student.lastName);
    setEmail(props.student.email);
    setGradYear(props.student.gradYear);
  },[])

  const saveStudent = () => {
    setEditMode(false);
    const updateStudent = {firstName: firstName, lastName: lastName, email: email, gradYear: gradYear, id: props.student.id, image: props.student.image};
    props.updateStudent(updateStudent)
  }

  return (
    <div>
      <div className='card'>
        <img src={props.student.image} alt="Our student" className='card-image-top mx-auto img-fluid' />
        {!editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'>{props.student.firstName}</li>
          <li className='list-group-item text-center'>{props.student.lastName}</li>
          <li className='list-group-item text-center'>{props.student.email}</li>
          <li className='list-group-item text-center'>{props.student.gradYear}</li>
          <button type="button" className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Student</button>
          <button type="button" className='btn btn-danger' onClick={() => props.removeStudent(props.student)}>Delete Student</button>
        </ul>}
        {editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={gradYear} onChange={(e) => setGradYear(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><button type="button" className='btn btn-secondary' onClick={saveStudent}>Save</button></li>
        </ul>}
      </div>
    </div>
  )
}

export default Student