import "./App.css";
import IdCard from "./components/IdCard.jsx";
import Greetings from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";
import Rating from "./components/Rating.jsx";
import DriverCard from "./components/DriverCard.jsx";
import LikeButton from "./components/LikeButton.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
import Carousel from "./components/Carousel.jsx";
import NumbersTable from "./components/NumbersTable.jsx";
import FaceBook from "./components/FaceBook.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      //!itteration 1
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      //! itteration 2<Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      //!itteration 3
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Random min={80} max={100} />
      //!itteration 4
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      //!Iteration 5
      <div className="allCard">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      //! Iteration 6
      <div className="ratingContainer">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      //!Iteration 7
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>
      //! Iteration 8
      <div>
        <LikeButton />
      </div>
      //! Iteration 9
      <div>
        <ClickablePicture
          img="https://res.cloudinary.com/djyjdargg/image/upload/v1550165798/Ironclass/IH_Jan1946.jpg.jpg"
          imgClicked="./src/assets/images/glasses.png"
        />
      </div>
      //! Iteration 10
      <div>
        <Dice />
      </div>
      //! Iteration 11
      <div>
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />
      </div>
      //! Iteration 12
      <div>
        <NumbersTable limit={12} />
        {/* <NumbersTable limit={50} /> */}
      </div>
      //! Iteration 13
      <div>
        <FaceBook />
      </div>
      //! Iteration 14
      <div></div>
    </div>
  );
}

export default App;
