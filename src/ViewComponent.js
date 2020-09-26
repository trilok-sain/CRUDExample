import React , {useState} from 'react';
import { TextField, Button, Container, Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
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
    }
})
export default function ViewComponent(props){
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [arrIndex, setArrIndex] =useState(null)
    const classes = useStyles();

    const edit = (index) => {
        setName(props.list[index].name);
        setContact(props.list[index].contact);
        setArrIndex(index);
    }

    const submitForm = () => {
        if(arrIndex || arrIndex === 0){
            setArrIndex("");
            props.updateContactAction({name,contact}, arrIndex);
        }
        else 
            props.addContactAction({name,contact})
        setName("");
        setContact("");
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
                            props.list.map((value, index) => {
                                return (
                                    <TableRow key={value.name+value.contact+index}>
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell>{value.contact}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={()=>edit(index)}>Edit</Button>
                                            <Button variant="contained" color="secondary" className={classes.contatInput} onClick={()=>props.deleteContactAction(index)}>Delete</Button></TableCell>
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