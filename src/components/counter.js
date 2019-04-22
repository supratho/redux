//step4
import React from 'react';
import {incrementCount,decrementCount} from '../actions/counterAction';
import {connect} from 'react-redux';

class Counter extends React.Component {
     render(){
         const { count,incrementCount,decrementCount}=this.props;

         return(
             <div>
               
                 <button onClick={()=>decrementCount()}>-</button>
                 <span >{count}</span>
                 <button onClick={()=>incrementCount()}>+</button>
             </div>
         );
     }
 }
 const mapStateToProps=(state)=>({
     count:state
 })

 const mapDispatchToProps=(dispatch)=>({
     decrementCount: () => dispatch(decrementCount()),
     incrementCount: () => dispatch(incrementCount())
 });


 export default connect(mapStateToProps,mapDispatchToProps)(Counter);