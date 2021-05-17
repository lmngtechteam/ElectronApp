import React from "react";
import { CustomDatePicker , CustomRangePicker } from 'app/components/persianDatePicker';

export default () => {
return (
    <div>
        <br/>    
        <br/>    
            <h1>date picker</h1>
            <CustomDatePicker/>
        <br/>    
            <h1>range picker</h1>
            <CustomRangePicker/>
        <br/>    
        <br/>    
    </div>
)
}

