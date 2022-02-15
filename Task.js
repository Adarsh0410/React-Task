import React, { Component } from 'react';
import './index.css';
import burger from "./burger.jpg";
import fries from "./fries.jpeg";
import coke from "./coke.jpg";
import pizza from "./pizza.jpg";
// import {motion} from "framer-motion";



class Task extends Component {

  constructor(props){
    super(props);
    this.state={
      change:{
        price1:100,
        price2:80,
        price3:45,
        price4:280,
        count:0,
        Total:0
      }
    }
  }

  decr=()=>{
    this.setState(
      {
        change:
        {
          ...this.state.change,
          count:this.state.change.count-1 > 0 ? this.state.change.count-1:1
        }
      }
    )
  }

  incr=()=>
  {
    this.setState(
      {
        change:
        {
          ...this.state.change,
          count:this.state.change.count+1
        }
      }
    )
  }

  render() {
    return (
        <div className='body'>

            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                       <div className='col-md-2'>
                          <p><i class="fa fa-angellist fa-2x"></i>Food's Restaurent</p>
                       </div>
                       <div className='col-md-12'>
                         <p><i className="fa fa-shopping-cart fa-2x"></i></p>
                       </div>
                    </div>
             </nav>
             <div className='center'>
                  <h1>Welcome To Food's</h1>
                  <h1>Kitchen</h1>
                  <button className='btn btn-primary'>Go to Menu</button>
             </div>
             <div className='item'>MENU ITEMS</div>
             <div className='boxes'>
               <div className='col-md-4'>
                 <div className='card'>
                   <div className='card-body'>
                     <img src={burger} style={{width:"310px" }}/>
                     <h3>Hamburger</h3>
                     <p>Price : 100</p>
                     <p>Qty : {this.state.change.count} </p>
                     <p>Cost (INR) :{(this.state.change.count)*(this.state.change.price1)}</p>   
                     <button className='btn btn-primary'><i onClick={this.incr} class="fa fa-plus fa-2x"></i></button>  
                     <button className='btn btn-danger'><i onClick={this.decr} class="fa fa-minus fa-2x"></i></button>                
                   </div>
                 </div>
               </div>
               <div className='col-md-4'>
                 <div className='card'>
                   <div className='card-body'>
                   <img src={fries} style={{width:"310px" , height:"210px"}}/>
                     <h3>Fries</h3>
                     <p>Price : 80</p>
                     <p>Qty : {this.state.change.count}</p>
                     <p>Cost(INR) : {(this.state.change.count)*(this.state.change.price2)}</p> 
                     <button className='btn btn-primary'><i onClick={this.incr} class="fa fa-plus fa-2x"></i></button>  
                     <button className='btn btn-danger'><i onClick={this.decr} class="fa fa-minus fa-2x"></i></button>
                   </div>
                 </div>
               </div>
               <div className='col-md-4'>
                 <div className='card'>
                   <div className='card-body'>
                   <img src={coke} style={{width:"310px" }}/>
                     <h3>Coke</h3>
                     <p>Price : 45</p>
                     <p>Qty : {this.state.change.count}</p>
                     <p>Cost(INR) : {(this.state.change.count)*(this.state.change.price3)}</p> 
                     <button className='btn btn-primary'><i onClick={this.incr} class="fa fa-plus fa-2x"></i></button>  
                     <button className='btn btn-danger'><i onClick={this.decr} class="fa fa-minus fa-2x"></i></button>
                   </div>
                 </div>
               </div>
             </div>
             <div className='col-md-4 mb-5'>
                 <div className='card'>
                   <div className='card-body'>
                   <img src={pizza} style={{width:"310px" }}/>
                     <h3>Pizza</h3>
                     <p>Price : 280</p>
                     <p>Qty : {this.state.change.count}</p>
                     <p>Cost(INR) : {(this.state.change.count)*(this.state.change.price4)}</p> 
                     <button className='btn btn-primary'><i onClick={this.incr} class="fa fa-plus fa-2x"></i></button>  
                     <button className='btn btn-danger'><i onClick={this.decr} class="fa fa-minus fa-2x"></i></button>
                   </div>
                 </div>
               </div>
               
               <div className='card' style={{width:"1000px", height:"150px" , marginBottom:"50px" ,marginLeft:"300px"}}>
                    <h1 style={{textAlign:"center" , marginTop:"30px"}}>CHECKOUT</h1>
                    <h4 style={{marginLeft:"50px"}}>Thank You for your order</h4>
               </div>
               
        </div>
    )
  }
}

export default Task;
