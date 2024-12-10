import React from 'react'

const Student = () => {
  return (
    <div>
      <div className='card'>
            <img src={student.image} alt="Our student" className='card-image-top mx-auto' />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-center'>{student.firstName}</li>
              <li className='list-group-item text-center'>{student.lastName}</li>
              <li className='list-group-item text-center'>{student.email}</li>
              <li className='list-group-item text-center'>{student.gradYear}</li>
            </ul>
          </div>
    </div>
  )
}

export default Student