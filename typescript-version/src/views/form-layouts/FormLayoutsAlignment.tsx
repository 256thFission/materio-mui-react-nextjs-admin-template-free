// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import TaskService from 'src/service/task.services';
import {addDoc, collection,Timestamp} from "firebase/firestore";
import {db} from "../../firebase-config";
import firebase from "firebase/compat/app";

interface State {
  password: string
  showPassword: boolean
}

// Styled component for the form
const Form = styled('form')(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`
}))

const FormLayoutsAlignment = () => {
  // ** State
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  const [Name, setName] = useState("");
  const [UUID, setUUID] = useState("");
  const [Catagory, setCatagory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myentry = {
     Name,Time, Catagory, UUID,
    }
    console.log(Name, UUID)
    const current = new Date();
    const Time = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    try {
      await addDoc(collection(db, 'attendance'), {
        PerName: Name,
        UUID: UUID,
        Date: Time
      });

    } catch (err) {
      console.log(err);

return;
    }
  };


  const onNameChange = (e) => {
   console.log('Typed => $(e.target.value)')
    setName(e.target.value);
  }
  const onUUIDChange = (e) => {
    console.log('Typed => $(e.target.value)')
    setUUID(e.target.value);
  }

  return (
    <Card>
      <CardHeader title='Forensics 8p '  titleTypographyProps={{ variant: 'h6' }} />
      <CardContent sx={{ minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='h5'>Sign In</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                         label='Name'
                         onChange={onNameChange}
                         value={Name}
                         placeholder='Phillip McJavascript' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='UUID'
                         placeholder='123456'
                         value={UUID}
                         onChange={onUUIDChange}
              />


            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='eventname-label'>Event</InputLabel>
                <Select
                  label='Event'
                  defaultValue=''
                  id='eventname'
                  labelId='eventname-label'
                >
                  <MenuItem value='LD'>LD</MenuItem>
                  <MenuItem value='Policy'>Policy</MenuItem>
                  <MenuItem value='PF'>PF</MenuItem>
                  <MenuItem value='Parli'>Parli</MenuItem>
                  <MenuItem value='Parli'>Speech</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsAlignment
