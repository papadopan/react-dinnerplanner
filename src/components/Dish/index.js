import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './Dish.css'


class Dish extends Component{
    
    render()
    {
        return(
                        <div key={this.props.recipe.id}  className="dish_item" onClick={(e) => this.props.change(e.target.id)}>
                          <Link to={`dishview/dish/${this.props.recipe.id}`} >
                            <img src={this.props.recipe.image} alt="recipe icon" id={this.props.recipe.id}/>
                              <div className="brief">
                                 {this.props.recipe.title}
                            </div>
                         </Link>
                        </div>
        );
    }


}


export default Dish;