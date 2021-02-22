import axios from "axios";
import store from "../store/index.js";

export function drawCard(deckId, count, target) {
  axios
    .get(
      "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + count
    )
    .then((response) => {
      let cards = response.data.cards;
      let i;
      let suma;
      for (i = 0; i < cards.length; i++) {
        const value = cards[i].value;
        if (value == "KING" || value == "QUEEN" || value == "JACK") {
          cards[i].points = 10;
        } else if (value == "ACE") {
          alert("AS!");
          cards[i].points = 10;
        } else {
          cards[i].points = parseInt(value);
        }
        store.commit(target + "Cards", {
          item: cards[i],
          sum: cards[i].points,
        });
        suma = store.state.croupierSum;
        console.log("helper croupier sum: " + suma);
        //console.log("helper croupier sum: " + store.state.croupierSum);
        return suma;
      }
      return suma;
    })
    .catch((e) => {
      console.log(e);
    });
}
export function check(player, dealer) {
  console.log(player + " " + dealer);
  if ((player == 21) & (dealer !== 21)) {
    //console.log("loose");
  }
}
