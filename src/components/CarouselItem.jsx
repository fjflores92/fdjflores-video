import React, { Component } from 'react';
import '../assets/styles/Main.scss'
import '../assets/styles/CarouselItem.scss'

class CarouselItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
            imageAlt: '',
            title: 'Title',
            description: '2019 16+ 114 minutos'
        }
    }

    render() {
        return(
            <div className="carousel-item">
                <img className="carousel-item__img" src="{this.state.title}" alt="{this.state.title}" />
                <div className="carousel-item__details">
                    <div>
                        <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" /> 
                        <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" /> 
                    </div>
                    <p className="carousel-item__details--title">{this.state.title}</p>
                    <p className="carousel-item__details--description">{this.state.title}</p>
                </div>
            </div>
        )
    };
}

export default CarouselItem;