import { nanoid } from 'nanoid';
import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import './addCard.css'


const AddCard = (props) => {

  const[set, setSet] = useState('');
  const[hero, setHero] = useState('');
  const[type, setType] = useState('');
  const[cardName, setCardName] = useState('');
  const[selectedFile, setSelectedFile] = useState('');

  const doWork = () => {
    const newCard = {
      'id': nanoid(), 
      'set': set, 
      'hero': hero, 
      'type': type, 
      'image': URL.createObjectURL(selectedFile),
      'cardName': cardName
    }
    props.addCard(newCard)
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  }
  return (
    <div className='row mt-5' id='addCard'>
      <h3>Add Card</h3>
      <div className='col-md-2'>
        <label htmlFor="txtSet" className='form-label'>Set</label>
        <input type="text" id='txtSet' placeholder='Set Name' className='form-control' onChange={(event) => setSet(event.currentTarget.value)} value={set} />
      </div>
      <div className='col-md-2'>
        <label htmlFor="txtHero" className='form-label'>Hero</label>
        <input type="text" id='txtHero' placeholder='Hero Name' className='form-control' onChange={(event) => setHero(event.currentTarget.value)} value={hero} />
      </div>
      <div className='col-md-2'>
        <label htmlFor="txtType" className='form-label'>Type</label>
        <input type="text" id='txtType' placeholder='Type' className='form-control' onChange={(event) => setType(event.currentTarget.value)} value={type} />
      </div>
      <div className='col-md-2'>
        <label htmlFor="txtCardName" className='form-label'>Card Name</label>
        <input type="text" id='txtCardName' placeholder='Card Name' className='form-control' onChange={(event) => setCardName(event.currentTarget.value)} value={cardName} />
      </div>
      <div className='col-md-2'>
        <label htmlFor="fileUpload" className='form-label'>Card Image</label>
        <input type="file" id='fileUpload' className='form-control' onChange={(imageUpdate)} />
      </div>
      <div className='col-md-2'>
        <button type="button" className='btn btn-success btn-lg' id='btnAdd' onClick={doWork}>Add Card <FontAwesomeIcon icon={faPlusCircle} /></button>
      </div>
    </div>
  )
}

export default AddCard