import React from 'react'
//import { Checkbox } from '@bit/segmentio.evergreen.checkbox';
import Input from "./Input"


function BeneficiariList (props){
    // const benefArray = props.benef.map((user,i) =>{
    //     return <Checkbox label={user.name} onChange={props.onCheck} />
    //   })

    return(
        <div>
        <p>Beneficiar:{' '}
            {/* <select onClick={props.onSelect}>
                {benefArray}
            </select> */}
        </p>
            <div>
            <Input benef={props.benef} onCheck={props.onCheck}/>
            </div>
        </div>
    )
}
export default BeneficiariList;