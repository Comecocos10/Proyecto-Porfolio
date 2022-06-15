import React, {useEffect} from 'react';
import './AboutMe.css';
import ButtomBack from '../../components/Buttom/ButtomBack'
import { Link } from 'react-router-dom';
import Description from '../../components/Description/Description';
import Likes from '../../components/Likes/Likes';
import Control from '../../recursos/Mando.gif';
import Donut from '../../recursos/donut.gif';
import Book from '../../recursos/Libro.gif';
import TV from '../../recursos/TV.gif';
import Cat from '../../recursos/catdefin.png';
import Dino from '../../recursos/Dinodefin.png';


import Funko1 from '../../recursos/Likes/funko1.png';
import Funko2 from '../../recursos/Likes/funko2.png';
import Funko3 from '../../recursos/Likes/funko3.png';
import Funko4 from '../../recursos/Likes/funko4.png';
import Funko5 from '../../recursos/Likes/funko5.png';
import Funko6 from '../../recursos/Likes/funko6.png';
import Funko7 from '../../recursos/Likes/funko7.png';
import Funko8 from '../../recursos/Likes/funko8.png';
import Funko9 from '../../recursos/Likes/funko9.png';
import Books1 from '../../recursos/Likes/book1.png';
import Books2 from '../../recursos/Likes/book2.png';
import Books3 from '../../recursos/Likes/book3.png';
import Books4 from '../../recursos/Likes/book4.png';
import Books5 from '../../recursos/Likes/book5.png';
import Books6 from '../../recursos/Likes/book6.png';
import VideoGames1 from '../../recursos/Likes/vgame1.png';
import VideoGames2 from '../../recursos/Likes/vgame2.png';
import VideoGames3 from '../../recursos/Likes/vgame3.png';
import VideoGames4 from '../../recursos/Likes/vgame4.png';
import VideoGames5 from '../../recursos/Likes/vgame5.png';
import VideoGames6 from '../../recursos/Likes/vgame6.png';
import Food1 from '../../recursos/Likes/food1.png';
import Food2 from '../../recursos/Likes/food2.png';
import Food3 from '../../recursos/Likes/food3.png';
import Food4 from '../../recursos/Likes/food4.png';
import Food5 from '../../recursos/Likes/food5.png';
import Food6 from '../../recursos/Likes/food6.png';
import Food7 from '../../recursos/Likes/food7.png';



function AboutMe() {
    useEffect(()=>{
                window.scrollTo(0,0)
            }, []);

    const listTV = [
        { name: 'Disney', image: Funko1 },
        { name: 'Pixar', image: Funko2 },
        { name: 'Harry Potter', image: Funko3 },
        { name: 'The Simpsons', image: Funko4 },
        { name: 'Game of Trones', image: Funko5 },
        { name: 'The Umbrella Academy', image: Funko6 },
        { name: 'The Office', image: Funko7 },
        { name: 'The Boys', image: Funko8 },
        { name: 'Rick Y Morty', image: Funko9 },
    ];

    const book = [
        { name: 'One Hundred Years of Solitude', image: Books1 },
        { name: 'Story of a Scoundrel', image: Books2 },
        { name: 'Memorias de una salvaje', image: Books3 },
        { name: 'The Idhún´s Memories', image: Books4 },
        { name: 'Tales of the Otori', image: Books5 },
        { name: 'Harry Potter', image: Books6 },  
    ];

    const videogames = [
        { name: 'Sypiro', image: VideoGames1 },
        { name: 'Jack II: Renegade', image: VideoGames2 },
        { name: 'Skyrim', image: VideoGames3 },
        { name: 'Dragon Age: Inquisitor', image: VideoGames4  },
        { name: 'Kingdom Hearts', image: VideoGames5 },
        { name: 'Asssessins Creed: Odyssey', image: VideoGames6 },
    ];

    const food = [
        { name: 'Fried Eggs and Potatoes',  image: Food1 },
        { name: 'Pizza', image: Food2 },
        { name: 'Cannelloni', image: Food3 },
        { name: 'Strawberrys ', image: Food4 },
        { name: 'Watermelon', image: Food5 },
        { name: 'Chocolate', image: Food6 },
        { name: 'Potato Omelette Sandwich', image: Food7 },
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