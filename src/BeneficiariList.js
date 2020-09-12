import React from 'react'




function BeneficiariList (props){
    const benefArray = props.benef.map((user,i) =>{
        return <option key={i} value={user.name}>{user.name}</option>
      })
    return(
        <p>Beneficiar:{' '}
            <select onClick={props.onSelect}>
                {benefArray}
            </select>
        </p>
    )
}
export default BeneficiariList;