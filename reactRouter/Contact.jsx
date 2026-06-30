function Contact(){

    return(<> <div className='row  justify-content-center'>
            <div className="col-6">
                <form className='bg-dark text-white mt-4 p-4 text-center' style={{borderRadius:"30px"}}>
                    <h4 >Contact Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis?</p>
                    <label>Name:</label><input type='text' placeholder='Enter  name here' nam='task'  className='ms-2 mt-4 w-50'  /><br/>
                    <label>Mail id:</label><input type='text' placeholder='Enter mail id here' name='task'  className='ms-2 mt-4 w-50'  /><br/>
                     <label>Contact:</label><input type='text' placeholder='Enter phone number  here' nam='task'  className='ms-2 mt-4 w-50'  /><br/>
                      <label>Location:</label><input type='text' placeholder='Enter location here' nam='task'  className='ms-2 mt-4 w-50'  /><br/>
                     <div className='mt-2 text-light'>
                                    <label>Gender:</label>
                                     <input type='radio' className='form-check-input  ms-2 me-2 ' name='gender' id='female' value='male'  />
                                     <label htmlFor='male' >Male</label>
                                    <input type='radio' className='form-check-input me-2 ms-4' name='gender' id='female' value='female'  />
                                    <label htmlFor='female' >Female</label>
                                    <br />
                                    
                                </div>
                                <br />
                               <textarea rows={5} col={25} style={{width:"400px"}} placeholder="comment here...."></textarea><br/>

                                
                    
                    <input type='submit' value='SUBMIT' className='btn btn-secondary text-dark mt-4 w-10'  onClick={()=>alert("Form submitted successfully!!")}/>   
                </form>

            </div>
        </div>
    
    
    </>)
}
export default Contact;