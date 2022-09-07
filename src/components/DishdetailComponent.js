import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {
    constructor(props) {
        super(props)

    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
        const commentsList = comments.map((comment) => {
            return(
                <li className='list-unstyled'>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-us', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        }

        )
        return(
            <Card>
                <CardBody>
                    <CardTitle heading><h4>Comments</h4></CardTitle>
                    <CardText>{commentsList}</CardText>
                </CardBody>
            </Card>
        )
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div class='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail