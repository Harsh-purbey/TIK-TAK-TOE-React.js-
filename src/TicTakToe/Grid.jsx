import React ,{useState} from 'react'
import Box from './Box'

const Grid = () => {

    const [state , setState] =useState(Array(9).fill(null));
    const [isXturn , setTurn] =useState(true);

    const cheekWinner = () => {
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for( let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a] !== null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
           
        }
        return false;

    }

    let isWinner = cheekWinner();
    
    const handleInput = (index) => {
        if(state[index]!==null) return;
        let temp =[...state];
        temp[index] = isXturn ? "X" : "O";
        setState(temp)
        setTurn(!isXturn)
    }

  return (
    <>
     <div style={{width:"100vw" , height:"100vh" , display:"flex" ,justifyContent:"center" , alignItems:"center", flexDirection:"column"}}>
    { isWinner ? <><h1>WINNER IS {`"${isWinner}"`}</h1>
    <br />
    <button onClick={() => setState(Array(9).fill(null))}><h2> PLAY AGAIN</h2>
   </button>
    </> :<>
     <div ><h1>TURN { isXturn ? ' "X" ' : ' "O" '}</h1></div>

    <div className='grid' style={{display:"flex" , flexDirection:"row"}}>

    

        <div className="row">
            
            <Box value={state[0]} onClick={()=>handleInput(0)}/>
            <Box value={state[1]} onClick={()=>handleInput(1)}/>
            <Box value={state[2]} onClick={()=>handleInput(2)}/>
        </div>
        <div className="row">
            <Box value={state[3]} onClick={()=>handleInput(3)}/>
            <Box value={state[4]} onClick={()=>handleInput(4)}/>
            <Box value={state[5]} onClick={()=>handleInput(5)}/>
        </div>
        <div className="row">
            <Box value={state[6]} onClick={()=>handleInput(6)}/>
            <Box value={state[7]} onClick={()=>handleInput(7)}/>
            <Box value={state[8]} onClick={()=>handleInput(8)}/>
        </div>

    </div>
    </>
    }
    </div>
    </>
  )
}

export default Grid
