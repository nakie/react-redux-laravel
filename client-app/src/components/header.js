import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
class Header extends Component {

  renderLinks(){
      console.log(this.props.authenticated);
    if(this.props.authenticated){
      return[
      <li className="nav-item pull-xs-left" key={2}>
      <Link className="nav-item nav-link" to="/post/add">New Post</Link>
      </li>,
     <li className="nav-item pull-xs-right" key={1}>
      <Link className="nav-item nav-link" to="/logout">Logout</Link>
      </li> 
      ];
    }else{
      return [
        <li className="nav-item pull-md-right" key={2}>
        <Link className="nav-link" to="/register">&nbsp;Register</Link>
        </li>,
        <li className="nav-item pull-md-right" key={1}>
        <Link className="nav-link" to="/login">Login</Link>
        </li>
      ];
    }
  }

  render (){
        return (
              <nav className="navbar navbar-light bg-faded">
               <Link to="/" className="navbar-brand">My Blog</Link>
               <ul className="nav navbar-nav">
               {this.renderLinks()}
               </ul>
              </nav>
        )

  }


}
function mapStateToProps(state){
   return {
     authenticated:state.auth.authenticated
   };
}

export default connect(mapStateToProps)(Header)
