import React,{ useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
const navigate = useNavigate();
const {id} = useParams();
const [ student, setStudent ] = useState({

    
    firstname:"",
    lasttname:"",
    age :"",
    city:"",
    
})

const loadUSerWithId = async() =>{
const res = await axios.get(``)


}

    return (
    <div>
      


    </div>
  )
}

 