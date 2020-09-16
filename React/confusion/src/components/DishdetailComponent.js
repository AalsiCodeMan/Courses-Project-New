import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDish() {

        const dish = this.props.selectedDish;

        if (dish != null) {
            return(
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments() {
        const dish = this.props.selectedDish;
        
        if (dish != null) {
            
            const coms = dish.comments.map((com) => {
                
                return (
                    <ul key={com.id} className='list-unstyled'>
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric' 
                                }).format(new Date(com.date))
                            }
                        </li>
                    </ul>
                );
            });
            
            return (
                <div className='p-3'>
                    <h4>Comments</h4>
                    {coms}
                </div>
            );


        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish()}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}



export default DishDetail;