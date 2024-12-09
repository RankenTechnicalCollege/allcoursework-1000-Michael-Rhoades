import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [allStudents setAllStudents] = useState(null);

  const students = [{
    [{
      firstName: "Andrea",
      lastName: "Copland",
      email: "acopland0@sbwire.com"
    }, {
      firstName: "Torin",
      lastName: "Regorz",
      email: "tregorz1@shop-pro.jp"
    }, {
      firstName: "Leandra",
      lastName: "Klimt",
      email: "lklimt2@fc2.com"
    }, {
      firstName: "Harald",
      lastName: "Hanshawe",
      email: "hhanshawe3@prnewswire.com"
    }, {
      firstName: "Elysee",
      lastName: "Magor",
      email: "emagor4@mapquest.com"
    }, {
      firstName: "Reed",
      lastName: "Bittlestone",
      email: "rbittlestone5@dagondesign.com"
    }, {
      firstName: "Barbee",
      lastName: "Vickerstaff",
      email: "bvickerstaff6@hibu.com"
    }, {
      firstName: "Maynord",
      lastName: "Cahalin",
      email: "mcahalin7@alexa.com"
    }, {
      firstName: "Muriel",
      lastName: "Graundisson",
      email: "mgraundisson8@flavors.me"
    }, {
      firstName: "Zara",
      lastName: "Cowope",
      email: "zcowope9@dmoz.org"
    }]
    
  }]
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>one</li>
            <li className='list-group-item'>two</li>
            <li className='list-group-item'>three</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App
