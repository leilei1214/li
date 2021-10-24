import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './css/style.css';
import list from './list.json'
import list1 from './list1.json'
import list2 from './list2.json'
import list3 from './list3.json'
export default class Home extends Component{
state = {
    listdata:"123"
};
onKeyUp = (event)=> {
    let listvalue =" "
    if(event.charCode ==13){
        const a =event.target.value;
        list.map((data)=>{
            if (data.name == event.target.value) {
                listvalue=(
                <div>
                <img src={require("./"+data.img+".png")} alt="111" />
                <span>{data.name}</span>
                </div> )
            } 
        }
        )
        list1.map((data)=>{
            if (data.name == event.target.value) {
                listvalue=(
                <div>
                <img src={require("./"+data.img+".png")} alt="111" />
                <span>{data.name}</span>
                </div> )
            } 
        }
        )
        list2.map((data)=>{
            if (data.name == event.target.value) {
                listvalue=(
                <div>
                <img src={require("./"+data.img+".png")} alt="111" />
                <span>{data.name}</span>
                </div> )
            } 
        }
        )        
        list3.map((data)=>{
            if (data.name == event.target.value) {
                listvalue=(
                <div>
                <img src={require("./"+data.img+".png")} alt="111" />
                <span>{data.name}</span>
                </div> )
            } 
        }
        ) 

    }
    ReactDOM.render(
        <div>{listvalue}</div>,
        document.getElementById("good") ,
    )
        // console.log( this.state)
        // const {listdata} =  this.state;
        //  this.setState({listdata:<div>{listvalue}</div>})
}

top (e) {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

};
fc2 = (e) =>{
    e.preventDefault();
    const  listvalue = list1.map((data)=>
        <div>
            <img src={require("./"+data.img+".png")} alt="111" />
            <span>{data.name}</span>
        </div>

    );
    const {listdata} =  this.state;
    this.setState({listdata:<div>{listvalue}</div>})
    
}
fc3 = (e)=>{
    e.preventDefault();
    const  listvalue = list2.map((data)=>
        <div>
            <img src={require("./"+data.img+".png")} alt="111" />
            <span>{data.name}</span>
        </div>

    );
    const {listdata} =  this.state;

    this.setState({listdata:<div>{listvalue}</div>})

    
}
fc4 = (e) =>{
    e.preventDefault();
    const  listvalue = list3.map((data)=>
        <div>
            <img src={require("./"+data.img+".png")} alt="111" />
            <span>{data.name}</span>
        </div>

    );
    const {listdata} =  this.state;

    this.setState({listdata:<div>{listvalue}</div>})

    
}
fc1 = (e)=>{
    e.preventDefault();
    const  listvalue= list.map((data)=>
        // images = require(data.img),
        <div>
            <img src={require("./"+data.img+".png")} alt="111" />
            <span>{data.name}</span>
        </div>
        // )

    );
    
    const {listdata} =  this.state.listdata;
    this.setState({listdata:<div>{listvalue}</div>})
    
}
render() {
    const {listdata} = this.state;
    // init();
     if(this.state.listdata=="123"){
         const  listvalue= list.map((data)=>
         <div>
             <img src={require("./"+data.img+".png")} alt="111" />
             <span>{data.name}</span>
         </div>
     
     );
     const {listdata} =  this.state.listdata;
     this.setState({listdata:<div>{listvalue}</div>})
    }


    // this.setState({listdata:<div>{listdata}</div>})

    return(
        　<div>
   <div className="content">
    <div className="example" >
        <i className="fa fa-search"></i>

        <input
        value ={this.state.inputvalue}
        onChange = { this.inputText }
        onKeyPress={this.onKeyUp.bind(this)}
         type="text" placeholder="Search.." name="search" />
        <span>&#10005;</span>
    </div>
      <div>
          <img src={require("./part_75428_3940907_76710.png" )} alt="1" />
      </div>
      <div className="back">
          <span>倒數計時</span>
          <span id="back"></span>
      </div>
      <div className="main">
          <div className="list">
              <ul>
                  <li><a href="#" onClick={this.fc1}>商品類型1</a></li>
                  <li><a href="#" onClick={this.fc2}>商品類型2</a></li>
                  <li><a href="#" onClick={this.fc3}>商品類型3</a></li>
                  <li><a href="#" onClick={this.fc4}>商品類型4</a></li>
              </ul>
          </div>
          <div id="good">
                {listdata}
          </div>
      </div>
</div>
<div className="top" onClick={this.top}><i className="fa fa-angle-up"></i></div> 
</div>

    )

}

}

