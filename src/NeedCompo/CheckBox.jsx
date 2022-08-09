import React, { useState } from 'react'

const CheckBox = () => {
    const bha =['Bharat','Konda','A','Bindu']
    const {isChecked, setIsChecked} = useState
   const checkboxChange = () => {
        setIsChecked = isChecked
    }
    return(
        <>
        <div>
            <label>
                <input
                    type="checkbox"
                    value={bha}
                    checked={isChecked}
                    onChange={checkboxChange}
                />
            </label>
        </div>
        </>
    )
}
export default CheckBox;