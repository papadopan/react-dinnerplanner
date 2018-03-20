import React , {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './MainView.css'

class MainView extends Component{
  render()
  {

const style = {
  marginRight: 50,
  margin:10
};
    return(

      <div>
        <AppBar
              title="Dinner Planner"
              showMenuIconButton={false}
              className="AppBar"
              style =
              {{
                backgroundColor: '#f6b16b',
                height:100,
                padding:10}}
          />

            <div className="new" id="sidebar">
                <div className="flex_container">
                  <div className="side" id="overview_dinner">
                    <div className="dinner">
                      <h3>My Dinner</h3>
                      <span>People #</span>
                      <span id="numberList" className="numberList"></span>
                      <FloatingActionButton
                          style={style}
                          children={<i className="fas fa-plus"></i>}
                      />

                      <FloatingActionButton
                          style={style}
                          children={<i class="fas fa-minus"></i>}

                      />
                      <div id="btn" data-toggle="collapse"  data-target="#expanded">
                        <svg viewBox="0 0 800 600">
                        <path d="M 300 220 C 300 220 500 220 540 220 C 740 220 640 540 520 420 C 440 340 300 200  300 200 "id="top" stroke="green" strokeWidth="3" fill="none"/>
                        <path d="M 300 320 C 300 320 500 320 540 320 C 740 320 740 530 540 520 L 540 520" stroke="green" id="middle" strokeWidth="3" fill="none" />
                        <path d="M 300 210 C 300 210 520 210 540 210 C 740 210 640 530 520 410 C 440 330 300 190 300 190"  stroke="green" strokeWidth="3" id="bottom" fill="none" transform="translate(480 ,320) scale(1,-1) translate(-480 ,-318)"/>
                        </svg>
                      </div>
                    </div>
                    <div id="expanded" className="collapse navbar-collapse">
                      <div className="order_details ">
                          <span>Dish Name</span>
                          <span>Cost</span>
                      </div>
                      <div id="dish_space">
                      </div>
                      <button type="button" name="button" className="confirm" id="confirmation"> Confirm Dinner</button>

                    </div>

                  </div>

                  <div className="nside" id="nside">

                    <div className="lis">
                      <div className="order_form">
                        <h3>FIND A DISH</h3>
                        <form className="form" action="">
                          <div className="text_field">
                            <TextField
                                floatingLabelText="Enter a keyword "
                              /><br />
                            </div>

                            <SelectField
                            floatingLabelText="Dish types"
                          >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                          </SelectField>

                        <RaisedButton label="Search" style={style} />
                        </form>
                      </div>
                    </div>
                    <div className="info" id="info">
                        <p id="empty_search">Your search has no results....Please try another dish!!!</p>
                        <p id="welcome_text">Welcome to our restaurant, start your recipe journey</p>
                    </div>
                  </div>
                  <div id="plan">
                    <div className="planning" id="planning">

                    </div>
                  </div>

                </div>
      </div>
    </div>
    );
  }
}

export default MainView
