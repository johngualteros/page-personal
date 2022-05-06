import styles from './Cards.module.css';
import image1 from '../img/card1.png';
import image2 from '../img/card2.png';
import image3 from '../img/card3.png';
import { Card } from './Card';
export function Cards(){
    const card=[
        {
            id:1,
            image: image1,
            title: 'Bootstrap LandingPage',
            text:'this is one landing page made in the framework bootstrap it contains one main cards and time in real time you can see the code in my respository in git hub',
            url:'https://github.com/johngualteros/BootstrapLandingPage'
        },
        {
            id:2,
            image: image2,
            title: 'Tailwind Landing Page',
            text:'this is a web page made in tailwind completely based on the pttrns page you can see the code in my git hub repository',
            url:'https://github.com/johngualteros/Tailwind'
        },
        {
            id:3,
            image: image3,
            title: 'Sass Landing Page',
            text:'this is a web page made in sass inspired by deezer music you can see the whole code in my github repo',
            url:'https://github.com/johngualteros/sass'
        }
    ]
    return(
        <div className={styles.container}>
            {
                card.map(card=><Card  key={card.id} imageSource={card.image} title={card.title} text={card.text} url={card.url}/>)
            }
        </div>
    );
}