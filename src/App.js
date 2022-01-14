import React, { Component } from 'react';
import {StarterView, MainView, DishView,TotalMenu,Presentation} from './components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, BrowserRouter} from 'react-router-dom'

import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
        selected_id: 1221,
        guests:1,
        selected_dishes:[],
        total_price: 0,
        dishIDS:[],
        antonios:"fhjhfd"
    };
  }

  componentDidMount()
  {
    if(localStorage.getItem("GuestsNumber"))
    {
      this.setState({
        guests: parseInt(localStorage.getItem("GuestsNumber") ,10)
      })
    }
    if(localStorage.getItem("dishes"))
    {
      this.setState({
        selected_dishes: JSON.parse(localStorage.getItem("dishes"))
      })
    }
    if(localStorage.getItem("price"))
    {
      this.setState({
        total_price: parseInt(localStorage.getItem("price") , 10)
      })
    }
  }

  updateDishId = (id)=>
  {
    localStorage.setItem("ID" , id)
    this.setState({selected_id:id})
  }
  updateGuests = (num) =>{
    localStorage.setItem("GuestsNumber" , num)
    this.setState({guests:num})
  }
  updateDishes = (dish) =>{
    var ids = this.state.dishIDS.slice();
    if(ids.includes(dish.id))
    {
      return;
    }
    else{
      ids.push(dish.id)
      var dishes = this.state.selected_dishes.slice();
      var total = this.state.total_price + dish.price;

      localStorage.setItem("price" , total)
      dishes.push(dish)
      var d = JSON.stringify(dishes)
      localStorage.setItem("dishes" , d)
        this.setState({
          selected_dishes:dishes,
          total_price: total,
          dishIDS:ids
          })
    }


  }
  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
            <div>
              <Route path={`${process.env.PUBLIC_URL}/`}  exact component={StarterView} />
              <Route path="/mainview" render={(props) =>(
                  <MainView
                      dishId = {this.updateDishId}
                      updateNumberOfGuests={this.updateGuests}
                      number = { this.state.guests}
                      allDishes = {  this.state.selected_dishes}
                      total = {this.state.total_price}
                      id={this.state.id}
                  />
              )} />
              <Route path= {`${process.env.PUBLIC_URL}/dishview/dish/:dishID`} render={(props) =>(
                  <DishView
                      updateNumberOfGuests={this.updateGuests}
                      number = { this.state.guests}
                      addedDishes={this.updateDishes}
                      allDishes = {this.state.selected_dishes}
                      total={this.state.total_price}
                      {...props}
                  />
              )} />
              <Route path= {`${process.env.PUBLIC_URL}/totalmenu`} render={(props) =>(
                  <TotalMenu
                      number = { this.state.guests}
                      allDishes = {this.state.selected_dishes}
                      total = {this.state.total_price}
                  />
              )} />
              <Route path= {`${process.env.PUBLIC_URL}/presentation`} render={(props) =>(
                  <Presentation
                      number = { this.state.guests}
                      allDishes = {this.state.selected_dishes}
                      total = {this.state.total_price}
                  />
              )} />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
    );
  }
}

export default App;
