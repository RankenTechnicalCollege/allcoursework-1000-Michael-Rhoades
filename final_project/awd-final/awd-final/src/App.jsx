import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import AddCard from './component/AddCard';
import _ from 'lodash';
import Card from './Component/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [allCards, setAllCards] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [set, setSet] = useState('');

  useEffect(() => {
//    if (localStorage) {
//      const cardsLocalStorage = JSON.parse(localStorage.getItem('cards'));
//      if (cardsLocalStorage) {
//        saveCards(cardsLocalStorage);
//      } else {
//        saveCards(cards);
//      }
    saveCards(cards);}
  /*}*/, []);

  const cards = 
    [{
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Attack",
      image: "aid-the-chosen-one-king-arthur.png",
      cardName: "Aid the Chosen One"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Defense",
      image: "bewilderment-king-arthur.png",
      cardName: "Bewilderment"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Scheme",
      image: "command-the-storms-king-arthur.png",
      cardName: "Command the Storms"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Versatile",
      image: "divine-intervention-king-arthur.png",
      cardName: "Divine Intervention"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Attack",
      image: "excalibur-king-arthur.png",
      cardName: "Excalibur"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Versatile",
      image: "feint-king-arthur.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Versatile",
      image: "momentous-shift-king-arthur.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Attack",
      image: "noble-sacrifice-king-arthur.png",
      cardName: "Noble Sacrifice"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Scheme",
      image: "prophecy-king-arthur.png",
      cardName: "Prophecy"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Versatile",
      image: "regroup-king-arthur.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Scheme",
      image: "restless-spirits-king-arthur.png",
      cardName: "Restless Spirits"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Versatile",
      image: "skirmish-king-arthur.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Attack",
      image: "swift-strike-king-arthur.png",
      cardName: "Swift Strike"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Attack",
      image: "the-aid-of-morgana-king-arthur.png",
      cardName: "The Aid of Morgana"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Defense",
      image: "the-holy-grail-king-arthur.png",
      cardName: "The Holy Grail"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "King Arthur",
      type: "Scheme",
      image: "the-lady-of-the-lake-king-arthur.png",
      cardName: "The Lady of the Lake"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Attack",
      image: "jaws-that-bite-alice.png",
      cardName: "Jaws That Bite"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Attack",
      image: "claws-that-catch-alice.png",
      cardName: "Claws That Catch"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "manxome-foe-alice.png",
      cardName: "Manxome Foe"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "mad-as-a-hatter-alice.png",
      cardName: "Mad as a Hatter"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Scheme",
      image: "drink-me-alice.png",
      cardName: "Drink Me"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "i-m-late-i-m-late-alice.png",
      cardName: "I'm Late, I'm Late"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Scheme",
      image: "eat-me-alice.png",
      cardName: "Eat Me"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Attack",
      image: "the-other-side-of-the-mushroom-alice.png",
      cardName: "The Other Side of the Mushroom"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Attack",
      image: "o-frabjous-day-alice.png",
      cardName: "O Frabjous Day!"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Attack",
      image: "snicker-snack-alice.png",
      cardName: "Snicker Snack"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Defense",
      image: "looking-glass-alice.png",
      cardName: "Looking Glass"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "momentous-shift-alice.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "skirmish-alice.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "regroup-alice.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Alice",
      type: "Versatile",
      image: "feint-alice.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-city-of-the-man-eating-apes-sinbad.png",
      cardName: "Voyage to the City of the Man Eating Apes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-city-of-the-king-of-serendib-sinbad.png",
      cardName: "Voyage to the City of the King of Serendib"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-cannibals-with-the-root-of-madness-sinbad.png",
      cardName: "Voyage to the Cannibals with the Root of Madness"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-creature-with-eyes-like-coals-of-fire-sinbad.png",
      cardName: "Voyage to the Creature with Eyes Like Coals of Fire"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-valley-of-the-giant-snakes-sinbad.png",
      cardName: "Voyage to the Valley of the Giant Snakes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-to-the-island-that-was-a-whale-sinbad.png",
      cardName: "Voyage to the Island that was a Whale"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "by-fortune-and-fate-sinbad.png",
      cardName: "By Fortune and Fate"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Scheme",
      image: "riches-beyond-compare-sinbad.png",
      cardName: "Riches Beyond Compare"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "voyage-home-sinbad.png",
      cardName: "Voyage Home"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "toil-and-danger-sinbad.png",
      cardName: "Toil and Danger"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "exploit-sinbad.png",
      cardName: "Voyage to the City of the Man Eating Apes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "leap-away-sinbad.png",
      cardName: "Leap Away"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Attack",
      image: "commanding-impact-sinbad.png",
      cardName: "Commanding Impact"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "momentous-shift-sinbad.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "regroup-sinbad.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Sinbad",
      type: "Versatile",
      image: "feint-sinbad.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Scheme",
      image: "a-momentary-glance-medusa.png",
      cardName: "A Momentary Glance"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Attack",
      image: "second-shot-3-medusa.png",
      cardName: "Second Shot"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "snipe-medusa.png",
      cardName: "Snipe"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Scheme",
      image: "winged-frenzy-medusa.png",
      cardName: "Winged Frenzy"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "clutching-claws-medusa.png",
      cardName: "Clutching Claws"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "the-hounds-of-mighty-zeus-medusa.png",
      cardName: "The Hounds of Mighty Zeus"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Defense",
      image: "hiss-and-slither-medusa.png",
      cardName: "Hiss and Slither"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Attack",
      image: "gaze-of-stone-medusa.png",
      cardName: "Gaze of Stone"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "dash-medusa.png",
      cardName: "Dash"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "regroup-medusa.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Battle of Legends v1",
      hero: "Medusa",
      type: "Versatile",
      image: "feint-medusa.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Scheme",
      image: "one-inch-punch-bruce-lee.png",
      cardName: "One Inch Punch"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-corkscrew-finger-jab-bruce-lee.png",
      cardName: "Jeet Kune Do: Corkscrew Finger Jab"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-short-lead-hook-bruce-lee.png",
      cardName: "Jeet Kune Do: Short Lead Hook"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-intercepting-fist-bruce-lee.png",
      cardName: "Jeet Kune Do: Intercepting Fist"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-wrist-lock-bruce-lee.png",
      cardName: "Jeet Kune Do: Wrist Lock"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-downward-side-kick-bruce-lee.png",
      cardName: "Jeet Kune Do: Downward Side Kick"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Attack",
      image: "jeet-kune-do-high-straight-lead-bruce-lee.png",
      cardName: "Jeet Kune Do: High Straight Lead"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Scheme",
      image: "hoo-whaaaaaaa-bruce-lee.png",
      cardName: "Hoo! Whaaaaaaa!"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Scheme",
      image: "nunchaku-bruce-lee.png",
      cardName: "Nunchaku"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Scheme",
      image: "bring-it-on-bruce-lee.png",
      cardName: "Bring It On"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Defense",
      image: "be-like-water-bruce-lee.png",
      cardName: "Be Like Water"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Defense",
      image: "taste-of-blood-bruce-lee.png",
      cardName: "Taste of Blood"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Versatile",
      image: "little-dragon-bruce-lee.png",
      cardName: "Little Dragon"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Versatile",
      image: "momentous-shift-bruce-lee.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Versatile",
      image: "skirmish-bruce-lee.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Versatile",
      image: "regroup-bruce-lee.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Bruce Lee",
      hero: "Bruce Lee",
      type: "Versatile",
      image: "feint-bruce-lee.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Attack",
      image: "highway-robbery-robin-hood.png",
      cardName: "Highway Robbery"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Defense",
      image: "defenders-of-sherwood-robin-hood.png",
      cardName: "Defenders of Sherwood"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Scheme",
      image: "steal-from-the-rich-robin-hood.png",
      cardName: "Steal from the Rich"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Attack",
      image: "a-hunter-s-eye-robin-hood.png",
      cardName: "A Hunter's Eye"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Attack",
      image: "disarming-shot-robin-hood.png",
      cardName: "Disarming Shot"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Versatile",
      image: "snark-robin-hood.png",
      cardName: "Snark"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Attack",
      image: "piercing-shot-robin-hood.png",
      cardName: "Piercing Shot"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Attack",
      image: "ambush-robin-hood.png",
      cardName: "Ambush"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Versatile",
      image: "wily-fighting-robin-hood.png",
      cardName: "Wily Fighting"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Versatile",
      image: "regroup-robin-hood.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Robin Hood",
      type: "Versatile",
      image: "feint-robin-hood.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Attack",
      image: "savagery-bigfoot.png",
      cardName: "Savagery"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Scheme",
      image: "jackalope-horns-bigfoot.png",
      cardName: "Savagery"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Versatile",
      image: "hoax-bigfoot.png",
      cardName: "Hoax"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Defense",
      image: "it-s-just-your-imagination-bigfoot.png",
      cardName: "It's Just Your Imagination"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Scheme",
      image: "crash-through-the-trees-bigfoot.png",
      cardName: "Crash Through the Trees"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Attack",
      image: "larger-than-life-bigfoot.png",
      cardName: "Larger than Life"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Attack",
      image: "disengage-bigfoot.png",
      cardName: "Disengage"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Versatile",
      image: "momentous-shift-bigfoot.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Versatile",
      image: "skirmish-bigfoot.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Versatile",
      image: "regroup-bigfoot.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Robin Hood vs. Bigfoot",
      hero: "Bigfoot",
      type: "Versatile",
      image: "feint-bigfoot.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Scheme",
      image: "remote-detonation-ingen.png",
      cardName: "Remote Detonation"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Scheme",
      image: "call-for-backup-ingen.png",
      cardName: "Call for Backup"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Defense",
      image: "i-ve-hunted-most-things-that-can-hunt-you-ingen.png",
      cardName: "I've Hunted Most Things That Can Hunt You"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Versatile",
      image: "regroup-ingen.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Versatile",
      image: "feint-ingen.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Versatile",
      image: "tactical-advance-ingen.png",
      cardName: "Tactical Feint"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Versatile",
      image: "leap-away-ingen.png",
      cardName: "Leap Away"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Attack",
      image: "second-shot-2-ingen.png",
      cardName: "Second Shot"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Attack",
      image: "rending-shot-ingen.png",
      cardName: "Rending Shot"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Attack",
      image: "shoot-her-ingen.png",
      cardName: "Shoot Her!"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "InGen",
      type: "Attack",
      image: "they-should-all-be-destroyed-ingen.png",
      cardName: "They Should All Be Destroyed"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Scheme",
      image: "coordinated-attack-pattern-raptors.png",
      cardName: "Coordinated Attack Pattern"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Scheme",
      image: "working-things-out-raptors.png",
      cardName: "Working Things Out"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Defense",
      image: "decoy-raptors.png",
      cardName: "Decoy"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Versatile",
      image: "feint-raptors.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Versatile",
      image: "eaten-alive-raptors.png",
      cardName: "Eaten Alive"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "ambush-raptors.png",
      cardName: "Ambush"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "they-remember-raptors.png",
      cardName: "They Remember"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "clever-girl-raptors.png",
      cardName: "Clever Girl"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "pack-hunters-raptors.png",
      cardName: "Pack Hunters"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "disengage-raptors.png",
      cardName: "Disengage"
    }, {
      id: nanoid(),
      set: "InGen vs. Raptors",
      hero: "Raptors",
      type: "Attack",
      image: "eviscerate-raptors.png",
      cardName: "Eviscerate"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Scheme",
      image: "ravening-seduction-dracula.png",
      cardName: "Ravening Seduction"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Scheme",
      image: "prey-upon-dracula.png",
      cardName: "Prey Upon"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Attack",
      image: "thirst-for-sustenance-dracula.png",
      cardName: "Thirst for Sustenance"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Scheme",
      image: "baptism-of-blood-dracula.png",
      cardName: "Baptism of Blood"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Scheme",
      image: "mistform-dracula.png",
      cardName: "Mistform"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Defense",
      image: "look-into-my-eyes-dracula.png",
      cardName: "Look into my Eyes"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Defense",
      image: "do-my-bidding-dracula.png",
      cardName: "Do my Bidding"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Attack",
      image: "beastform-dracula.png",
      cardName: "Beastform"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Attack",
      image: "feeding-frenzy-dracula.png",
      cardName: "Feeding Frenzy"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Versatile",
      image: "exploit-dracula.png",
      cardName: "Exploit"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Versatile",
      image: "dash-dracula.png",
      cardName: "Dash"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Attack",
      image: "ambush-dracula.png",
      cardName: "Ambush"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dracula",
      type: "Versatile",
      image: "feint-dracula.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Scheme",
      image: "pure-evil-jekyll&hyde.png",
      cardName: "Pure Evil"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Scheme",
      image: "strange-case-jekyll&hyde.png",
      cardName: "Strange Case"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Defense",
      image: "scientific-method-jekyll&hyde.png",
      cardName: "Scientific Method"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Scheme",
      image: "calming-research-jekyll&hyde.png",
      cardName: "Calming Research"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Defense",
      image: "with-haste-jekyll&hyde.png",
      cardName: "With Haste"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Attack",
      image: "forever-hyde-jekyll&hyde.png",
      cardName: "Forever Hyde"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Attack",
      image: "recoiling-blow-jekyll&hyde.png",
      cardName: "Recoiling Blow"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "madness-relents-jekyll&hyde.png",
      cardName: "Madness Relents"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "succumb-to-compulsion-jekyll&hyde.png",
      cardName: "Succumb to Compulsion"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "distracted-triage-jekyll&hyde.png",
      cardName: "Distracted Triage"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "duality-of-man-jekyll&hyde.png",
      cardName: "Duality of Man"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "skirmish-jekyll&hyde.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Dr. Jekyll & Mr. Hyde",
      type: "Versatile",
      image: "feint-jekyll&hyde.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Scheme",
      image: "reign-of-terror-invisible-man.png",
      cardName: "Reign of Terror"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Scheme",
      image: "step-lightly-invisible-man.png",
      cardName: "Step Lightly"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Versatile",
      image: "dreaming-of-revenge-invisible-man.png",
      cardName: "Dreaming of Revenge"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Scheme",
      image: "rolling-fog-invisible-man.png",
      cardName: "Rolling Fog"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Scheme",
      image: "vanish-invisible-man.png",
      cardName: "Vanish"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Defense",
      image: "coded-notes-invisible-man.png",
      cardName: "Coded Notes"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Defense",
      image: "into-thin-air-invisible-man.png",
      cardName: "Into Thin Air"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Defense",
      image: "lurking-invisible-man.png",
      cardName: "Lurking"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Attack",
      image: "emerge-from-mist-invisible-man.png",
      cardName: "Emerge from Mist"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Attack",
      image: "slip-away-invisible-man.png",
      cardName: "Slip Away"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Attack",
      image: "surprise-attack-invisible-man.png",
      cardName: "Surprise Attack"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Versatile",
      image: "impossible-to-see-invisible-man.png",
      cardName: "Impossible to See"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Versatile",
      image: "confound-invisible-man.png",
      cardName: "Confound"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Invisible Man",
      type: "Versatile",
      image: "covert-preparation-invisible-man.png",
      cardName: "Covert Preparation"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Scheme",
      image: "master-of-disguise-sherlock-holmes.png",
      cardName: "Master of Disguise"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Scheme",
      image: "confirm-suspicion-sherlock-holmes.png",
      cardName: "Confirm Suspicion"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "counterpunch-sherlock-holmes.png",
      cardName: "Counterpunch"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Scheme",
      image: "administer-aid-sherlock-holmes.png",
      cardName: "Administer Aid"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Scheme",
      image: "eliminate-the-impossible-sherlock-holmes.png",
      cardName: "Eliminate the Impossible"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Defense",
      image: "elementary-sherlock-holmes.png",
      cardName: "Elementary"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Attack",
      image: "service-revolver-sherlock-holmes.png",
      cardName: "Service Revolver"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Attack",
      image: "the-game-is-afoot-sherlock-holmes.png",
      cardName: "The Game is Afoot"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "fixed-point-in-a-changing-age-sherlock-holmes.png",
      cardName: "Fixed Point in a Changing Age"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "deduce-strategy-sherlock-holmes.png",
      cardName: "Deduce Strategy"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "study-methods-sherlock-holmes.png",
      cardName: "Study Methods"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "education-never-ends-sherlock-holmes.png",
      cardName: "Education Never Ends"
    }, {
      id: nanoid(),
      set: "Cobble & Fog",
      hero: "Sherlock Holmes",
      type: "Versatile",
      image: "feint-sherlock-holmes.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Attack",
      image: "swift-strike-buffy.png",
      cardName: "Swift Strike"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Scheme",
      image: "training-buffy.png",
      cardName: "Training"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Scheme",
      image: "insight-buffy.png",
      cardName: "Insight"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Defense",
      image: "cartwheel-kick-buffy.png",
      cardName: "Cartwheel Kick"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "regroup-buffy.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "right-hand-man-buffy.png",
      cardName: "Right-Hand Man"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "feint-buffy.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "rapid-recovery-buffy.png",
      cardName: "Rapid Recovery"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "slayer-s-strength-buffy.png",
      cardName: "Slayer's Strength"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Versatile",
      image: "skirmish-buffy.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Attack",
      image: "military-knowledge-buffy.png",
      cardName: "Military Knowledge"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Attack",
      image: "daring-strike-buffy.png",
      cardName: "Daring Strike"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Buffy",
      type: "Attack",
      image: "mr-pointy-buffy.png",
      cardName: "Mr. Pointy"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Scheme",
      image: "resurrect-willow.png",
      cardName: "Resurrect"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Scheme",
      image: "love-and-loss-willow.png",
      cardName: "Love & Loss"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Defense",
      image: "meditation-willow.png",
      cardName: "Meditation"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "regroup-willow.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "feint-willow.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "hacker-willow.png",
      cardName: "Hacker"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "revoke-willow.png",
      cardName: "Revoke"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "black-magic-willow.png",
      cardName: "Black Magic"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Versatile",
      image: "knowledge-of-the-craft-willow.png",
      cardName: "Knowledge of the Craft"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Attack",
      image: "rending-shot-willow.png",
      cardName: "Rending Shot"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Attack",
      image: "when-good-magic-fails-willow.png",
      cardName: "When Good Magic Fails"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Attack",
      image: "flayed-alive-willow.png",
      cardName: "Flayed Alive"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Willow",
      type: "Attack",
      image: "swift-strike-willow.png",
      cardName: "Swift Strike"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "angelus-scourge-of-europe-angel.png",
      cardName: "Angelus, Scourge of Europe"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Scheme",
      image: "killer-of-the-dead-angel.png",
      cardName: "Killer of the Dead"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "haunted-by-the-faces-angel.png",
      cardName: "Haunted by the Faces"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Versatile",
      image: "regroup-angel.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Versatile",
      image: "feint-angel.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Versatile",
      image: "momentous-shift-angel.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Versatile",
      image: "the-rogue-slayer-angel.png",
      cardName: "The Rogue Slayer"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Versatile",
      image: "brooding-angel.png",
      cardName: "Brooding"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "wisdom-of-ages-angel.png",
      cardName: "Wisdom of Ages"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "cursed-with-a-soul-angel.png",
      cardName: "Cursed with a Soul"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "disengage-angel.png",
      cardName: "Disengage"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Angel",
      type: "Attack",
      image: "five-by-five-angel.png",
      cardName: "Five by Five"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Scheme",
      image: "seek-the-shadows-spike.png",
      cardName: "Seek the Shadows"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Scheme",
      image: "the-sight-spike.png",
      cardName: "The Sight"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "regroup-spike.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "always-surprising-spike.png",
      cardName: "Always Surprising"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "feint-spike.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "empathy-spike.png",
      cardName: "Empathy"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "let-s-dance-spike.png",
      cardName: "Let's Dance"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "skirmish-spike.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "leap-away-spike.png",
      cardName: "Leap Away"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Attack",
      image: "the-rush-spike.png",
      cardName: "The Rush"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Attack",
      image: "arrogance-spike.png",
      cardName: "Arrogance"
    }, {
      id: nanoid(),
      set: "Buffy the Vampire Slayer",
      hero: "Spike",
      type: "Versatile",
      image: "bloody-hell-spike.png",
      cardName: "Bloody Hell"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Versatile",
      image: "once-upon-a-time-little-red.png",
      cardName: "Once Upon a Time"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Scheme",
      image: "never-leave-the-path-little-red.png",
      cardName: "Never Leave the Path"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Defense",
      image: "what-a-terrible-big-mouth-you-have-little-red.png",
      cardName: "What a Terrible Big Mouth you Have"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Versatile",
      image: "what-s-that-in-my-basket-little-red.png",
      cardName: "What't That in my Basket"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Scheme",
      image: "into-the-woods-little-red.png",
      cardName: "Into the Woods"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Versatile",
      image: "stones-in-the-belly-little-red.png",
      cardName: "Stones in the Belly"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Scheme",
      image: "a-grimm-tale-little-red.png",
      cardName: "A Grimm Tale"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Attack",
      image: "long-have-i-sought-you-little-red.png",
      cardName: "Long Have I Sought You"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Defense",
      image: "the-wolf-s-skin-little-red.png",
      cardName: "THe Wolf's Skin"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Versatile",
      image: "what-big-eyes-you-have-little-red.png",
      cardName: "What Big Eyes You Have"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Attack",
      image: "what-big-ears-you-have-little-red.png",
      cardName: "What Big Ears You Have"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Little Red",
      type: "Attack",
      image: "what-large-hands-you-have-little-red.png",
      cardName: "What Large Hands You Have"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Scheme",
      image: "remnant-of-valor-beowulf.png",
      cardName: "Remnant of Valor"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Defense",
      image: "the-equal-of-grendel-beowulf.png",
      cardName: "The Equal of Grendel"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Attack",
      image: "fatal-struggle-beowulf.png",
      cardName: "Fatal Struggle"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Scheme",
      image: "golden-drinking-horn-beowulf.png",
      cardName: "Golden Drinking Horn"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Scheme",
      image: "vigor-and-courage-beowulf.png",
      cardName: "Vigor and Courage"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Versatile",
      image: "the-war-king-beowulf.png",
      cardName: "The War King"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Attack",
      image: "no-contest-expecteth-beowulf.png",
      cardName: "No Contest Expecteth"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Attack",
      image: "epic-poem-beowulf.png",
      cardName: "Epic Poem"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Attack",
      image: "hot-for-battle-beowulf.png",
      cardName: "Hot for Battle"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Attack",
      image: "the-ancient-heirloom-beowulf.png",
      cardName: "THe Ancient Heirloom"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Versatile",
      image: "skirmish-beowulf.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Little Red Riding Hood vs. Beowulf",
      hero: "Beowulf",
      type: "Versatile",
      image: "feint-beowulf.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "deadpool-merc-for-hire-llc-deadpool.png",
      cardName: "Deadpool™ Merc for Hire LLC"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Scheme",
      image: "holy-mackerel-deadpool.png",
      cardName: "Holy Mackerel!"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Scheme",
      image: "faint-deadpool.png",
      cardName: "Faint"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Scheme",
      image: "dumpster-divin-deadpool-deadpool.png",
      cardName: "Dumpster Divin' Deadpool"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Scheme",
      image: "sweeet-deadpool.png",
      cardName: "Sweeet!"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Defense",
      image: "eat-me-deadpool.jpg",
      cardName: "Eat Me"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Defense",
      image: "transit-card-deadpool.png",
      cardName: "Transit Card"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Defense",
      image: "they-have-an-amazing-buffet-deadpool.png",
      cardName: "They Have An Amazing Buffet"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Defense",
      image: "passwords-deadpool.jpg",
      cardName: "Passwords"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "time-out-deadpool.png",
      cardName: "TIME-OUT, TIME-OUT, TIME-OUT!"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "push-to-teleport-deadpool.png",
      cardName: "Push to Teleport"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "i-m-not-wearing-pants-deadpool.png",
      cardName: "I'm Not Wearing Pants"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "feint-deadpool.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "chimichanga-break-deadpool.png",
      cardName: "Chimichanga Break!"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "and-for-my-next-move-deadpool.png",
      cardName: "And for my Next Move..."
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "call-me-deadpool.png",
      cardName: "Call Me"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "i-always-get-the-last-word-deadpool.png",
      cardName: "I Always get the Last Word"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "gimme-gimme-chimichanga-deadpool.png",
      cardName: "Gimme Gimme Chimichanga"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "non-retinal-scan-access-to-the-danger-room-deadpool.png",
      cardName: "Non-Retenal Scan Access to the Danger Room"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Versatile",
      image: "super-feint-deadpool.png",
      cardName: "SUPER Feint"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "cha-ching-deadpool.png",
      cardName: "Cha-Ching!"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "exploding-card-deadpool.png",
      cardName: "Exploding Card"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "gaze-of-stone-deadpool.png",
      cardName: "Gaze of Stone"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "wanna-bet-deadpool.png",
      cardName: "Wanna Bet?"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "excuse-me-while-i-grow-some-limbs-deadpool.png",
      cardName: "Excuse Me While I Grow Some Limbs"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "three-of-hearts-deadpool.png",
      cardName: "3♥"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "xavier-institute-faculty-deadpool.png",
      cardName: "Xavier Institute Faculty"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "klunkin-heads-deadpool.png",
      cardName: "Klunkin' Heads"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "rob-s-pouch-&-shoe-emporium-deadpool.png",
      cardName: "Rob's Pouch & Shoe Emporium"
    }, {
      id: nanoid(),
      set: "Deadpool",
      hero: "Deadpool",
      type: "Attack",
      image: "underrated-super-heroes-deadpool.png",
      cardName: "Underrated Super Heroes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Scheme",
      image: "phoenix-form-sun-wukong.png",
      cardName: "Phoenix Form"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Scheme",
      image: "fiery-eyes-that-see-sun-wukong.png",
      cardName: "Fiery Eyes that See"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Defense",
      image: "bewilderment-sun-wukong.png",
      cardName: "Bewilderment"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Defense",
      image: "golden-chain-mail-sun-wukong.png",
      cardName: "Golden Chain Mail"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Defense",
      image: "tortoise-form-sun-wukong.png",
      cardName: "Tortoise Form"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Versatile",
      image: "sly-monkey-sun-wukong.png",
      cardName: "Sly Monkey"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Versatile",
      image: "72-transformations-sun-wukong.png",
      cardName: "72 Transformations"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Versatile",
      image: "wily-fighting-sun-wukong.png",
      cardName: "Wily Fighting"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Attack",
      image: "ruyi-jingo-bang-sun-wukong.png",
      cardName: "Ruyi Jingo Bang"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Attack",
      image: "infinite-strikes-sun-wukong.png",
      cardName: "Infinite Strikes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Attack",
      image: "taunting-laughter-sun-wukong.png",
      cardName: "Taunting Laughter"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Sun Wukong",
      type: "Attack",
      image: "ox-form-sun-wukong.png",
      cardName: "Ox Form"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Scheme",
      image: "one-with-the-land-yennenga.png",
      cardName: "One with the Land"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "master-of-the-hunt-yennenga.png",
      cardName: "Master of the Hunt"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Defense",
      image: "shield-formation-yennenga.png",
      cardName: "Shield Formation"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "pin-the-prey-yennenga.png",
      cardName: "Pin the Prey"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "point-blank-yennenga.png",
      cardName: "Point Blank"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "divide-and-conquer-yennenga.png",
      cardName: "Divide and Conquer"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "stallion-charge-yennenga.png",
      cardName: "Stallion Charge"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "momentous-shift-yennenga.png",
      cardName: "Momentous Shift"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "jaws-of-the-beast-yennenga.png",
      cardName: "Jaws of the Beast"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Versatile",
      image: "skirmish-yennenga.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Attack",
      image: "rain-of-arrows-yennenga.png",
      cardName: "Rain of Arrows"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Yennenga",
      type: "Attack",
      image: "surprise-volley-yennenga.png",
      cardName: "Surprise Volley"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Scheme",
      image: "closer-than-she-appears-bloody-mary.png",
      cardName: "Closer than She Appears"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Scheme",
      image: "stolen-memories-bloody-mary.png",
      cardName: "Stolen Memories"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Defense",
      image: "mirror-image-bloody-mary.png",
      cardName: "Mirror Image"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Defense",
      image: "evade-bloody-mary.png",
      cardName: "Evade"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Versatile",
      image: "trick-of-the-light-bloody-mary.png",
      cardName: "Trick of the Light"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Versatile",
      image: "feint-bloody-mary.png",
      cardName: "feint"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Versatile",
      image: "jump-scare-bloody-mary.png",
      cardName: "Jump Scare"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Versatile",
      image: "broken-glass-bloody-mary.png",
      cardName: "Broken Glass"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Versatile",
      image: "infinity-mirror-bloody-mary.png",
      cardName: "Infinity Mirror"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Attack",
      image: "ghostly-touch-bloody-mary.png",
      cardName: "Ghostly Touch"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Attack",
      image: "out-of-the-mirror-bloody-mary.png",
      cardName: "Out of the Mirror"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Attack",
      image: "bloody-requiem-bloody-mary.png",
      cardName: "Bloody Requiem"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Bloody Mary",
      type: "Attack",
      image: "speak-three-times-bloody-mary.png",
      cardName: "Speak Three Times"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Defense",
      image: "achilles-heel-achilles.png",
      cardName: "Achilles' Heel"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Scheme",
      image: "spear-throw-achilles.png",
      cardName: "Spear Throw"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Defense",
      image: "under-achilles-helm-achilles.png",
      cardName: "Under Achilles' Helm"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Versatile",
      image: "battle-hardened-achilles.png",
      cardName: "Battle Hardened"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Versatile",
      image: "feint-achilles.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Versatile",
      image: "blessed-by-hermes-achilles.png",
      cardName: "Blessed by Hermes"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Versatile",
      image: "wily-fighting-achilles.png",
      cardName: "Wily Fighting"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Versatile",
      image: "skirmish-achilles.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Attack",
      image: "test-for-weakness-achilles.png",
      cardName: "Test for Weakness"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Attack",
      image: "the-day-of-your-doom-achilles.png",
      cardName: "The Day of your Doom"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Attack",
      image: "battle-frenzy-achilles.png",
      cardName: "Battle Frenzy"
    }, {
      id: nanoid(),
      set: "Battle of Legends v2",
      hero: "Achilles",
      type: "Attack",
      image: "brothers-in-arms-achilles.png",
      cardName: "Brothers in Arms"
    }



  ];


    const saveCards = (cards) => {
      setAllCards(cards);
      setSearchResults(cards)
      if (localStorage) {
        localStorage.setItem('cards', JSON.stringify(cards));
        console.log('saved to local storage')
      }
    }

    const addCard = (newCard) => {
      const updateCards = [...allCards,newCard];
      saveCards(updateCards);
    }

    const removeCard = (cardToDelete) => {
      const updatedCardArray = allCards.filter(card => card.id !== cardToDelete.id);
      saveCards(updatedCardArray);
    }

    const updateCard = (updatedCard) => {
      const updatedCardArray = allCards.map(card => card.id === updatedCard.id ? {...card, ...updatedCard} : card);
      saveCards(updatedCardArray);
    }

    const searchCards = () => {
      let keywordsArray = [];
      if (keywords){
        keywordsArray = keywords.toLowerCase().split(' ');
      }

      if (set) {
        keywordsArray.push(set.toString());
      }

      if (keywordsArray.length > 0) {
        const searchResults = allCards.filter(card => {
          for (const word of keywordsArray) {
            if (card.type.toLowerCase().includes(word) || card.hero.toLowerCase().includes(word) || card.set === (word)) {
              return true;
            }
          }
          return false;
        });
        setSearchResults(searchResults);
      } else {
        setSearchResults(allCards);
      }
    }
  
  return (
    <div className='container'>
      <div className='row' id='allCards'>
        <h3>Current Cards</h3>
        {searchResults && searchResults.map((card) => (
        <div className='col-lg-2' key={card.id}>
          <Card card = {card} removeCard = {removeCard} updateCard = {updateCard} />
        </div>)
        )}
      </div>

      {/*!allCards && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllCards(cards)}>Save Cards</button>*/}
      <AddCard addCard={addCard} />
      <div className='row mt-4' id='searchCards'>
        <h3>Search Cards</h3>
        <div className='col-md-4'>
          <label htmlFor="txtKeywords" className=''>Search by First or Last Name</label>
          <input type="text" className='form-control' placeholder='Search First or Last Name' id="txtKeywords" onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
        </div>
        <div className='col-md-4'>
          <label htmlFor="formSet" className=''>Search by Set</label>
          <select className='form-select' id="formSet" value={set} onChange={e => setSet(e.currentTarget.value)}>
            <option value="">Select Set</option>
            {_(allCards).map(card => card.set).sort().uniq().map(box => <option key={box} value={box}>{box}</option>).value()}
          </select>
        </div>
        <div className='col-md-4 mt-3'>
          <button type="button" className='btn btn-lg btn-primary' onClick={searchCards} id='searchBtn'>Search Cards <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
    </div>

  )
}

export default App
