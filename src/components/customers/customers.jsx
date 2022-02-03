import React, { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import Card from "react-bootstrap/Card";
import { Container } from 'react-bootstrap';
//images
import customImg1 from '../../assests/img/Ellipse 175.png';
import customImg2 from '../../assests/img/Ellipse 175 (1).png';
import customImg3 from '../../assests/img/Ellipse 175 (2).png';
import imgStart from '../../assests/img/star.png';
//style
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './customers.css';

//const
const reviews = [
    {
        id: 1,
        image: customImg1,
        content: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
        author: "Viezh Robert",
        address: "Warsaw, Poland",
        stars: 3.5,
        starImg: imgStart
    },
    {
        id: 2,
        image: customImg2,
        content: "“I like it because I like to travel far and still can connect with high speed.”.",
        author: "Yessica Christy",
        address: "Shanxi, China",
        stars: 4.5,
        starImg: imgStart
    },
    {
        id: 3,
        image: customImg3,
        content: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
        author: "Kim Young Jou",
        address: "Seoul, South Korea",
        stars: 4,
        starImg: imgStart
    },
    {
        id: 4,
        image: customImg1,
        content: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
        author: "Viezh Robert",
        address: "Warsaw, Poland",
        stars: 4,
        starImg: imgStart
    },
    {
        id: 5,
        image: customImg2,
        content: "“I like it because I like to travel far and still can connect with high speed.”.",
        author: "Yessica Christy",
        address: "Shanxi, China",
        stars: 4.5,
        starImg: imgStart
    },
    {
        id: 6,
        image: customImg3,
        content: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
        author: "Kim Young Jou",
        address: "Seoul, South Korea",
        stars: 5,
        starImg: imgStart
    }
]

const reviewsResponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Customers = () => {

    //useMemo
    const renderCustomers = useMemo(() => {
        return reviews.map(review => {
            return (
                <Card className="position-relative p-4" key={review.id}>
                    <div className='d-flex justify-content-between align-items-center flex-wrap'>
                        <div className='d-flex justify-content-start'><Card.Img
                            className='me-3 mb-2'
                            src={review.image}
                            alt={review.author}
                        />
                            <div>
                                <Card.Title className="text-start mb-1 fw-bold">
                                    {review.author}
                                </Card.Title>
                                <Card.Subtitle className="text-start mb-0">
                                    {review.address}
                                </Card.Subtitle>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Card.Text>{review.stars}</Card.Text>
                            <Card.Img
                                className='ms-3 star'
                                src={review.starImg}
                                alt={review.stars}
                            />
                        </div>
                    </div>
                    <Card.Text className="mt-3 mb-0 text-start">
                        {review.content}
                    </Card.Text>
                </Card>
            )
        })
    }, []);

    return (
        <div className='customers text-center'>
            <Container>
                <h2 className='mb-3 mt-4 fw-bolder'>Trusted by Thousands of
                    <br></br>Happy Customer</h2>
                <p>These are the stories of our customers who have joined us with great
                    <br></br> pleasure when using this crazy feature.</p>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={reviewsResponsive}>
                    {renderCustomers}
                </Carousel>
            </Container>
        </div>
    );
}

export default Customers;