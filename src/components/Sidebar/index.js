import React, {Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Link} from 'react-router-dom'

import './Sidebar.css'

class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state={
      value:1
    }
  }

updateplus = () =>
{
  var guest_number = this.props.guests;
  guest_number++;
    this.props.updateGuests(guest_number);
}
updateminus = () =>
{
  var guest_number = this.props.guests ;
  if(guest_number === 1)
  {
    guest_number=1;
  }
  else{
    guest_number --;
  }
  this.props.updateGuests(guest_number);
}
  render()
  {
    const style = {
      marginRight: 50,
      margin:10,
    };
    return(
      <div>
        <div className="dinner">
          <h3>My Dinner</h3>
          <div className="people">
            <span>People #</span>
            <span id="numberList" className="numberList">{this.props.guests}</span>
          </div>
          <div className="add_minus">
            <FloatingActionButton
                style={style}
                backgroundColor = "#44318d"
                children={<i className="fas fa-plus"></i>}
                mini={true}
                onClick={this.updateplus}
            />

            <FloatingActionButton
                style={style}
                backgroundColor = "#44318d"
                children={<i className="fas fa-minus"></i>}
                mini={true}
                onClick={this.updateminus}
            />
          </div>

          <div id="btn" data-toggle="collapse"  data-target="#expanded">
            <svg viewBox="0 0 800 600">
            <path d="M 300 220 C 300 220 500 220 540 220 C 740 220 640 540 520 420 C 440 340 300 200  300 200 "id="top" stroke="green" strokeWidth="3" fill="none"/>
            <path d="M 300 320 C 300 320 500 320 540 320 C 740 320 740 530 540 520 L 540 520" stroke="green" id="middle" strokeWidth="3" fill="none" />
            <path d="M 300 210 C 300 210 520 210 540 210 C 740 210 640 530 520 410 C 440 330 300 190 300 190"  stroke="green" strokeWidth="3" id="bottom" fill="none" transform="translate(480 ,320) scale(1,-1) translate(-480 ,-318)"/>
            </svg>
          </div>
        </div>
        <div id="expanded" className="collapse navbar-collapse stats">
          <div className="order_details ">
              <span>Dish Name</span>
              <span>Cost</span>
          </div>
          <div id="dish_space">
          {
            this.props.dishes.map( dish =>
            {
              return  <div className="order_dishes" key={`Dish-id-${dish.id}`}>
                          <span>{dish.title}</span>
                          <span>{dish.price * this.props.guests}</span>
                          </div>

            })

          }
        <div className="price_list">
        <p>{this.props.total_price * this.props.guests} SEK</p>
        </div>
          </div>
          <Link to="/totalmenu">
          <button type="button" name="button" className="confirm" id="confirmation"> Confirm Dinner</button>
          </Link>

        </div>
      </div>
    );
  }
}

export default Sidebar;
