import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWarning, faSave, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [set, setSet] = useState('');
  const [hero, setHero] = useState('');
  const [type, setType] = useState('');
  const [cardName, setCardName] = useState('');

  useEffect(() => {
    setSet(props.card.set);
    setHero(props.card.hero);
    setType(props.card.type);
    setCardName(props.card.cardName);
  },[])

  const saveCard = () => {
    setEditMode(false);
    const updateCard = {set: set, hero: hero, type: type, cardName: cardName, id: props.card.id, image: props.card.image};
    props.updateCard(updateCard)
  }

  return (
    <div>
      <div className='card'>
        <img src={props.card.image} alt="Unmatched card" className='card-image-top mx-auto img-fluid' />
        {!editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'>{props.card.set}</li>
          <li className='list-group-item text-center'>{props.card.hero}</li>
          <li className='list-group-item text-center'>{props.card.type}</li>
          <li className='list-group-item text-center'>{props.card.cardName}</li>
          <button type="button" className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Card <FontAwesomeIcon icon={faWarning} /></button>
          <button type="button" className='btn btn-danger' onClick={() => props.removeCard(props.card)}>Delete Card <FontAwesomeIcon icon={faCircleXmark} /></button>
        </ul>}
        {editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={set} onChange={(e) => setSet(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={hero} onChange={(e) => setHero(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={type} onChange={(e) => setType(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type="text" className='form-control' value={cardName} onChange={(e) => setCardName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><button type="button" className='btn btn-secondary' onClick={saveCard}>Save <FontAwesomeIcon icon={faSave} /></button></li>
        </ul>}
      </div>
    </div>
  )
}

export default Card