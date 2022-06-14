import React from 'react';
import './AboutMe.css';
import ButtomBack from '../../components/Buttom/ButtomBack'
import { Link } from 'react-router-dom';
import Description from '../../components/Description/Description';
import Likes from '../../components/Likes/Likes';
import Funko from '../../recursos/funkos.png';
import Books from '../../recursos/books.png';
import VideoGames from '../../recursos/videogame.png';
import Food from '../../recursos/food.png';
import Control from '../../recursos/Mando.gif';
import Donut from '../../recursos/donut.gif';
import Book from '../../recursos/Libro.gif';
import TV from '../../recursos/TV.gif';
import Cat from '../../recursos/catdefin.png';
import Dino from '../../recursos/Dinodefin.png';



function AboutMe() {

    const listTV = [
        { name: 'Disney', image: Funko },
        { name: 'Pixar', image: Funko },
        { name: 'The Office', image: Funko },
        { name: 'Harry Potter', image: Funko },
        { name: 'The Boys', image: Funko },
        { name: 'Rick Y Morty', image: Funko },
        { name: 'The Simpsons', image: Funko },
        { name: 'Game of Trones', image: Funko },
        { name: 'The Umbrella Academy', image: Funko }
    ];

    const book = [
        { name: 'One Hundred Years of Solitude', image: Books },
        { name: 'Story of a Scoundrel', image: Books },
        { name: 'Memorias de una salvaje', image: Books },
        { name: 'The Idhún´s Memories', image: Books },
        { name: 'Tales of the Otori', image: Books },
        { name: 'Harry Potter', image: Books },  
    ];

    const videogames = [
        { name: 'Sypiro', image: VideoGames },
        { name: 'Jack II: Renegade', image: VideoGames },
        { name: 'Skyrim', image: VideoGames },
        { name: 'Dragon Age: Inquisitor', image: VideoGames  },
        { name: 'Kingdom Hearts', image: VideoGames },
        { name: 'Asssessins Creed: Odyssey', image: VideoGames },
    ];

    const food = [
        { name: 'Fried Eggs and Potatoes',  image: Food },
        { name: 'Pizza', image: Food },
        { name: 'Cannelloni', image: Food },
        { name: 'Strawberries ', image: Food },
        { name: 'Watermelon', image: Food },
        { name: 'Chocolate', image: Food },
        { name: 'Potato Omelette Sandwich', image: Food },
    ];

    return (
        <div>

            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <section className="AboutMe">
                <Description
                cat={Cat}
                dino={Dino}/>
                <h1 className='titel-like'>... and I liked...</h1>
                <Likes
                    videolike={TV}
                    titulolike="Tv - Cinema"
                    data={listTV}
                />
                <Likes
                    videolike={Book}
                    titulolike="Books"
                    data={book}
                />
                <Likes
                    videolike={Control}
                    titulolike="Videogames"
                    data={videogames}
                />
                <Likes
                    videolike={Donut}
                    titulolike="Food"
                    data={food}
                />  
            </section>
            
        </div>
    );
}

export default AboutMe;