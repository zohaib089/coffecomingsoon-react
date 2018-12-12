import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';
const SideDrawer = (props) => {
  const scrollToElement = (el)=>{
   scroller.scrollTo(el,{
     duration:1500,
     delay:100,
     smooth:true,
     offset:-150
   });
   props.onClose(false)
  }
  return (
    <Drawer
    anchor="right"
    open={props.open}
    onClose={()=>props.onClose(false)}
    >
    <List component="nav">
    <ListItem button onClick={()=>scrollToElement('Featured')}>
     Upcoming Coffee
    </ListItem>
    <ListItem button onClick={()=>scrollToElement('CoffeeInfo')}>
     Coffee Info
    </ListItem>
    <ListItem button onClick={()=>scrollToElement('highlights')}>
     Highlights
    </ListItem>
    <ListItem button onClick={()=>scrollToElement('Prices')}>
     Prices
    </ListItem>
    <ListItem button onClick={()=>scrollToElement('Location')}>
     Location
    </ListItem>
    </List>
    </Drawer>
  )
}

export default SideDrawer
