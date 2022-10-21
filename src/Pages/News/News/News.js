import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { title, category_id, _id, total_view, author, details, image_url, rating } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary"><Link className='text-white text-decoration-none' to={`/category/${category_id}`}>All news in this category</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;