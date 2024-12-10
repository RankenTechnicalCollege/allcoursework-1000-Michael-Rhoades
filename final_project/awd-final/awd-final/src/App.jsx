import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import AddStudent from './AddStudent';
import _ from 'lodash';
import Student from './Student';

function App() {
  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    saveStudents(students);
  }, []);

  const students = 
    [{
      id: nanoid(),
      firstName: "Andrea",
      lastName: "Copland",
      email: "acopland0@sbwire.com",
      image: "student1.jpg",
      gradYear: 2024
    }, {
      id: nanoid(),
      firstName: "Torin",
      lastName: "Regorz",
      email: "tregorz1@shop-pro.jp",
      image: "student2.jpg",
      gradYear: 2023
    }, {
      id: nanoid(),
      firstName: "Leandra",
      lastName: "Klimt",
      email: "lklimt2@fc2.com",
      image: "student3.jpg",
      gradYear: 2024
    }, {
      id: nanoid(),
      firstName: "Harald",
      lastName: "Hanshawe",
      email: "hhanshawe3@prnewswire.com",
      image: "student4.jpg",
      gradYear: 2023
    }, {
      id: nanoid(),
      firstName: "Elysee",
      lastName: "Magor",
      email: "emagor4@mapquest.com",
      image: "student5.jpg",
      gradYear: 2020
    }, {
      id: nanoid(),
      firstName: "Reed",
      lastName: "Bittlestone",
      email: "rbittlestone5@dagondesign.com",
      image: "student6.jpg",
      gradYear: 2021
    }, {
      id: nanoid(),
      firstName: "Barbee",
      lastName: "Vickerstaff",
      email: "bvickerstaff6@hibu.com",
      image: "student7.jpg",
      gradYear: 2024
    }, {
      id: nanoid(),
      firstName: "Maynord",
      lastName: "Cahalin",
      email: "mcahalin7@alexa.com",
      image: "student8.jpg",
      gradYear: 2020
    }, {
      id: nanoid(),
      firstName: "Muriel",
      lastName: "Graundisson",
      email: "mgraundisson8@flavors.me",
      image: "student9.jpg",
      gradYear: 2019
    }, {
      id: nanoid(),
      firstName: "Zara",
      lastName: "Cowope",
      email: "zcowope9@dmoz.org",
      image: "student10.jpg",
      gradYear: 2022
    }];

    const saveStudents = (students) => {
      setAllStudents(students);
      setSearchResults(students)
    }

    const addStudent = (newStudent) => {
      const updateStudents = [...allStudents,newStudent];
      saveStudents(updateStudents);
    }

    const removeStudent = (studentToDelete) => {
      console.table(studentToDelete);
    }

    const searchStudents = () => {
      let keywordsArray = [];
      if (keywords){
        keywordsArray = keywords.toLowerCase().split(' ');
      }

      if (gradYear) {
        keywordsArray.push(gradYear.toString());
      }

      if (keywordsArray.length > 0) {
        const searchResults = allStudents.filter(student => {
          for (const word of keywordsArray) {
            if (student.firstName.toLowerCase().includes(word) || student.lastName.toLowerCase().includes(word) || student.gradYear === parseInt(word)) {
              return true;
            }
          }
          return false;
        });
        setSearchResults(searchResults);
      } else {
        setSearchResults(allStudents);
      }
    }
  
  return (
    <div className='container'>
      <div className='row'>
        {searchResults && searchResults.map((student) => (
        <div className='col-lg-2' key={student.id}>
          
        </div>)
        )}
      </div>

      {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>*/}
      <AddStudent addStudent={addStudent} />
      <div className='row mt-4'>
        <div className='col-md-4'>
          <label htmlFor="txtKeywords" className=''>Search by First or Last Name</label>
          <input type="text" className='form-control' placeholder='Search First or Last Name' id="txtKeywords" onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
        </div>
        <div className='col-md-4'>
          <select className='form-select' id="formYear" value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
            <option value="">Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
          </select>
        </div>
        <div className='col-md-4'>
          <button type="button" className='btn btn-lg btn-primary' onClick={searchStudents}>Search Students</button>
        </div>
      </div>
    </div>

  )
}

export default App
