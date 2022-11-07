import React, {FC} from 'react'

export type Props={
    Text:string
}
export const Divider:FC<Props>=(props)=>{
    return(
       <div className={'divider-wrapper'}>
           <div className={'divider-line'}/>
           <h3>{props.Text}</h3>
           <div className={'divider-line'}/>
       </div>
    )
}
