import { Component} from 'react';
import './index.css'


const inititalNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]

class TambolaNumberGenerator extends Component { constructor(props) { super(props); this.state = { 
  numbers: [], 
  generatedNumber: null,
  NumberList :inititalNumberList,
  isStart : true ,
  }; }

componentDidMount() { this.initializeNumbers(); }

initializeNumbers = () => { const newNumbers = Array.from({ length: 90 }, (_, index) => index + 1); this.setState({ numbers: newNumbers }); };

generateNumber = () => { 
  const { numbers } = this.state; 
  if (numbers.length > 0) { 
    const randomIndex = Math.floor(Math.random() * numbers.length); 
    const newGeneratedNumber = numbers[randomIndex]; 
    this.setState({ generatedNumber: newGeneratedNumber, numbers: numbers.filter((number) => number !== newGeneratedNumber) }); 
  } 
  else 
  { 
    alert('All numbers have been generated!'); 
  } 
};

onClickStart=()=>{
  this.setState({isStart: false})
  this.generateNumber()
}

onClickReset=()=>{
  this.setState({isStart: true, numbers:inititalNumberList, generatedNumber:null})
}

render() { 
  const { generatedNumber, NumberList, numbers, isStart } = this.state; 
  return ( 
  <div> 
    <h1>Tambola Number Generator</h1>
    {isStart ? <button className='button' onClick={this.onClickStart}>Start</button>:<button className='button' onClick={this.generateNumber}>Next Number</button>}
    <button className='button' onClick={this.onClickReset}>Reset</button>
    <div> 
      {isStart ? <p></p>:       <div className='result-container'>
      <h2 >Generated Number:</h2>  <h2 className='result'>  {generatedNumber}</h2>
      </div>}
      <div>
    <ul className='list-container'>
        {NumberList.map(eachNumber =>{
          if (numbers.includes(eachNumber)){
            return (<li key={eachNumber} className="list-Elements">{eachNumber}</li>)
          }
            return (<li className='list-Active-Elements'>{eachNumber}</li>)
        })}
    </ul>
    </div>
    </div>
  </div> ); 
} 
}

export default TambolaNumberGenerator;
