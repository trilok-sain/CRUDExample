import React , {useEffect, useState} from 'react';
import { TextField, Button, Container, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, CircularProgress} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useStore, useSelector } from 'react-redux';
import {
    addContactAction,
    deleteContactAction,
    updateContactAction,
    getDataContactAction
  } from '../src/redux/action'
const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '15px'
    },
    tableContainer: {
        marginTop: "50px"
    },
    contatInput: {
        marginLeft: "10px"
    },
})
export default function ViewComponent(props){
    const dispatch = useDispatch();
    const store = useStore()
    const constactList = useSelector(state => state.contactList);
    const loading = useSelector(state => state.loading);

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [arrIndex, setArrIndex] =useState(null)
    const classes = useStyles();

    useEffect(() => {
        dispatch(getDataContactAction())
    }, [])

    const edit = (index) => {
        setName(constactList[index].name);
        setContact(constactList[index].phone);
        setArrIndex(index);
    }

    const submitForm = () => {
        if(arrIndex || arrIndex === 0){
            setArrIndex("");
            dispatch(updateContactAction({name,contact}, arrIndex))
        }
        else 
            dispatch(addContactAction({name, contact}))
        setName("");
        setContact("");
    }
    
    if(loading){
        return (
            <Container className={classes.root}>
                <CircularProgress />
            </Container>
        )
    }

    return (
        <Container className={classes.root}>
            <TextField id="filled-basic" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField id="filled-basic" className={classes.contatInput} label="Contact" variant="standard" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={submitForm}> {arrIndex || arrIndex === 0 ? "Update" :"Add"} </Button>
            <TableContainer className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact</TableCell>  
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                           constactList.map((value, index) => {
                                return (
                                    <TableRow key={value.name+value.phone+value.id}>
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell>{value.phone}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={()=>edit(index)}>Edit</Button>
                                            <Button variant="contained" color="secondary" className={classes.contatInput} onClick={()=>dispatch(deleteContactAction(index))}>Delete</Button></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        <TableRow>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}       