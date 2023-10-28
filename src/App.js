import { useEffect,useState } from 'react'


function App() {
  const [credentials, setcredentials] = useState({ title: "", notes: "",id:null})
  const [allnotes,setallnotes]=useState([]);

  

 
  const loaddata=async ()=>{
    let response=await fetch("http://localhost:5000/api/allnotes",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
  
    response=await response.json();
    setallnotes(response[0]);
   console.log(response[0]);
  }
  
  useEffect(()=>{
    loaddata();
  },[])





  const Handlesubmit = async (e) => {
    
    e.preventDefault();
   
      const response = await fetch("http://localhost:5000/api/addnotes", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: credentials.title, notes: credentials.notes})
          
      });
      const json = await response.json();
      console.log(json);
    
    
  }


  const handledelete = async (notetitle) => { 
    
    try {
      await fetch("http://localhost:5000/api/deletenotes", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: notetitle})
          
      });
      console.log('Item deleted');
      console.log(notetitle);
      loaddata();
     
    } catch (error) {
      console.error(error);
    }
      
    
    
};





const handleupdate = async (ptitle) => { 
  
  try {
    await fetch("http://localhost:5000/api/updatenotes", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ptitle:ptitle,newtitle: credentials.title,newnotes: credentials.notes})
        
    });
    console.log('Item deleted');
   
    loaddata();
   
  } catch (error) {
    console.error(error);
  }
    
  
};


const handleEditClick = (data) => {
  setcredentials({ id: data._id, title: data.title, notes: data.notes });
};



  const onchange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
     
      <div className='container'>
                <div className='mb-2 mt-2'>
                    <h1>Add a Note</h1>
                </div>
                <form onSubmit={Handlesubmit}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Name</label>
                        <input type="text" className="form-control white-text " placeholder='Enter Title' style={{ "backgroundColor": "black" ,"color":"white"}} name='title' value={credentials.title} onChange={onchange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Email address</label>
                        <input  type="text" className="form-control white-text" placeholder='Enter the note' style={{ "backgroundColor": "black","color":"white" }} name='notes' value={credentials.notes} onChange={onchange} />

                    </div>
                    

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    
                </form>
            </div>
            <hr/>
            
            <h1 className='m-4'>All Notes</h1>


           
           <div className='container '>
                {
                    allnotes!==[]?
                    allnotes.map((data)=>{
                        return(
                          <div className='col-12 col-md-6 col-lg-3'>
                            <div className="card m-2" style={{ "width": "18rem","maxHeight": "100", objectFit: "contain" ,backgroundColor:"black"}}>
                             
                                <div className="card-body" key={data._id}>
                                    <h5 className="card-title text-white" style={{"fontWeight":"bold"}}>{data.title}</h5>
                                    <p className='text-white'>{data.notes}</p>
                                    
                                    
                                    
                                  {/* <a href='/Update.js' className='btn btn-primary m-2 mb-0'>Update</a> */}
                                  <button type="button" class="btn btn-primary m-2 mb-0" onClick={ ()=>handleEditClick(data)}>Edit</button> 
                                  <button type="button" class="btn btn-danger m-2 mb-0" onClick={ ()=>handledelete(data.title)}>Delete</button> 
                                 
                                  {(credentials.id===data._id )&& (
        <div>
          <h4 className='m-2' style={{ "backgroundColor": "black" ,"color":"white"}} >Edit Note</h4>
          <input className="form-control white-text m-1" style={{ "backgroundColor": "black" ,"color":"white"}}
            type="text"
            placeholder="Name"
            value={credentials.title}
            onChange={(e) => setcredentials({ ...credentials, title: e.target.value })}
          />
          <input className="form-control white-text m-1 " style={{ "backgroundColor": "black" ,"color":"white"}}
            type="text"
            placeholder="Description"
            value={credentials.notes}
            onChange={(e) => setcredentials({ ...credentials, notes: e.target.value })}
          />
          <button class="btn btn-success m-1 mb-0" onClick={() =>handleupdate(data.title)}>Update</button>
        </div>
      )}

                                   

                                </div>
                            </div>        
                     </div>
                        )
                    }):""
                }
             
           </div>


           
            
    </>
  );
}

export default App;
