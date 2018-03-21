import React , {Component} from 'react'
import Sidebar from '../Sidebar'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import  loader  from '../../assets/loader.gif'
import './DishView.css'


class DishView extends Component{

  constructor(props){
    super(props);
    this.state={
        id: 1 ,
        title:" ",
        image: " ",
        instructions: " ",
        price:1,
        ingredients: [ ],
        data:[],
        isLoaderOn:true,
        error:false
    };
  }
  componentDidMount()
  {
      this.fetchDishDetails( this.props.match.params.dishID);
  }

  addDish = () =>
  {
    var dish = {
      title:this.state.title,
      image:this.state.image,
      instructions:this.state.instructions,
      price:this.state.price,
      id:this.props.match.params.dishID
    }
    this.props.addedDishes(dish)
  }

  fetchDishDetails(query)
  {
      fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information' , {headers: ({'X-Mashape-Key' : "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"})})
      .then(response => response.json())
      .then(data =>     this.setState({
                    data:data,
                    title: data.title,
                    image: data.image,
                    id:data.id,
                    instructions: data.instructions,
                    price: data.pricePerServing,
                    ingredients:data.extendedIngredients,
                    isLoaderOn:false
              }) )
      .catch(()=> this.setState({error:true}))

  }
  render()
  {
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
              <div className="dish_view_container">
              <div className={this.state.isLoaderOn ? "loader showing" : "loader hiding"}>
                <img src={loader} alt="loader " />
              </div>

              <div className="dish_view_sidebar">
                  <Sidebar
                  updateGuests={(num)=>  this.props.updateNumberOfGuests(num)}
                  guests={this.props.number}
                  dishes={this.props.allDishes}
                  total_price={this.props.total}
                  />
              </div>

              <div className="details">

                <div className="dish_details">
                  <h1>{this.state.title}</h1>
                  <img src={this.state.image} alt=""/>
                  <p>{this.state.instructions}</p>
                  <Link to="/mainview">
                    <button className="deliver">Back to search</button>
                  </Link>
                </div>

                <div className="dish_table">
                  <div className="plan_table">
                    <h1>Ingredients for {this.props.number} people</h1>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>Amount</td>
                          <td>Unit</td>
                          <td>Id</td>
                        </tr>

                                          {
                                              this.state.ingredients.map(ingredient =>
                                                {
                                                  return  <tr key={`ingredient-${ingredient.id}`}>
                                                                <td>{ingredient.name}</td>
                                                                <td>{ingredient.amount * this.props.number}</td>
                                                                <td>{ingredient.unit}</td>
                                                                <td>{ingredient.id}</td>
                                                            </tr>
                                                }
                                              )
                                          }
                      </tbody>
                    </table>
                    <hr/>
                    <button className="deliver" onClick={this.addDish}>Add to menu</button>
                    <p> {this.state.price * this.props.number} SEK</p>
                  </div>
                </div>


              </div>

              </div>
        </div>
    );

    }
    else
    {
      return(
        <div className="error_screen">
          <p>Our restaurant can not serve you right now, please visit us another time</p>
        </div>
    );
    }

  }

}

export default DishView;
