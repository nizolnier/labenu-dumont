import axios from 'axios'
import React from 'react'
import NavBar from '../../components/NavBar'
import {baseUrl} from '../../constants/urls'
import { useInput } from '../../hooks/useInput'
import {useTripsList} from '../../hooks/useTripsList'
import Countries from '../../components/Countries'

function ApplyPage() {
  const [trips, loaded] = useTripsList()
  const [name, handleName] = useInput("")
  const [age, handleAge] = useInput(18)
  const [reason, handleReason] = useInput("")
  const [profession, handleProfession] = useInput("")
  const [country, handleCountry] = useInput("")
  const [tripId, handleTripId] = useInput("")

  console.log(name)
  const applyToTrip = () => {
    
    const body = {
      name: name,
      age: age,
      applicationText: reason,
      profession: profession,
      country: country
    }

    axios.post(`${baseUrl}/trips/${tripId}/apply`, body).then(() => {
      window.alert(`Formulário enviado com sucesso! Entraremos em contato ${name}`)
    }).catch((err) => {
      console.log(err)
    })

  }  
  return (
    
    <div>
        <NavBar />
        <p>Apply</p>
        <input placeholder="nome" value={name} onChange={handleName}/>
        <input placeholder="idade" value={age} onChange={handleAge} />
        <input placeholder="por que" value={reason} onChange={handleReason}/>
        <input placeholder="profissao" value={profession} onChange={handleProfession} />
        <Countries country={country} handle={handleCountry}/>
        <select value={tripId} onChange={handleTripId}>
          {trips.map((item) => {
            return <option value={item.id}>{item.name}</option>
          })}
        </select>
        <button onClick={applyToTrip}>Aplicar</button>
    </div>
  );
}

export default ApplyPage;