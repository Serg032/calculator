import {Button} from "@mui/material";
import './button.css'
const CalcButton = ({value, onClick, status, variant, color}) => {

    return <>
        <Button disabled={status === true} value={value} onClick={onClick} id='button' variant={variant} color={color}>
            {value}
        </Button>
    </>
}

export default CalcButton