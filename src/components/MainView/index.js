import React , {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Sidebar from '../Sidebar'
import Dish from '../Dish'
import  loader  from '../../assets/loader.gif'
import './MainView.css'



class MainView extends Component{
  constructor(props){
    super(props);
    this.state={
      TextFieldValue:"",
      type:" ",
      categories: [ "main course" , "side dish" , "dessert" , "appertizer" , "salad" , "bread" , "breakfast" , "soup" , "beverage", "sauce" , "drink"],
      chosen: " ",
      title: "",
      mydata:[],
      isLoaderOn: false,
      error:false
    }
  }


componentDidMount()
{
  if(localStorage.getItem("type"))
  {
    var type = localStorage.getItem("type")
    var filter = localStorage.getItem("filter")
    this.fetchDishesByCategory(type , filter);
    this.setState({type:type})
  }
}

TextFieldValue = (e) =>
{
  this.setState({
    TextFieldValue:e.target.value
  })
}
handleClick= () =>
{
  this.fetchDishesByCategory(this.state.type ,  this.state.TextFieldValue);
  this.setState({isLoaderOn:true})
}

handleChange = (event, index, value) =>
{
  this.setState({type:value});
  this.fetchDishesByCategory(value , this.state.TextFieldValue);
  this.setState({isLoaderOn:true})
  localStorage.setItem("filter" , this.state.TextFieldValue)
  localStorage.setItem("type" , value)

}

fetchDishesByCategory(type, filter){
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=' + filter + '&type=' + type +'&number=100' , {headers: ({'X-Mashape-Key' : "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"})})
  .then(response => response.json())
  .then(data=> data.results.map(recipe=>(
    {
      title : `${recipe.title}`,
      id : `${recipe.id}`,
      image: `https://spoonacular.com/recipeImages/${recipe.image}`
    }
  )))
  .then(data=> this.setState({
    mydata:data,
    isLoaderOn:false
  }))
  .catch(()=> this.setState({error:true}))
}
  render()
  {
    const style = {
      marginRight: 50,
      margin:10,
    };
    const textStyle ={
        color:'#2a1b3d',
          borderColor: '#2a1b3d'
    };

    if(!this.state.error)
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
          <div className="main_flex_container">
          <div className={this.state.isLoaderOn ? "loader showing" : "loader hiding"}>
            <img src={loader} alt="loader " />
          </div>

            <div className="main_sidebar">
                <Sidebar
                  updateGuests={(num)=>  this.props.updateNumberOfGuests(num)}
                  guests={this.props.number}
                  dishes={this.props.allDishes}
                  total_price={this.props.total}
                  />
            </div>

            <div className="main_rightside">

            <div className="search_div">
            <div className="search_find">
                <h3>FIND A DISH</h3>
                <form className="form" action="">
                      <div className="text_field">
                        <TextField
                            floatingLabelFocusStyle={textStyle}
                            underlineFocusStyle={textStyle}
                            floatingLabelText="Enter a keyword "
                            onChange={this.TextFieldValue}
                          /><br />
                        </div>
                      <div className="selectField">
                        <SelectField
                            floatingLabelText="Dish Types"
                            listStyle={{
                              backgroundColor:'#8267a5',
                              textAlign:'center',
                            }}
                            value={this.state.type}
                            onChange={this.handleChange}
                          >
                            {
                              this.state.categories.map(categories =>
                              {
                                  return  <MenuItem value={categories} key={categories}  primaryText={categories} />

                              })
                            }
                          </SelectField>
                        </div>
                    <div className="search_button">
                    <RaisedButton label="Search" style={style} backgroundColor="#d83f87" onClick={this.handleClick}/>
                    </div>

                </form>
            </div>
            </div>

            <div className="dish_list">

                  {
                      this.state.mydata.map(recipe =>
                        {
                          return    <div key={recipe.id} >
                                      <Dish 
                                        recipe = {recipe} 
                                        change={(param) => this.props.dishId(param)}/>
                                    </div>
                        }
                      )
                  }
            </div>

            </div>

          </div>
        </div>
    );

    }
    else{
      return(
          <div className="error_screen">
            <p>Our restaurant can not serve you right now, please visit us another time</p>
          </div>
      );
    }
    
 
  }
}

export default MainView
