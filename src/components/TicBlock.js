import {ReactComponent as Circle} from "../img/circle.svg"
import {ReactComponent as X} from '../img/x.svg'
import React from 'react'

function TicBlock(props) {
    const number = props.number 
    const [last, setLast] = props.last
    const [table, setTable] = props.table
    const winner = props.winner

    const Image = props => {
        if (props.tableN === 5) {
            return <X fill={winner.indexOf(number) !== -1? 'red':""} width="100%" height="100%"/>
        } else if ( props.tableN === 3 ){
            return <Circle fill={winner.indexOf(number) !== -1? 'red':""} width="100%" height="100%"/>
        } else {
         return <img/>
        }
    }
    
    return (
        <div className="ticblock" onClick={() => {
            if (table[number] === 0 && winner.length === 0) {
            setTable(( () => {
                let newTable = [...table];
                let newLast = last === 3? 5:3
                newTable[number] = newLast
                setLast(newLast)
                return newTable
            })())}
            }}>
            <Image tableN={table[number]}/> 
        </div>
    )
}

export default TicBlock
