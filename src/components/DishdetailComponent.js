import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    const commentsList = comments.map((comment) => {
        return (
            <li className='list-unstyled'>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    }

    )
    return (
        <Card>
            <CardBody>
                <CardTitle heading><h4>Comments</h4></CardTitle>
                <CardText>{commentsList}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
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

export default DishDetail