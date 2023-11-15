import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Employee() {
  const [inputdata, setInputdata] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    contactNumber: '',

  })

  // const [getemp, setGetemp] = useState({})

  // useEffect(() => {
  //   axios.get('http://localhost:4000/getemp')
  //     .then((res) => {
  //       console.log(res.data)
  //       setGetemp(res.data)
  //     })
  // }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputdata({
      ...inputdata,
      [name]: value
    });
    console.log('handleChange0', e)
    console.log('handleChange', e.name, e.value);
    console.log('handleChange2', inputdata);

  }

  const handlePost = () => {
    console.log(inputdata)
    axios.post('http://localhost:4000/postemp', inputdata)
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <>
      <div style={{ width: '100%', height: '100vh', border: '1px solid' }} className='parent-emp bg-secondary'>

        <div style={{ marginTop: '8em' }} className='d-flex container justify-content-center '>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputname" className="form-label">Employee Name</label>
              <input
                value={inputdata.name}
                onChange={(e) => handleChange(e)}
                type="text" className="form-control"
                id="exampleInputname"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">Employee Email</label>
              <input
                value={inputdata.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputage" className="form-label">Age</label>
              <input
                value={inputdata.age}
                onChange={handleChange}
                type="number"
                className="form-control"
                id="exampleInputage"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputoccupation" className="form-label">Occupation</label>
              <input
                value={inputdata.occupation}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="exampleInputoccupation"
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">ContactNumber</label>
              <input
                value={inputdata.contactNumber}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="exampleInputPassword" />
            </div>

          </form>

        </div>
        <div className='d-flex justify-content-center'>
          <button
            onClick={() => {
              handlePost()
            }}
            type="submit"
            className="btn btn-primary"
          >Submit</button>
        </div>
        {/* <div>
          <div class="table-responsive">
            <table class="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Column 1</th>
                  <th scope="col">Column 2</th>
                  <th scope="col">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {getemp.length > 0 && getemp.map((employee, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.contactNumber}</td>
                    <td>{employee.jobrole}</td>
                    <td>{employee.experience}</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div> */}
      </div>

    </>
  )
}

export default Employee
