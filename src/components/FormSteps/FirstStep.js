import React, {useState} from 'react'

const FirstStep = () => {

  const [householdNo, setHouseholdNo] = useState(1)

  return (
    <div className='form'>
      <h3>Let's Start with a quick carbon footprint estimate!</h3>

      <div className='continent_input' id='one'>
        <label>Please select the continent in which you live:</label>
        <select>
          <option>Africa</option>
        </select>
      </div>

      <label>How many people live in your household?</label>
      <div className='range_input'>
        <input className='range' type='range' min='1' max='8' step='1' value={householdNo} onChange={(e)=>setHouseholdNo(e.target.value)}/>
        <p className='counter'>{householdNo}</p>
      </div>

    </div>
  )
}

export default FirstStep