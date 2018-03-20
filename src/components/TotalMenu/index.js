import React , {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import './TotalMenu.css'


class TotalMenu extends Component{
  render()
  {
    return(
      <div>
      <AppBar
            title="Dinner Planner"
            showMenuIconButton={false}
            className="AppBar"
            style =
            {{
              backgroundColor: '#2a1b3d',
              padding:10}}
        />

        <div className="total_container">
            <div className="short_intro">
              <div className="short_info">
                <p>My Dinner: {this.props.number} people</p>
                <Link to="/mainview">
                  <button type="button" name="button"className="deliver" id="go_back">Go back and edit dinner</button>
                </Link>
              </div>
            </div>
            <div className="total_dishes">
              {
                this.props.allDishes.map( dish =>
                  {
                    return       <div className="menu_items" key={dish.id}>
                                      <img src={dish.image} alt=""/>
                                      <div className="brief">{dish.title}
                                      </div>
                                      <p>{dish.price * this.props.number} SEK</p>
                                    </div>
                  }
                )
              }
              <span className="vl"></span>
              <div className="total">
                <div className="sum">
                  <p>Total:</p>
                  <p>{this.props.total * this.props.number} SEK</p>
                </div>
              </div>
            </div>
            <hr className="style14"/>
            <div className="print">
            <Link to="/presentation">
              <button type="button" name="button" className="deliver" id="print_full_recipe">Print Full Recipe</button>
              </Link>
            </div>
        </div>


      </div>

    );
  }
}

export default TotalMenu;
