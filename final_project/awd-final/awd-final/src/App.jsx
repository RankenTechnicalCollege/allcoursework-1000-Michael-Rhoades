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
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Scheme",
      image: "wheres-my-money-luke-cage.png",
      cardName: "Where's My Money?"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Defense",
      image: "skin-like-titanium-luke-cage.png",
      cardName: "Skin Like Titanium"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Defense",
      image: "got-my-back-luke-cage.png",
      cardName: "Got My Back?"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Defense",
      image: "power-man-luke-cage.png",
      cardName: "Power Man"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Defense",
      image: "trash-talk-luke-cage.png",
      cardName: "Trash Talk"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Versatile",
      image: "regroup-luke-cage.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Versatile",
      image: "daughter-of-the-dragon-luke-cage.png",
      cardName: "Daughter of the Dragon"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Versatile",
      image: "pushback-luke-cage.png",
      cardName: "Pushback"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Attack",
      image: "hero-for-hire-luke-cage.png",
      cardName: "Hero for Hire"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Attack",
      image: "still-standing-luke-cage.png",
      cardName: "Still Standing"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Attack",
      image: "get-paid-luke-cage.png",
      cardName: "Get Paid"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Attack",
      image: "commanding-impact-luke-cage.png",
      cardName: "Commanding Impact"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Luke Cage",
      type: "Attack",
      image: "sweet-christmas-luke-cage.png",
      cardName: "Sweet Christmas!"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Scheme",
      image: "madness-will-keep-you-alive-moon-knight.png",
      cardName: "Madness will keep you alive"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Scheme",
      image: "travelers-of-the-night-moon-knight.png",
      cardName: "Travelers of the Night"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Defense",
      image: "were-all-in-this-together-moon-knight.png",
      cardName: "We're all in this together"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "let-your-insanity-guide-you-moon-knight.png",
      cardName: "Let your insanity guide you"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "feint-moon-knight.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "past-and-present-intermingle-moon-knight.png",
      cardName: "Past and present intermingle"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "a-totally-sane-thing-to-do-moon-knight.png",
      cardName: "A totally sane thing to do"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "fist-of-khonshu-moon-knight.png",
      cardName: "Fist of Khonshu"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "thats-the-part-i-like-moon-knight.png",
      cardName: "That's the part I like"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Versatile",
      image: "good-enough-for-us-moon-knight.png",
      cardName: "Good enough for us"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Moon Knight",
      type: "Attack",
      image: "thats-why-i-always-win-moon-knight.png",
      cardName: "That's why I always win"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Scheme",
      image: "chains-of-hellfire-ghost-rider.png",
      cardName: "Chains of Hellfire"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Scheme",
      image: "hell-rides-with-me-ghost-rider.png",
      cardName: "Hell rides with me"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Defense",
      image: "stoke-the-flames-ghost-rider.png",
      cardName: "Stoke the flames"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Defense",
      image: "deal-with-the-devil-ghost-rider.png",
      cardName: "Deal with the Devil"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Versatile",
      image: "control-the-demon-ghost-rider.png",
      cardName: "Control the Demon"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Versatile",
      image: "feint-ghost-rider.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Versatile",
      image: "the-wicked-will-burn-ghost-rider.png",
      cardName: "The Wicked will burn"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Versatile",
      image: "i-finally-escaped-hell-ghost-rider.png",
      cardName: "I finally escaped Hell"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Versatile",
      image: "penance-stare-ghost-rider.png",
      cardName: "Penance Stare"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Attack",
      image: "blaze-of-glory-ghost-rider.png",
      cardName: "Blaze of glory"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Attack",
      image: "i-brought-the-devil-with-me-ghost-rider.png",
      cardName: "I brought the Devil with me"
    }, {
      id: nanoid(),
      set: "Redemption Row",
      hero: "Ghost Rider",
      type: "Attack",
      image: "spirit-of-vengeance-ghost-rider.png",
      cardName: "Spirit of Vengance"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Scheme",
      image: "through-adversity-daredevil.png",
      cardName: "Through adversity"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Scheme",
      image: "breather-daredevil.png",
      cardName: "Breather"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Defense",
      image: "son-of-a-boxer-daredevil.png",
      cardName: "Son of a boxer"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Versatile",
      image: "feint-daredevil.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Versatile",
      image: "grappling-hook-daredevil.png",
      cardName: "Grappling Hook"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Versatile",
      image: "take-a-knee-daredevil.png",
      cardName: "Take a knee"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Attack",
      image: "man-without-fear-daredevil.png",
      cardName: "Man without fear"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Daredevil",
      type: "Attack",
      image: "devil-of-hells-kitchen-daredevil.png",
      cardName: "Devil of Hell's Kitchen"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Scheme",
      image: "mesmerize-elektra.png",
      cardName: "Mesmerize"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Defense",
      image: "snakeroot-clan-elektra.png",
      cardName: "Snakeroot Clan"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Defense",
      image: "intercept-elektra.png",
      cardName: "Intercept"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Versatile",
      image: "whirlwind-elektra.png",
      cardName: "Whirlwind"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Versatile",
      image: "cloaked-in-shadow-elektra.png",
      cardName: "Cloaked in shadow"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Versatile",
      image: "ninjitsu-elektra.png",
      cardName: "Ninjitsu"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Versatile",
      image: "sai-elektra.png",
      cardName: "Sai"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Attack",
      image: "the-fist-elektra.png",
      cardName: "The Fist"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Attack",
      image: "hands-of-red-elektra.png",
      cardName: "Hands of Red"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Elektra",
      type: "Attack",
      image: "mystic-assassin-elektra.png",
      cardName: "Mystic Assassin"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Scheme",
      image: "study-the-target-bullseye.png",
      cardName: "Study the target"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Defense",
      image: "tactical-retreat-bullseye.png",
      cardName: "Tactical retreat"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Versatile",
      image: "feint-bullseye.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Versatile",
      image: "arrogant-but-effective-bullseye.png",
      cardName: "Arrogant but effective"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Versatile",
      image: "im-better-and-ill-prove-it-bullseye.png",
      cardName: "I'm better and I'll prove it"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Versatile",
      image: "master-strategist-bullseye.png",
      cardName: "Master strategist"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Versatile",
      image: "ricochet-bullseye.png",
      cardName: "Ricochet"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Attack",
      image: "i-planned-to-be-here-bullseye.png",
      cardName: "I planned to be here"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Attack",
      image: "for-my-next-trick-bullseye.png",
      cardName: "For my next trick"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Attack",
      image: "i-never-miss-bullseye.png",
      cardName: "I never miss"
    }, {
      id: nanoid(),
      set: "Hell's Kitchen",
      hero: "Bullseye",
      type: "Attack",
      image: "worlds-greatest-assassin-bullseye.png",
      cardName: "World's Greatest Assassin"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Scheme",
      image: "the-future-ex-mrs-malcolm-dr-sattler.png",
      cardName: "The Future Ex-Mrs. Malcolm"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Defense",
      image: "lock-the-doors-dr-sattler.png",
      cardName: "Lock the doors"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Defense",
      image: "the-concept-of-attraction-dr-sattler.png",
      cardName: "The Concept of Attraction"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "i-think-were-back-in-business-dr-sattler.png",
      cardName: "I think we're back in business"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "sexism-in-survival-situations-dr-sattler.png",
      cardName: "Sexism in survival situations"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "regroup-dr-sattler.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "woman-inherits-the-earth-dr-sattler.png",
      cardName: "Woman inherits the Earth"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "life-finds-a-way-dr-sattler.png",
      cardName: "Life finds a way"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "chaotician-dr-sattler.png",
      cardName: "Chaotician"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "feint-dr-sattler.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "violently-if-necessary-dr-sattler.png",
      cardName: "Violently if necessary"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "must-go-faster-dr-sattler.png",
      cardName: "Must go faster"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Versatile",
      image: "hey-hey-hey-dr-sattler.png",
      cardName: "Hey! Hey! Hey!"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "Dr. Ellie Sattler",
      type: "Attack",
      image: "you-never-had-control-thats-the-illusion-dr-sattler.png",
      cardName: "You never had control, that's the ilussion"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Scheme",
      image: "closer-than-she-appears-t-rex.png",
      cardName: "Closer than she appears"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Scheme",
      image: "65-million-years-of-gut-instinct-t-rex.png",
      cardName: "65 Million years of gut instinct"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Scheme",
      image: "ripples-in-the-water-t-rex.png",
      cardName: "Ripples in the water"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Defense",
      image: "youre-just-making-her-angry-t-rex.png",
      cardName: "You're just making her angry"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Versatile",
      image: "thrash-t-rex.png",
      cardName: "Thrash"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Versatile",
      image: "terrifying-roar-t-rex.png",
      cardName: "Terrifying roar"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Versatile",
      image: "momentous-shift-t-rex.png",
      cardName: "Momentous shift"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Attack",
      image: "when-dinosaurs-ruled-the-earth-t-rex.png",
      cardName: "When dinosaurs ruled the earth"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Attack",
      image: "reckless-lunge-t-rex.png",
      cardName: "Reckless lunge"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Attack",
      image: "15000-pounds-of-muscle-t-rex.png",
      cardName: "15,000 pounds of muscle"
    }, {
      id: nanoid(),
      set: "Sattler vs. T-Rex",
      hero: "T-Rex",
      type: "Attack",
      image: "commanding-impact-t-rex.png",
      cardName: "Commanding impact"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Versatile",
      image: "misdirection-houdini.png",
      cardName: "Misdirection"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Scheme",
      image: "set-the-stage-houdini.png",
      cardName: "Set the stage"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Versatile",
      image: "and-the-beautiful-bess-houdini.png",
      cardName: "And the Beautiful Bess"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Defense",
      image: "all-part-of-the-show-houdini.png",
      cardName: "All part of the show"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Scheme",
      image: "a-magician-never-reveals-his-secrets-houdini.png",
      cardName: "A magicial never reveals his secrets"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Versatile",
      image: "vanishing-act-houdini.png",
      cardName: "Vanishing act"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Attack",
      image: "the-big-reveal-houdini.png",
      cardName: "The big reveal"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Versatile",
      image: "smoke-and-mirrors-houdini.png",
      cardName: "Smoke and mirrors"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Attack",
      image: "sleight-of-hand-houdini.png",
      cardName: "Sleight of hand"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Defense",
      image: "grand-escape-houdini.png",
      cardName: "Grand escape"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Attack",
      image: "flourish-houdini.png",
      cardName: "Flourish"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Attack",
      image: "an-illusion-of-my-own-design-houdini.png",
      cardName: "An illusion of my own design"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "Harry Houdini",
      type: "Attack",
      image: "for-my-next-trick-houdini.png",
      cardName: "For my next trick"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Defense",
      image: "prisoners-torment-genie.png",
      cardName: "Prisoner's torment"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Attack",
      image: "imprisoned-wrath-genie.png",
      cardName: "Imprisoned wrath"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Versatile",
      image: "i-grant-you-death-genie.png",
      cardName: "I grant you death"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Attack",
      image: "i-am-freed-genie.png",
      cardName: "I am freed"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Attack",
      image: "careful-what-you-wish-for-genie.png",
      cardName: "Careful what you wish for"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Scheme",
      image: "three-wishes-genie.png",
      cardName: "Three wishes"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Attack",
      image: "your-wish-is-my-command-genie.png",
      cardName: "Your wish is my command"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Versatile",
      image: "wishing-for-more-wishes-genie.png",
      cardName: "Wishing for more wishes"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Versatile",
      image: "this-is-no-parlor-trick-genie.png",
      cardName: "This is no parlor trick"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Versatile",
      image: "ive-made-sultans-out-of-less-genie.png",
      cardName: "I've made Sultans out of less"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Defense",
      image: "back-in-the-lamp-genie.png",
      cardName: "Mack in the lamp"
    }, {
      id: nanoid(),
      set: "Houdini vs. The Genie",
      hero: "The Genie",
      type: "Versatile",
      image: "feint-genie.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Scheme",
      image: "gyro-and-fries-ms-marvel.png",
      cardName: "Gyro and fries"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Scheme",
      image: "friends-and-family-ms-marvel.png",
      cardName: "Friends and family"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Defense",
      image: "slingshot-ms-marvel.png",
      cardName: "Slingshot"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Versatile",
      image: "shrink-shrink-shrink-ms-marvel.png",
      cardName: "Shrink! Shrink! Shrink!"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Versatile",
      image: "feint-ms-marvel.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Versatile",
      image: "embiggen-ms-marvel.png",
      cardName: "Embiggen"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Versatile",
      image: "easy-peasy-ms-marvel.png",
      cardName: "Easy peasy"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Versatile",
      image: "momentous-shift-ms-marvel.png",
      cardName: "Momentous shift"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Attack",
      image: "fangirl-ms-marvel.png",
      cardName: "Fangirl"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Attack",
      image: "im-not-touching-you-ms-marvel.png",
      cardName: "I'm not touching you"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Ms. Marvel",
      type: "Attack",
      image: "big-wind-up-ms-marvel.png",
      cardName: "Big wind up"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Scheme",
      image: "chosen-fate-cloak&dagger.png",
      cardName: "Chosen fate"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Defense",
      image: "living-shadow-cloak&dagger.png",
      cardName: "Living shadow"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Versatile",
      image: "traverse-the-darkforce-cloak&dagger.png",
      cardName: "Traverse the Darkforce"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Versatile",
      image: "feint-cloak&dagger.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Versatile",
      image: "into-darkness-cloak&dagger.png",
      cardName: "Into darkness"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Versatile",
      image: "the-living-light-cloak&dagger.png",
      cardName: "The living light"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Versatile",
      image: "perfect-balance-cloak&dagger.png",
      cardName: "Perfect balance"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Attack",
      image: "into-the-void-cloak&dagger.png",
      cardName: "Into the void"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Attack",
      image: "channel-the-dark-cloak&dagger.png",
      cardName: "Channel the dark"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Attack",
      image: "darkforce-dimension-cloak&dagger.png",
      cardName: "Darkforce Dimension"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Attack",
      image: "commanding-impact-cloak&dagger.png",
      cardName: "Commanding impact"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Cloak & Dagger",
      type: "Attack",
      image: "lightforce-barrage-cloak&dagger.png",
      cardName: "Lightforce barrage"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Scheme",
      image: "nutwork-of-spies-squirrel-girl.png",
      cardName: "Nutwork of spies"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Scheme",
      image: "horde-of-squirrels-squirrel-girl.png",
      cardName: "Horde of squirrels"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Scheme",
      image: "eat-nuts-squirrel-girl.png",
      cardName: "Eat nuts"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Defense",
      image: "squirgility-squirrel-girl.png",
      cardName: "Squirgiltiy"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "feint-squirrel-girl.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "call-of-the-mild-squirrel-girl.png",
      cardName: "Call of the mild"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "get-em-tippy-toe-squirrel-girl.png",
      cardName: "Get 'em Tippy Toe!"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "dash-squirrel-girl.png",
      cardName: "Dash"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "unbeatable-squirrel-girl-squirrel-girl.png",
      cardName: "Unbeatable Squirrel Girl"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Versatile",
      image: "squirmish-squirrel-girl.png",
      cardName: "Squirmish"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Attack",
      image: "kick-butts-squirrel-girl.png",
      cardName: "Kick butts"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Attack",
      image: "bite-of-steel-squirrel-girl.png",
      cardName: "Bite of steel"
    }, {
      id: nanoid(),
      set: "Teen Spirit",
      hero: "Squirrel Girl",
      type: "Attack",
      image: "fuzzball-special-squirrel-girl.png",
      cardName: "Fuzzball Special"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Scheme",
      image: "the-madripoor-sanction-black-widow.png",
      cardName: "The Madripoor Sanction"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Scheme",
      image: "the-kinshasa-directive-black-widow.png",
      cardName: "The Kinshasa Directive"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Scheme",
      image: "the-firenze-agenda-black-widow.png",
      cardName: "The Firenze Agenda"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Scheme",
      image: "the-moscow-protocol-black-widow.png",
      cardName: "The Moscow Protocol"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Scheme",
      image: "the-budapest-gambit-black-widow.png",
      cardName: "The Budapest-gambit"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Defense",
      image: "life-model-decoy-black-widow.png",
      cardName: "Life Model Decoy"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "double-identity-black-widow.png",
      cardName: "Double identity"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "feint-black-widow.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "caught-in-a-web-black-widow.png",
      cardName: "Caught in a web"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "widows-line-black-widow.png",
      cardName: "Widow's Line"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "widows-kiss-black-widow.png",
      cardName: "Widow's Kiss"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Versatile",
      image: "acting-director-of-shield-black-widow.png",
      cardName: "Acting director of S.H.I.E.L.D."
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Attack",
      image: "fake-out-black-widow.png",
      cardName: "Fake out"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Attack",
      image: "widows-bite-black-widow.png",
      cardName: "Widow's Bite"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Widow",
      type: "Attack",
      image: "widows-sting-black-widow.png",
      cardName: "Widow's Sting"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Scheme",
      image: "stalking-panther-black-panther.png",
      cardName: "Stalking panther"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Scheme",
      image: "tactical-remote-scanning-black-panther.png",
      cardName: "Tactical remote scanning"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Defense",
      image: "microweave-mesh-black-panther.png",
      cardName: "Microweave mesh"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Defense",
      image: "evade-black-panther.png",
      cardName: "Evade"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "regroup-black-panther.png",
      cardName: "Regroup"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "anti-metal-claws-black-panther.png",
      cardName: "Anti-metal claws"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "nanotriage-processor-black-panther.png",
      cardName: "Nanotriage processor"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "feint-black-panther.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "wakanda-forever-black-panther.png",
      cardName: "Wakanda Forever!"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "cat-like-reflexes-black-panther.png",
      cardName: "Cat-like reflexes"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Versatile",
      image: "ancestral-insight-black-panther.png",
      cardName: "Ancestral insight"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Attack",
      image: "vibranium-shockwave-black-panther.png",
      cardName: "Vibranium shockwave"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Black Panther",
      type: "Attack",
      image: "analyze-and-adjust-black-panther.png",
      cardName: "Analyze and adjust"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Scheme",
      image: "manipulation-winter-soldier.png",
      cardName: "Manipulation"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Scheme",
      image: "a-boy-named-bucky-winter-soldier.png",
      cardName: "A boy named Bucky"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Defense",
      image: "complete-the-mission-winter-soldier.png",
      cardName: "Complete the mission"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Versatile",
      image: "reprogram-winter-soldier.png",
      cardName: "Reprogram"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Versatile",
      image: "feint-winter-soldier.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Versatile",
      image: "wily-fighting-winter-soldier.png",
      cardName: "Wily fighting"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Versatile",
      image: "born-in-the-barracks-winter-soldier.png",
      cardName: "Born in the barracks"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Versatile",
      image: "reflex-memories-winter-soldier.png",
      cardName: "Reflex memories"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Attack",
      image: "marksman-winter-soldier.png",
      cardName: "Marksman"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Attack",
      image: "bionic-arm-winter-soldier.png",
      cardName: "Bionic arm"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Attack",
      image: "programmed-to-kill-winter-soldier.png",
      cardName: "Programmed to kill"
    }, {
      id: nanoid(),
      set: "For King and Country",
      hero: "Winter Soldier",
      type: "Attack",
      image: "without-remorse-winter-soldier.png",
      cardName: "Without remorse"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Scheme",
      image: "no-really-im-a-doctor-doctor-strange.png",
      cardName: "No, really, I'm a doctor"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Scheme",
      image: "eye-of-agamotto-doctor-strange.png",
      cardName: "Eye of Agamotto"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Defense",
      image: "the-mists-of-munnopor-doctor-strange.png",
      cardName: "The Mists of Munnopor"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Versatile",
      image: "master-of-kamar-taj-doctor-strange.png",
      cardName: "Master of Kamar-Taj"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Versatile",
      image: "cloak-of-levitation-doctor-strange.png",
      cardName: "Cloak of Levitation"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Versatile",
      image: "steadfast-disciple-doctor-strange.png",
      cardName: "Steadfast disciple"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Versatile",
      image: "feint-doctor-strange.png",
      cardName: "Feint"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Versatile",
      image: "seven-suns-of-cinnibus-doctor-strange.png",
      cardName: "Seven Suns of Cinnibus"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Attack",
      image: "bolts-of-balthakk-doctor-strange.png",
      cardName: "Bolts of Balthakk"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Attack",
      image: "the-rings-of-raggadorr-doctor-strange.png",
      cardName: "The Rings of Raggadorr"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Doctor Strange",
      type: "Attack",
      image: "the-winds-of-watoomb-doctor-strange.png",
      cardName: "The Winds of Watoomb"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Scheme",
      image: "with-great-power-spider-man.png",
      cardName: "With great power"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Scheme",
      image: "friendly-neighborhood-spider-man-spider-man.png",
      cardName: "Friendly neighborhood Spider-Man"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Defense",
      image: "web-shooters-spider-man.png",
      cardName: "Web shooters"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Defense",
      image: "counter-attack-spider-man.png",
      cardName: "Counter attack"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Versatile",
      image: "spider-sense-tingling-spider-man.png",
      cardName: "Spider-Seinse tingling!"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Versatile",
      image: "momentous-shift-spider-man.png",
      cardName: "Momentous shift"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Versatile",
      image: "wall-crawler-spider-man.png",
      cardName: "Wall crawler"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Versatile",
      image: "snark-spider-man.png",
      cardName: "Snark"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Versatile",
      image: "right-in-the-face-spider-man.png",
      cardName: "Right in the face"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Attack",
      image: "disarming-shot-spider-man.png",
      cardName: "Disarming shot"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Attack",
      image: "thwip-spider-man.png",
      cardName: "Thwip!"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "Spider-Man",
      type: "Attack",
      image: "swinging-kick-spider-man.png",
      cardName: "Swinging kick"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Scheme",
      image: "double-jeopardy-she-hulk.png",
      cardName: "Double Jeopardy"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Scheme",
      image: "leap-toward-she-hulk.png",
      cardName: "Leap toward"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Scheme",
      image: "jennifer-walters-esq-she-hulk.png",
      cardName: "Jennifer Walters, Esq."
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Defense",
      image: "lady-justice-she-hulk.png",
      cardName: "Lady Justice"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Versatile",
      image: "the-defense-rests-she-hulk.png",
      cardName: "The defense rests"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Versatile",
      image: "cease-and-desist-she-hulk.png",
      cardName: "Ceace and desist"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Versatile",
      image: "legalese-she-hulk.png",
      cardName: "Legalese"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Versatile",
      image: "nerve-cluster-strike-she-hulk.png",
      cardName: "Nerve cluster strike"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Versatile",
      image: "green-energy-she-hulk.png",
      cardName: "Green energy"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Attack",
      image: "the-savage-she-hulk-she-hulk.png",
      cardName: "The Savage She-Hulk"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Attack",
      image: "sensational-she-hulk.png",
      cardName: "Sensational"
    }, {
      id: nanoid(),
      set: "Brains and Brawn",
      hero: "She-Hulk",
      type: "Attack",
      image: "omega-level-threat-she-hulk.png",
      cardName: "Omega-level threat"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Scheme",
      image: "remote-control-tesla.png",
      cardName: "Remote control"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Scheme",
      image: "fully-charged-tesla.png",
      cardName: "Fully charged"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Defense",
      image: "intense-experimentation-tesla.png",
      cardName: "Intense experimentation"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Versatile",
      image: "kinetic-induction-tesla.png",
      cardName: "Kinetic induction"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Versatile",
      image: "repulsion-blast-tesla.png",
      cardName: "Repuslion blast"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Versatile",
      image: "polyphase-coils-tesla.png",
      cardName: "Polyphase coils"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Versatile",
      image: "lightning-storm-tesla.png",
      cardName: "Lightning-storm"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Versatile",
      image: "x-ray-radiation-tesla.png",
      cardName: "X-Ray radiation"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Attack",
      image: "death-ray-tesla.png",
      cardName: "Death ray"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Attack",
      image: "7-hertz-tesla.png",
      cardName: "7-hertz"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Nikola Tesla",
      type: "Attack",
      image: "the-alternating-current-tesla.png",
      cardName: "The Alternating Current"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Scheme",
      image: "a-few-more-pearls-annie-christmas.png",
      cardName: "A few more pearls"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Scheme",
      image: "captains-orders-annie-christmas.png",
      cardName: "Captain's orders"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Defense",
      image: "mississippi-queen-annie-christmas.png",
      cardName: "Mississippi Queen"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Defense",
      image: "slick-talker-annie-christmas.png",
      cardName: "Slick talker"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "striking-beauty-annie-christmas.png",
      cardName: "Striking beauty"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "the-turn-and-the-river-annie-christmas.png",
      cardName: "The turn and the river"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "keep-your-hands-to-yourself-annie-christmas.png",
      cardName: "Keep your hands to yourself"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "quite-a-pair-annie-christmas.png",
      cardName: "Quite a pair"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "long-shot-annie-christmas.png",
      cardName: "Long shot"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Versatile",
      image: "better-together-annie-christmas.png",
      cardName: "Better together"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Attack",
      image: "bottom-dealing-annie-christmas.png",
      cardName: "Bottom dealing"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Annie Christmas",
      type: "Attack",
      image: "lagniappe-annie-christmas.png",
      cardName: "Lagniappe"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Scheme",
      image: "arrive-just-in-time-golden-bat.png",
      cardName: "Arive just in time"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Scheme",
      image: "alpine-fortress-golden-bat.png",
      cardName: "Alpine Fortress"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Defense",
      image: "imposing-presence-golden-bat.png",
      cardName: "Imposing presence"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Defense",
      image: "he-laughs-at-your-feebleness-golden-bat.png",
      cardName: "He laughs at your feebleness"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Versatile",
      image: "sight-beyond-sight-golden-bat.png",
      cardName: "Sight beyond sight"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Versatile",
      image: "like-a-flash-of-golden-light-golden-bat.png",
      cardName: "Like a flash of golden light"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Versatile",
      image: "insight-of-the-ancients-golden-bat.png",
      cardName: "Insight of the ancients"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Versatile",
      image: "terrifying-roar-golden-bat.png",
      cardName: "Terrifying roar"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Versatile",
      image: "skirmish-golden-bat.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Attack",
      image: "a-punch-to-shake-the-earth-golden-bat.png",
      cardName: "A punch to shake the Earth"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Attack",
      image: "vaporizing-eyebeams-golden-bat.png",
      cardName: "Vaporizing eyebeams"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Golden Bat",
      type: "Attack",
      image: "super-strength-golden-bat.png",
      cardName: "Super strength"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Scheme",
      image: "helpful-assistant-jill-trent.png",
      cardName: "Helpful assistant"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Defense",
      image: "hypnotist-jill-trent.png",
      cardName: "Hypnotist"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Defense",
      image: "indestructible-cloth-jill-trent.png",
      cardName: "Indestructible cloth"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "caught-red-handed-jill-trent.png",
      cardName: "Caught red-handed"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "laser-pen-jill-trent.png",
      cardName: "Laser pen"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "stasis-diffuser-jill-trent.png",
      cardName: "Stasis diffuser"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "sisters-in-arms-jill-trent.png",
      cardName: "Sisters in arms"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "insightful-deduction-jill-trent.png",
      cardName: "Insightful deduction"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "utility-belt-jill-trent.png",
      cardName: "Utility belt"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "gyroscopic-jetpack-jill-trent.png",
      cardName: "Gyroscopic jetpack"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Versatile",
      image: "ace-fighter-jill-trent.png",
      cardName: "Ace fighter"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Attack",
      image: "battle-of-wits-jill-trent.png",
      cardName: "Battle of wits"
    }, {
      id: nanoid(),
      set: "Tales to Amaze",
      hero: "Dr. Jill Trent",
      type: "Attack",
      image: "energizing-spray-jill-trent.png",
      cardName: "Energizing spray"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Defense",
      image: "spring-the-trap-oda-nobunaga.png",
      cardName: "Spring the trap"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Scheme",
      image: "demon-king-of-the-sixth-heaven-oda-nobunaga.png",
      cardName: "Demon King of the Sixth Heaven"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Attack",
      image: "student-of-war-oda-nobunaga.png",
      cardName: "Student of war"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Scheme",
      image: "reinforce-oda-nobunaga.png",
      cardName: "Reinforce"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Versatile",
      image: "patience-and-strategy-oda-nobunaga.png",
      cardName: "Patience and strategy"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Versatile",
      image: "battle-maneuvers-oda-nobunaga.png",
      cardName: "Battle maneuvers"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Attack",
      image: "fire-and-flames-oda-nobunaga.png",
      cardName: "Fire and Flames"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Defense",
      image: "pragmatism-oda-nobunaga.png",
      cardName: "Pragmatism"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Attack",
      image: "lightning-and-thunder-oda-nobunaga.png",
      cardName: "Lightning and Thunder"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Attack",
      image: "sun-and-moon-oda-nobunaga.png",
      cardName: "Sun and Moon"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Oda Nobunaga",
      type: "Versatile",
      image: "momentous-shift-oda-nobunaga.png",
      cardName: "Momentous shift"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Defense",
      image: "deeds-of-valor-tomoe-gozen.png",
      cardName: "Deeds of valor"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Versatile",
      image: "flash-of-steel-tomoe-gozen.png",
      cardName: "Flash of steel"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Attack",
      image: "fearsome-strength-tomoe-gozen.png",
      cardName: "Fearsome strength"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Scheme",
      image: "lord-kisos-final-stand-tomoe-gozen.png",
      cardName: "Lord Kiso's final stand"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Defense",
      image: "refuse-to-retreat-tomoe-gozen.png",
      cardName: "Refuse to retreat"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Versatile",
      image: "a-worthy-opponent-tomoe-gozen.png",
      cardName: "A worthy opponent"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Versatile",
      image: "confront-any-demon-or-god-tomoe-gozen.png",
      cardName: "Confront any Demon or God"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Attack",
      image: "a-warriors-way-tomoe-gozen.png",
      cardName: "A warrior's way"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Attack",
      image: "five-against-thousands-tomoe-gozen.png",
      cardName: "Five against thousands"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Attack",
      image: "witness-my-last-battle-tomoe-gozen.png",
      cardName: "Witness my last battle"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Attack",
      image: "piercing-shot-tomoe-gozen.png",
      cardName: "Piercing shot"
    }, {
      id: nanoid(),
      set: "Sun's Origin",
      hero: "Tomoe Gozen",
      type: "Versatile",
      image: "skirmish-tomoe-gozen.png",
      cardName: "Skirmish"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "horror-shakespeare.png",
      cardName: "Horror"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "horror2-shakespeare.png",
      cardName: "Horror"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "horror3-shakespeare.png",
      cardName: "Horror"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "horror4-shakespeare.png",
      cardName: "Horror"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "horror5-shakespeare.png",
      cardName: "Horror"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "again-shakespeare.png",
      cardName: "Again"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "such-sweet-sorrow-shakespeare.png",
      cardName: "Such sweet sorrow"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "revise-shakespeare.png",
      cardName: "Revise"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "deceive-shakespeare.png",
      cardName: "Deceive"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "et-tu-brute-shakespeare.png",
      cardName: "Et tu, Brute?"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "the-ides-of-march-shakespeare.png",
      cardName: "The Ides of March"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "alas-shakespeare.png",
      cardName: "alas"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Versatile",
      image: "once-more-unto-the-breach-shakespeare.png",
      cardName: "Once more unto the breach"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "places-places-shakespeare.png",
      cardName: "Places, Places!"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "all-are-punished-shakespeare.png",
      cardName: "All are punished"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "William Shakespeare",
      type: "Attack",
      image: "my-kingdom-for-a-horse-shakespeare.png",
      cardName: "Again"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Scheme",
      image: "the-ghost-hamlet.png",
      cardName: "The Ghost"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Scheme",
      image: "method-in-the-madness-hamlet.png",
      cardName: "Method in the madness"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Defense",
      image: "nothing-either-good-or-bad-hamlet.png",
      cardName: "Nothing either good or bad"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Defense",
      image: "the-rest-is-silence-hamlet.png",
      cardName: "The rest is sicence"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Defense",
      image: "maddening-insight-hamlet.png",
      cardName: "Maddening insight"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Versatile",
      image: "outrageous-fortune-hamlet.png",
      cardName: "Outrageous fortune"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Versatile",
      image: "blood-will-have-blood-hamlet.png",
      cardName: "Blood will have blood"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Versatile",
      image: "the-plays-the-thing-hamlet.png",
      cardName: "The play's the thing"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Versatile",
      image: "the-readiness-is-all-hamlet.png",
      cardName: "The readiness is all"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Attack",
      image: "to-sleep-perchance-to-dream-hamlet.png",
      cardName: "To sleep, perchance to dream"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Attack",
      image: "uncertain-doom-hamlet.png",
      cardName: "Uncertain doom"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Hamlet",
      type: "Attack",
      image: "cruel-to-be-kind-hamlet.png",
      cardName: "Cruel to be kind"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Scheme",
      image: "what-fools-these-mortals-be-titania.png",
      cardName: "What fools these mortals be"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Scheme",
      image: "gift-of-the-fair-folk-titania.png",
      cardName: "Gift of the Fair Folk"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Defense",
      image: "protection-of-the-fairy-woods-titania.png",
      cardName: "Protection of the Fairy Woods"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Defense",
      image: "but-a-dream-titania.png",
      cardName: "But a dream"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Versatile",
      image: "parting-gift-titania.png",
      cardName: "Parting gift"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Versatile",
      image: "fairy-song-titania.png",
      cardName: "Fairy song"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Versatile",
      image: "the-moon-looks-down-titania.png",
      cardName: "The Moon looks down"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Versatile",
      image: "whisked-away-titania.png",
      cardName: "Whisked away"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Versatile",
      image: "as-wise-as-beautiful-titania.png",
      cardName: "As wise as beautiful"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Attack",
      image: "met-by-moonlight-titania.png",
      cardName: "Met by Moonlight"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Attack",
      image: "queen-of-the-fairies-titania.png",
      cardName: "Queen of the Fairies"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Titania",
      type: "Attack",
      image: "a-momentary-glance-titania.png",
      cardName: "A momentary glance"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Attack",
      image: "double-double-wayward-sisters.png",
      cardName: "Double Double"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Defense",
      image: "toil-and-trouble-wayward-sisters.png",
      cardName: "Toil and Trouble"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Versatile",
      image: "fire-burn-and-cauldron-bubble-wayward-sisters.png",
      cardName: "Fire Burn and Cauldron Bubble"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Scheme",
      image: "prophecy-wayward-sisters.png",
      cardName: "Prophecy"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Scheme",
      image: "something-wicked-this-way-comes-wayward-sisters.png",
      cardName: "Something wicked this way comes"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Defense",
      image: "unnatural-remedy-wayward-sisters.png",
      cardName: "Unnatural remedy"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Defense",
      image: "pricking-of-my-thumbs-wayward-sisters.png",
      cardName: "Pricking of my thumbs"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Versatile",
      image: "ward-wayward-sisters.png",
      cardName: "Ward"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Versatile",
      image: "curious-familiar-wayward-sisters.png",
      cardName: "Curious familiar"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Versatile",
      image: "the-stars-align-wayward-sisters.png",
      cardName: "The stars align"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Attack",
      image: "hurly-burly-wayward-sisters.png",
      cardName: "Hurly-Burly"
    }, {
      id: nanoid(),
      set: "Slings and Arrows",
      hero: "Wayward Sisters",
      type: "Attack",
      image: "all-seeing-familiar-wayward-sisters.png",
      cardName: "All-seeing-familiar"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Scheme",
      image: "gear-tawny-owl-geralt.png",
      cardName: "GEAR: Tawny Owl"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Scheme",
      image: "gear-blizzard-geralt.png",
      cardName: "GEAR: Blizzard"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Defense",
      image: "gear-armor-of-the-forgotten-wolf-geralt.png",
      cardName: "GEAR: Armor of the Forgotten Wolf"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Defense",
      image: "gear-wolf-medallion-geralt.png",
      cardName: "GEAR: Wolf medallion"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Attack",
      image: "gear-sword-of-silver-geralt.png",
      cardName: "GEAR: Sword of silver"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Attack",
      image: "gear-sword-of-steel-geralt.png",
      cardName: "GEAR: Sword of steel"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Scheme",
      image: "witcher-senses-geralt.png",
      cardName: "Witcher senses"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "plot-twist-geralt.png",
      cardName: "Plot twist"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "annoying-tune-geralt.png",
      cardName: "Annoying tune"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "damn-youre-ugly-geralt.png",
      cardName: "Damn you're ugly"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "disciplined-duelist-geralt.png",
      cardName: "Disciplined duelist"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "rend-geralt.png",
      cardName: "Rend"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "yrden-geralt.png",
      cardName: "Yrden"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Versatile",
      image: "riposte-geralt.png",
      cardName: "Riposte"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Geralt of Rivia",
      type: "Attack",
      image: "igni-geralt.png",
      cardName: "Igni"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Scheme",
      image: "unicorn-ally-ciri.png",
      cardName: "Unicorn ally"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Scheme",
      image: "child-of-the-elder-blood-ciri.png",
      cardName: "Child of the Elder Blood"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Defense",
      image: "parry-ciri.png",
      cardName: "Parry"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Versatile",
      image: "searching-strike-ciri.png",
      cardName: "Searching strike"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Versatile",
      image: "blink-ciri.png",
      cardName: "Blink"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Versatile",
      image: "zireael-ciri.png",
      cardName: "Zireael"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Versatile",
      image: "the-lady-of-space-and-time-ciri.png",
      cardName: "The Lady of Space and Time"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Versatile",
      image: "pushed-to-the-brink-ciri.png",
      cardName: "Pushed to the brink"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Attack",
      image: "bane-of-the-aen-elle-ciri.png",
      cardName: "Bane of the Aen Elle"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Attack",
      image: "channel-the-source-ciri.png",
      cardName: "Channel the source"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ciri",
      type: "Attack",
      image: "lion-cub-of-cintra-ciri.png",
      cardName: "Lion Cub of Cintra"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Scheme",
      image: "vanish-into-murder-ancient-leshen.png",
      cardName: "Vanish into murder"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Scheme",
      image: "strength-of-the-pack-ancient-leshen.png",
      cardName: "Strength of the pack"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Defense",
      image: "primeval-guardian-ancient-leshen.png",
      cardName: "Primeval guardian"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Versatile",
      image: "harrying-strike-ancient-leshen.png",
      cardName: "Harrying Strike"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Versatile",
      image: "planted-feet-ancient-leshen.png",
      cardName: "Planted feet"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Attack",
      image: "command-the-forest-ancient-leshen.png",
      cardName: "Command the forest"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Attack",
      image: "nature-abounds-ancient-leshen.png",
      cardName: "Nature abounds"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Attack",
      image: "disturbing-howls-ancient-leshen.png",
      cardName: "Disturbing howls"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Attack",
      image: "flock-of-birds-ancient-leshen.png",
      cardName: "Flock of birds"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Attack",
      image: "primeval-slam-ancient-leshen.png",
      cardName: "Vanish into murder"
    }, {
      id: nanoid(),
      set: "Steel and Silver",
      hero: "Ancient Leshen",
      type: "Versatile",
      image: "wily-fighting-ancient-leshen.png",
      cardName: "Wily fighting"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Scheme",
      image: "lodge-of-sorceresses-yennefer&triss.png",
      cardName: "Lodge of Sorceresses"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Scheme",
      image: "advisor-to-the-king-yennefer&triss.png",
      cardName: "Advisor to the King"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Defense",
      image: "paralyzing-fetters-yennefer&triss.png",
      cardName: "Paralyzing fetters"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Defense",
      image: "magical-barrier-yennefer&triss.png",
      cardName: "Magical barrier"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Versatile",
      image: "quick-and-ready-yennefer&triss.png",
      cardName: "Quick and ready"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Versatile",
      image: "telepathy-yennefer&triss.png",
      cardName: "Telepathy"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Versatile",
      image: "ball-lightning-yennefer&triss.png",
      cardName: "Ball lightning"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Attack",
      image: "echoing-blast-yennefer&triss.png",
      cardName: "Echoing-blast"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Attack",
      image: "portal-to-anywhere-yennefer&triss.png",
      cardName: "Portal to anywhere"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Attack",
      image: "merigolds-hailstorm-yennefer&triss.png",
      cardName: "Merigold's Hailstorm"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Yennefer & Triss",
      type: "Attack",
      image: "incinerate-yennefer&triss.png",
      cardName: "Incinerate"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "owlform-philippa.png",
      cardName: "Owlform"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "lightning-bolt-philippa.png",
      cardName: "Lightning bolt"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "regicide-philippa.png",
      cardName: "Regicide"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "chain-lightning-philippa.png",
      cardName: "Chain lightning"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Versatile",
      image: "spellbreaker-philippa.png",
      cardName: "Spellbreaker"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Versatile",
      image: "redanian-plot-philippa.png",
      cardName: "Redanian plot"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Versatile",
      image: "cunning-philippa.png",
      cardName: "Cunning"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Defense",
      image: "blinding-dust-philippa.png",
      cardName: "Blinding dust"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Defense",
      image: "paralyzing-fetters-philippa.png",
      cardName: "Paralyzing fetters"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Scheme",
      image: "polymorphy-philippa.png",
      cardName: "Polymorphy"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Scheme",
      image: "spymasters-ruse-philippa.png",
      cardName: "Spymaster's ruse"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "backup-plan-philippa.png",
      cardName: "Backup plan"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Philippa",
      type: "Attack",
      image: "do-my-bidding-philippa.png",
      cardName: "Do my bidding"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Scheme",
      image: "close-for-the-kill-eredin.png",
      cardName: "Close for the kill"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Scheme",
      image: "might-of-the-aen-elle-eredin.png",
      cardName: "Might of the Aen Elle"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Defense",
      image: "implacable-eredin.png",
      cardName: "Implacable"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Defense",
      image: "portal-defense-eredin.png",
      cardName: "Portal defense"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Versatile",
      image: "icy-guile-eredin.png",
      cardName: "Icy guile"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Versatile",
      image: "wild-hunt-eredin.png",
      cardName: "Wild Hunt"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Attack",
      image: "unyielding-hordes-eredin.png",
      cardName: "Unyielding hordes"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Attack",
      image: "foul-purpose-eredin.png",
      cardName: "Foul purpose"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Attack",
      image: "backhand-eredin.png",
      cardName: "Backhand"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Attack",
      image: "brutal-strike-eredin.png",
      cardName: "Brutal strike"
    }, {
      id: nanoid(),
      set: "Realm's Fall",
      hero: "Eredin",
      type: "Versatile",
      image: "skirmish-eredin.png",
      cardName: "Skirmish"
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
