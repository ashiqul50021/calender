import React from 'react';
import img from '../../../Img/ashiq.jpg';
import './TrainerList.css'

const TrainerList = () => {
    return (
        <div>
            <div className="">
                <div className="row">
                    <div className='mt-4'>
                        {/* <img src="src/Img/ashiq.jpg" alt="" /> */}
                    <button type="button" class="btn btn-style w-75"><img src={img} style={{width:'82.37px', height:'80px', borderRadius:'64px',marginLeft:'-125px', marginRight:'10px'}} alt="" /> <span className='text-white'> Ashiqul Islam</span> 
                    <button type="button" style={{marginLeft:'25px',marginRight:'-128px', backgroundColor:'#FDADD3', width:'74px', height:'80px', borderRadius:'20px'}} class="btn "><i class="fas fa-arrow-left text-white"></i></button>
                    </button>
                        </div>
                    <div className=''>
                        {/* <img src="src/Img/ashiq.jpg" alt="" /> */}
                    <button type="button" class="btn  w-75"><img src={img} style={{width:'82.37px', height:'80px', borderRadius:'64px',marginLeft:'-125px', marginRight:'10px'}} alt="" /> <span className='text-dark'> Ashiqul Islam</span> 
                    </button>
                        </div>
                    <div className=''>
                        {/* <img src="src/Img/ashiq.jpg" alt="" /> */}
                    <button type="button" class="btn w-75" ><img src={img} style={{width:'82.37px', height:'80px', borderRadius:'64px',marginLeft:'-125px', marginRight:'10px'}} alt="" /> <span className='text-dark'> Ashiqul Islam</span> 
                   
                    </button>
                        </div>
                    <div className=''>
                        {/* <img src="src/Img/ashiq.jpg" alt="" /> */}
                    <button type="button" class="btn w-75"><img src={img} style={{width:'82.37px', height:'80px', borderRadius:'64px',marginLeft:'-125px', marginRight:'10px'}} alt="" /> <span className='text-dark'> Ashiqul Islam</span> 
                   
                    </button>
                        </div>
                    <div className=''>
                        {/* <img src="src/Img/ashiq.jpg" alt="" /> */}
                    <button type="button" class="btn w-75" ><img src={img} style={{width:'82.37px', height:'80px', borderRadius:'64px',marginLeft:'-125px', marginRight:'10px'}} alt="" /> <span className='text-dark'> Ashiqul Islam</span> 
                    
                    </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerList;