import axios from 'axios'
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'

export const Details = () => {
    
    const {id}= useParams()
    const loaders = useLoaderData();  

    useEffect(()=>{
      
    var p =document.getElementsByTagName("p")
    var choice = document.getElementsByClassName("choice")
    var dragItem = null

 
    for(var i of p){
      i.addEventListener("dragstart",dragstart)
      i.addEventListener("dragend",dragend)
    }
    function dragstart(){
      dragItem = this;
      setTimeout(()=>this.style.display="none")
    }
    function dragend(){
      setTimeout(()=>this.style.display="block")
      dragItem = null;
    }
   
    for(var j of choice){
      j.addEventListener("dragover",dragover)
      j.addEventListener("dragenter",dragenter)
      j.addEventListener("dragleave",dragleave)
      j.addEventListener("drop",drop)
    }
    function drop(){
      this.append(dragItem);
    }
    function dragover(e){
      e.preventDefault()
      
    }
    function dragenter(e){
      e.preventDefault()
    }
    function dragleave(e){
      e.preventDefault()
    }

    },[])
     return (
    <>
    <div className='header'> 
    Team Information
    </div>
    <div className="container">
			<div className="row">
				<div className="tree">
					<ul>
						<li> 
          <div className='head'>
         <p>Project Manager</p>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
         <img src={loaders.img1} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
         <p style={{marginLeft:"10px"}}>{loaders.pname}</p>
         </div>
         </div>
						<ul>
           <li> <div className='div1'> <p>Team Lead</p>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
         <img src={loaders.img1} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
         <p style={{marginLeft:"10px"}}>{loaders.tlname1}</p>
         </div></div>
							<ul>
								<li> 
                <div className='choice'>
      <h3 style={{textAlign:"center",color:"darkblue",marginBottom:"20px"}}>Team members</h3>
      {loaders.teammembers1.map((item,index)=><p draggable='true' key={index}>{item}</p>)}
      </div>
                </li>
							</ul>
						</li>
						<li><div className='div1'> <p>Team Lead</p>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
         <img src={loaders.img2} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
         <p style={{marginLeft:"10px"}}>{loaders.tlname2}</p>
         </div></div>
						<ul>
							<li>   
                <div className='choice'>
        <h3 style={{textAlign:"center",color:"darkblue",marginBottom:"20px"}}>Team members</h3>
      {loaders.teammembers2.map((item,index)=><p draggable="true" key={index}>{item}</p>)}
      </div></li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</div>
</>

    // <section>
      // <div className='header'> 
      //   Team Information
      // </div>
    //   <div className='head'>
    //      <p>Project Manager</p>
    //      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
    //      <img src={loaders.img} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
    //      <p style={{marginLeft:"10px"}}>{loaders.pname}</p>
    //      </div>
    //   </div>
    //   <div className='team'>
        //  <div className='div1'> <p>Team Lead</p>
        //  <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
        //  <img src={loaders.img} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
        //  <p style={{marginLeft:"10px"}}>{loaders.tlname1}</p>
        //  </div></div>
    //      <div className='div1'> <p>Team Lead</p>
    //      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
    //      <img src={loaders.img} alt="pimage" width="40" height="40" style={{borderRadius:"100%"}}/>
    //      <p style={{marginLeft:"10px"}}>{loaders.tlname2}</p>
    //      </div></div>
    //   </div>
    //   <div className='section'>
      // <div className='choice class1'>
      // <h3 style={{textAlign:"center",color:"darkblue",marginBottom:"20px"}}>Team members</h3>
      // {loaders.teammembers2.map((item,index)=><p draggable='true' key={index}>{item}</p>)}
      // </div>
      // <div className='choice class2'>
      //   <h3 style={{textAlign:"center",color:"darkblue",marginBottom:"20px"}}>Team members</h3>
      // {loaders.teammembers2.map((item,index)=><p draggable="true" key={index}>{item}</p>)}
      // </div>
    //   </div>
    // </section>  
  )
}

export const careerdetails =async({params})=>{
    const {id} = params
      const res = await axios.get("http://localhost:8000/company/"+id);
      return res.data;
  }