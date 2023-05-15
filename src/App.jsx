import React, { useState } from "react";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);
  
  function sortByPrice(cards){
    return cards.sort((a, b) => b.card_prices[0].cardmarket_price - a.card_prices[0].cardmarket_price);
  }

  function sortAlphabetically(cards) {
    return cards.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  const App = () => {
 // Dans la fonction App
<Route path="/card/:id" component={CardDetails} />

  };
  // fetch cards data
  const fetchCards = async () => {
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
      const data = await response.json();
      setCards(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // render card component
  const Card = ({ card }) => {
    const [showCard, setShowCard] = useState(false);

    return (
      <div className={styles.card} onClick={() => setShowCard(!showCard)}>
        <h2 className="card-name">{card.name}</h2>
        <div className={styles.card_content}>          
          <div className={styles.card_att}>
            <img  src={card.card_images[0].image_url_small} alt={card.name} />
          </div>
          {showCard && (
            <div className={styles.card_att}>
              <p>
              <div className={styles.card_attribute}>{card.desc}</div>
              <div className={styles.card_attribute}>{`Type: ${card.type}`}</div>
              <div className={styles.card_attribute}>{`Race: ${card.race}`}</div>
              <div className={styles.card_attribute}>{`Prix: ${card.card_prices[0].cardmarket_price}`}</div>
              </p>            
            </div>
          )}
           <Link to={`/card/${card.id}`}>
            <button className={styles.card_btn}>Voir plus</button>
          </Link>
        </div>
      </div>
    );
  };

  // render all cards
  const renderCards = () => {
    return cards.map((card) => <Card key={card.id} card={card} />);
  };

  return (
    <div className="App">
      <h1>Yugioh Cards</h1>
      <button onClick={fetchCards}>Load Cards</button>
      <button onClick={sortByPrice(cards)}>Sort by price</button>
      {/* <button onClick={sortAlphabetically(cards)}>Sort by name</button> */}
      <div className="card-container">{renderCards()}</div>
    </div>
  );
}

export default App;
