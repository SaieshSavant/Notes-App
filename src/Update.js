import React from 'react'
import { useState } from 'react'
export default function Update() {
         
    const [credentials, setcredentials] = useState({ title: "", notes: ""})
    
  

  return (
        <>
              <div className='container'>
                <div className='mb-2 mt-2'>
                    <h1>Update the Note</h1>
                </div>
                <form onSubmit={Handlesubmit}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Name</label>
                        <input type="text" className="form-control white-text " style={{ "backgroundColor": "black" ,"color":"white"}} name='title' value={credentials.title} onChange={onchange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Email address</label>
                        <input  type="text" className="form-control white-text" style={{ "backgroundColor": "black","color":"white" }} name='notes' value={credentials.notes} onChange={onchange} />

                    </div>
                    

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    
                </form>
            </div>
        </>
  )
}
