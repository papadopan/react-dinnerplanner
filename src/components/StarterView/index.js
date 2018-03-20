import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import './StarterView.css'


class StarterView extends Component{
  render(){
    return (
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
            <div className="indexview">
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/mainview"><button type="button" name="button" id="start_button" className="btn deliver">Create Dinner</button></Link>
              </div>
            </div>
        </div>
    );
  }
}

export default StarterView;
