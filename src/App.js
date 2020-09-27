import React from 'react';
import './App.css';
import FirstLine from './firstline-comp';
import SecondLine from './secondline-comp';
import SecondRight from './second-right-comp';
import ThirdRight from './third-right-comp';
import ForthRight from './forth-right-comp';
import FifthRight from './fifth-right-comp';
import SixthLine from './sixthline-comp';
import SixthDot from './sixth-dot-comp';
import SixthRight from './sixth-right-comp';

const SECOND_DATA = ['AC', '+/-', '%'];
const THIRD_DATA = ['7', '8', '9'];
const FORTH_DATA = ['4', '5', '6'];
const FIFTH_DATA = ['1', '2', '3'];

function App() {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>My Calculator Design</h1>

        <div style={{width: '60%', height: '60vh', margin: 'auto'}}>

            {/* 1st Line */}
              <FirstLine />

            {/* 2nd Line */}
            <div  style={{display: 'flex', backgroundColor: '#E0E0E0', width: '100%', height: '10vh'}}>
                {
                    SECOND_DATA.map((second) => {
                    return <SecondLine name={second} />
                    })
                }
                <SecondRight />
            </div>

            {/* 3rd Line */}
            <div  style={{display: 'flex', backgroundColor: '#E0E0E0', width: '100%', height: '10vh'}}>
                {
                    THIRD_DATA.map((third) => {
                      return <SecondLine name={third} />
                    })
                }
                <ThirdRight />
            </div>

           {/* 4th Line */}
           <div  style={{display: 'flex', backgroundColor: '#E0E0E0', width: '100%', height: '10vh'}}>
                {
                    FORTH_DATA.map((forth) => {
                        return <SecondLine name={forth} />
                    })
                }
                <ForthRight />
            </div>

            {/* 5th Line */}
            <div  style={{display: 'flex', backgroundColor: '#E0E0E0', width: '100%', height: '10vh'}}>
                {
                    FIFTH_DATA.map((fifth) => {
                      return <SecondLine name={fifth} />
                    })
                }
                <FifthRight />
            </div>

           {/* 6th Line */}
           <div  style={{display: 'flex', backgroundColor: '#E0E0E0', width: '100%', height: '10vh'}}>
                <SixthLine />
                <SixthDot />
                <SixthRight />
            </div>
        </div>

    </div>
    
  );
}

export default App;
