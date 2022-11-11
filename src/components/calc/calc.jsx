import {Box} from "@mui/material";
import Display from "../display/display";
import CalcButton from "../button/button";
import './calc.css'
import {useState} from "react";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../helpers/theme";

const Calc = () => {
    const [num, setNum] = useState([])
    const [oldNum, setOldNumb] = useState([])
    const [operator, setOperator] = useState("")
    const [numberStatus, setNumberStatus] = useState(false)
    const [operatorStatus, setOperatorStatus] = useState(false)
    const [equalStatus, setEqualStatus] = useState(true)

    function addNumber(event){
        let value = Number(event.target.value)
            if (!operator){
                setNum((num + value).toString())
                setEqualStatus(false)
                setEqualStatus(true)
            } else {
                setNum((num + value).toString())
                setEqualStatus(false)
                setOperatorStatus(false)
            }
    }
    function operatorHandler(event){
        setOperatorStatus(true)
        setNumberStatus(false)
        setOperator(event.target.value)
        setOldNumb(num)
        setNum([])
    }

    function clear(){
        setNum([])
        setOldNumb([])
        setOperator('')
        setNumberStatus(false)
        setOperatorStatus(false)
        setEqualStatus(true)
    }

    function returnOne(){
        let currentValue = num
            setNum(currentValue.slice(0,currentValue.length -1))
    }

    function calc(){

        if (operator === '+'){
            setNum([Number(num) + Number(oldNum)])
        } else {
            setNum([Number(oldNum)- Number(num)])
        }
        setOperatorStatus(false)
        setEqualStatus(true)
        setNumberStatus(true)
    }

    return <Box
        sx={{
            boxShadow: 2,
            borderRadius: '16px',
            backgroundColor: '#fcfefe'
        }}
        width={'25em'}
        id='calc'
    >
        <Box id='display'>
            <Display storage={num}/>
        </Box>
        <ThemeProvider theme={theme}>
        <Box id='buttons'>
            <Box className='numbers'>
                <Box className='rowOne'>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={7}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={8}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={9}/>
                </Box>
                <Box className='rowTwo'>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={4}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={5}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={6}/>

                </Box>
                <Box>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={1}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={2}/>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={3}/>
                </Box>
                <Box className='equal'>
                    <CalcButton variant={'contained'} status={numberStatus} onClick={addNumber} value={0}/>
                </Box>
            </Box>
            <Box className='operators'>
                <Box className='rowOne'>
                    <CalcButton variant={'contained'} color={'success'} status={operatorStatus} onClick={operatorHandler} value={'+'}/>
                </Box>
                <Box className='rowTwo'>
                    <CalcButton variant={'contained'} color={'success'} status={operatorStatus} onClick={operatorHandler} value={'-'}/>
                </Box>
                <Box>
                    <CalcButton variant={'contained'} status={equalStatus} onClick={calc} value={'='}/>
                </Box>
            </Box>
            <Box className='deleter'>
                <Box className='rowOne'>
                    <CalcButton variant={'contained'} color={'error'} onClick={clear} value={'c'}/>
                </Box>
                <Box className='rowTwo'>
                    <CalcButton variant={'contained'} color={'error'} onClick={returnOne} value={'del'}/>
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
    </Box>
}

export default Calc