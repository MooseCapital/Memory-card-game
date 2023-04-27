import { useEffect, useState} from "react";
import Data from "./Data.js";

function Cards(props) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    // standard for loop filter and map combined
   /*  const Cards = prevCards;
            for (let i = 0; i < Cards.length; i++) {
                if (Cards.length === 0) {
                    Cards.push({id: id, url: url});
                    return Cards;
                }
                if (Cards[i].id === id) {
                    Cards.length = 0;
                }
                Cards.push({id: id, url: url});
            }
            return Cards;
        }) */

    const [clickedCards, setClickedCards] = useState([])

    useEffect(() => {
        //shuffle data once on first load then not again until we call the game, since we pass it in,
        //if we leave the shuffleArray()  in the open, it will run every time our score state changes on parent component
    },[])


    function clickCard(event, id, url) {
        setClickedCards(prevCards => {
           /* if (prevCards.some(card => card.id === id)) {
               return []
           }
           return [...prevCards, {id: id, url: url}] */
           return prevCards.some(card => card.id === id) ? [] : [...prevCards, {id: id, url: url}]
        })

    }
    console.log(clickedCards)
    console.log(`score: ${props.score}`)


    useEffect(() => {
        //conditions to reset score or add one, add best score logic in app,
        //we need to pass it back up to score state in parent
        if (clickedCards.length) {
            props.setScore(score => score + 1);
        }else {
            props.setScore(0);
        }
    }, [clickedCards])


    const cardElements = Data.map((image) => {
        return (
            <div className="card"
            key={image.id}
            onClick={() => clickCard(event, image.id, image.url)}
            >
                <img src={`${image.url}`} alt="animal"/>
            </div>
        )
    });

    return (
        <div className="cards-container">
            {cardElements}


        </div>
    )
}

export default Cards
//validate prop types are correct variable passed in
Cards.propTypes = {}

//set default prop if none are passed in, (will always render default)
Cards.defaultProps = {}