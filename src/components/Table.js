import React,{useState, useEffect} from 'react'
import TicBlock from './TicBlock.js'
import '../App.css'
const Table = () => {
    const [table, setTable] = useState([0,0,0, 0,0,0, 0,0,0])
    const [winner, setWinner] = useState([])
    const [last, setLast] = useState(Math.random() > 0.5 ? 5 : 3)
    const [player1, setPlayer1] = useState({name: '', last: 5, count: 0})
    const [player2, setPlayer2] = useState({name: '', last: 3, count: 0})

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

    const reset = () => {
        // Clear all grids and winner message
        setTable([0,0,0,0,0,0,0,0,0]);
        setWinner([]);
        setLast([])
        setPlayer1({count:0})
        setPlayer2({count:0})
           }

    const playAgain=() =>{
        setTable([0,0,0,0,0,0,0,0,0]);
        setWinner([]);
        setLast([])
    }

    const gameOver = () => {
            setTimeout(() => {
                setTable([0,0,0,0,0,0,0,0,0]);
                setWinner([]);
                console.log('game over');
            },2000);
        console.log(player1.last, 'player1.last')
        console.log(last, 'last')
        if (player1.last === last ) {
            setPlayer1({...player1, count: player1.count + 1})
            alert('winner is: ' + player1.name )
        } else {
            setPlayer2({...player2, count: player2.count + 1})
            alert('winner is: ' + player2.name )

        }
    }

    
    
    console.log(winner);
    return (
    <div className='main-table'>
        <h1 className="h1"> Tic Tac Toe </h1>
      <table className='table'>
      <tr>
    <th>{player1.name ? (player1.name + ' Using ' + 'X') : 'Player1 Name'  }</th>
    <th>{player2.name ? (player2.name + ' Using ' + 'O') : 'Player2 Name'}</th>
     </tr>
  <tr>
    <td>{player1.count}</td>
    <td>{player2.count}</td>
      </tr>
      </table>
      <div className='addBtn'>
      <button className="playerbtn" onClick={() =>{
            const name = prompt('x player name');
            setPlayer1( {...player1, name });
      }}>Add player 1</button>
      <button className="playerbtn" onClick={() =>{
           const name = prompt('0 player name');
          setPlayer2( {...player2, name });
      }}>Add player 2</button>
      </div>
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
        <div className='lastBtn'>
        <button className="again" onClick={playAgain}>Play again</button>
        <button className="again" onClick={reset}>Reset Result</button>
        </div>
    </div>
    )
}

export default Table;
