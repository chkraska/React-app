import React, { useState } from "react";
//import Accordion from "./components/Accordion";
import CountryCard from "./components/usercard/CountryCard";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Box,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      {/* <CountryCard /> */}

      <Button colorScheme="teal" size="md">
        Button
      </Button>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion title="Losowy Tytuł" text="losowy tekst" />
    </div>
  );
}

export default App;

// import UserCard from "./components/userCard";
// import FlightInfo from "./components/FlightInfo";

// const users = ["Janek", "John", "Dawid"];

// const [nazwaelementu, nazwadrugiegoelementu] = users;

// console.log(nazwaelementu);

// export default function App() {
//   //getter, setter
//   const [counter, setCounter] = useState(1);

//   const handleIncrease = () => {
//     if (counter < 10) {
//       setCounter(counter + 1);
//     } else {
//       alert("blokada");
//     }
//   };

//   const handleDecrease = () => (counter > 0 ? setCounter(counter - 1) : null);

//   const handleMultiply = () => {
//     setCounter(counter * 2);
//   };
//   return (
//     <div>
//       <h3>{counter}</h3>
//       <button onClick={handleIncrease}>zwieksz o 1</button>
//       <button onClick={handleDecrease}>zmniejsz o 1</button>
//       <button onClick={handleMultiply}>pomnóż o 2</button>
//     </div>
//   );
// }

//export default function App() {
//   return (
//     <div>
//       <UserCard user="Jan kowlaski" city="Wrocław" age={23} />
//       <UserCard user="Anna Nowak" city="Warszawa" age={21} />
//       <UserCard user="Kamil Burak" city="Katowice" age={18} />
//       <FlightInfo
//         flight="Katowice - Teneryfa"
//         airport="Pyrzowice"
//         flightid="7219D"
//         price="1000PLN"
//         direction="Tenerife"
//       />
//       <FlightInfo
//         flight="Katowice - Corfu"
//         airport="Pyrzowice"
//         flightid="74419E"
//         price="2000PLN"
//         direction="Corfu"
//       />
//       <FlightInfo
//         flight="Kraków - Oslo"
//         airport="Balice"
//         flightid="43993S"
//         price="4999PLN"
//         direction="Norway"
//       />
//     </div>
//   );
// }

// import React from "react";

// export default function App() {
//   const firstname = "Jan";
//   const lastname = "Kowlaski";
//   const hour = new Date().getHours();

//   function showuser() {
//     return "Chrisu";
//   }

//   function godzina() {
//     let x = 17;
//     if (x < 18) {
//       return "dzień dobry";
//     } else {
//       return "Dobry wieczór";
//     }
//   }
//   const isAdmin = true;

//   return (
//     <div>
//       <p>{godzina()}</p>
//       <h3>{isAdmin ? "Witaj adminie" : "Odmowa dostępu"}</h3>

//       {isAdmin ? <h3>Witaj</h3> : <button>Zaloguj się</button>}
//       <h3>
//         Witaj {firstname} {lastname}
//       </h3>
//       <p>godzina: {hour}</p>
//       <p>Wynik: {2 + 2 * 2}</p>
//       <p>{firstname.toUpperCase()}</p>
//       <p>{showuser()}</p>
//     </div>
//   );
// }
