import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

import React from 'react'

const Chekbox = (props) => {
const {onChange,checked,label}=props

    return (
        
          <FormControlLabel
                  label={label}
                  
                  control={
                    <Checkbox onChange={onChange} checked={checked}  />
                  }
                />
          
    )
}
export default Chekbox;




