import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/Button';
import SideDrawer from './sideDrawer';
class Header extends Component {
    state ={
        drawerOpen:false,
        headerShow:false
    }
    componentDidMount(){
         window.addEventListener('scroll',this.handleScroll);
    }
    com
    handleScroll=()=>{
        if(window.scrollY > 0){
          this.setState({
                headerShow:true
                })
        }else{
          this.setState({
              headerShow:false
          })
        }
    }
   
    toggleDrawer =(value)=>{
        this.setState({
            drawerOpen:value
        })
    }
  render() {
    return (
     <AppBar
     position="fixed"
     style={{
         backgroundColor: this.state.headerShow?'black':'transparent',
         boxShadow:'none', 
         padding:'5px 0px'
     }}
     >
    <Toolbar>
      <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Coffee</div>
            <div className="header_logo_title">Coffee Gala</div>
      </div>
      <IconButton
      aria-label="Menu"
      color="inherit"
      onClick={()=>this.toggleDrawer(true)}
      >
          <MenuIcon/>
      </IconButton>
      <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value)=>this.toggleDrawer(value)}
      />
    </Toolbar>
     </AppBar>
    )
  }
}
export default Header;  