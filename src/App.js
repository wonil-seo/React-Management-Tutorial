import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'wonil-seo',
  'birthday': '1111',
  'gender': 'male',
  'job': 'student'  
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'wonil-aaa',
    'birthday': '3333',
    'gender': 'female',
    'job': 'student'  
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'wonil-bbb',
    'birthday': '5555',
    'gender': 'male',
    'job': 'student'  
    }
];

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer key={c.id}
                id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;
