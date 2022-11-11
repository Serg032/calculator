import { TextField} from "@mui/material";

const Display = ({storage}) => {
    return <>
     <TextField value={storage} disabled variant='outlined' />
    </>
}

export default Display