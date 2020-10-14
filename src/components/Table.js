import React,{useState, useEffect} from 'react'
import TicBlock from './TicBlock.js'

const Table = () => {
    const [table, setTable] = useState([0,0,0, 0,0,0, 0,0,0])
    const [winner, setWinner] = useState([])
    const [last, setLast] = useState(Math.random() > 0.5? 5:3)
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    
    useEffect(()=>{
      
       
        //checking winner row and col
        for (let i = 0; i <= 2; i++){
            const idx = (i % 3) * 3 // -> 0,3,6
            //check row
            if ( (table[idx] + table[idx+1] + table[idx+2] )=== 9 || (table[idx] + table[idx+1] + table[idx+2] ) === 15){
                setWinner([idx,idx+1,idx+2])
                gameOver()
            }
            //check col
            if ((table[i] + table[i+3] + table[i+6] )=== 9 || (table[i] + table[i+3] + table[i+6] ) === 15){
                setWinner([i,i+3,i+6])
                gameOver()
            }
        }
        //checking winner diagonal
        if ((table[0] + table[4] + table[8] ) === 15 || (table[0] + table[4] + table[8] ) === 9 ){
            setWinner([0, 4, 8])
            gameOver()
        }
        if ((table[2] + table[4] + table[6] ) === 9 || (table[2] + table[4] + table[6] ) ===15){
            setWinner([2, 4, 6])
            gameOver()
        }
        // check if table completed
        if (table.indexOf(0) === -1){
            gameOver()
        }
    }, [table])

    const gameOver = () => {
            setTimeout(() => {
                setTable([0,0,0,0,0,0,0,0,0]);
                setWinner([]);
                console.log('game over');
            },2000);
            alert('winner is '+ winner)
    } 
    console.log(winner);
    return (
    <div className='main-table'>
        <h1> Tic Tac Toe </h1>
      <table className='table'>
      <tr>
    <th>{player1}</th>
    <th>{player2}</th>
     </tr>
  <tr>
    <td>0</td>
    <td>0</td>
      </tr>
      </table>
      <button onClick={() =>{
            const player1 = prompt('x player name');
            setPlayer1(player1);
      }}>Add player 1</button>
      <button onClick={() =>{
           const player2 = prompt('0 player name');
           setPlayer2(player2);
      }}>Add player 2</button>
        <div className='row'>
            <TicBlock number={0} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={1} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={2} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
        </div>
        <div className='row'>
            <TicBlock number={3} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={4} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={5} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
        </div>
        <div className='row'>
            <TicBlock number={6} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={7} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
            <TicBlock number={8} last={[last,setLast]} table={[table,setTable]} winner={winner}/> 
        </div>

    </div>
    )
}

export default Table;
