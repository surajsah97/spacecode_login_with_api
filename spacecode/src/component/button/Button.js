import React from 'react';
import Button from '@material-ui/core/Button';
import { CustomButtonStyles } from './styles';

const CustomButton = (props) => {
    const classes = CustomButtonStyles();
    const { children, color, variant, fullWidth, onClick, disabled, type, fontsize, width, noPadding } = props;
    return (
        <div>
            <Button
                variant={variant}
                disabled={disabled}
                fullWidth={fullWidth}
                color={color}
                onClick={onClick}
                className={classes.button}
                type={type}
                style={{
                    fontSize: fontsize && fontsize,
                    width: width && width,
                    backgroundColor: color,
                    padding:  '15px 30px'
                }}
            >
                {children}
            </Button>
        </div>
    );
};

export default CustomButton;