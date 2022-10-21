import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { title, _id, total_view, author, details, image_url, rating } = news;
    return (
        <div>


            <Card className="my-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={author.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p className='mb-0'>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-1'></FaRegBookmark>
                        <FaShareAlt className='ms-1'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>

                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='d-flex align-items-center '>
                        <FaStar className='text-warning'></FaStar>
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center '>
                        <FaEye className='text-primary'></FaEye>
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummaryCard;