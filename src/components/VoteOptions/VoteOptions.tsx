import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";
export interface VoteOptionsProps{
onLeaveFeedback: (type: VoteType)=> void;
onReset: ()=>void;
canReset: boolean;
}

export default function VoteOptions({onLeaveFeedback, onReset, canReset}:VoteOptionsProps){

    return <div className={css.container}>
      <button className={css.button} onClick={() => onLeaveFeedback('good')}>Good</button>
    <button className={css.button} onClick={()=> onLeaveFeedback('neutral')} >Neutral</button>
    <button className={css.button} onClick={()=> onLeaveFeedback('bad')} >Bad</button>
    {canReset ?(
      <button className={`${css.button} ${css.reset}`} onClick={()=> onReset()}>Reset</button>
    ):(<></>)}
  </div>  
}