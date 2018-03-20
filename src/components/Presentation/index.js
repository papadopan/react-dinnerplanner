import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import './presentation.css'

class Presentation extends Component{
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
        {
          this.props.allDishes.map(dish =>
          {
            return <div className="plates_list" key={dish.id}>
                        <div className="plate_description">
                          <img src={dish.image} alt="recipe icon"/>
                          <h1>{dish.title}</h1>
                          <p>{dish.instructions}</p>
                        </div>
                        <div className="plate_prep">
                          <h1>preparation</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                  </div>
          }
        )
      }

      </div>
    );
  }
}

export default Presentation;
