import bbq from "./bbq.jpeg";
import tanks from "./tanks.png";
import dives from "./dives.jpeg";
import diver from "./diver.jpeg";
import dolphin from "./dolphin.jpeg";
import equipment from "./equipment.webp";
import fishing from "./fishing.webp";
import fishingMorning from "./fishingmorning.jpeg";

import styles from "./MyDiveSchool.module.css";

import { GridPage, GridTextBox } from "../../components/GridPage/GridPage";

export const MyDiveSchool = () => {
  return (
    <div className={styles.container}>
      <GridPage title="My Dive School">
        <img src={tanks} alt="Divers with tanks" />
        <GridTextBox title="About Us">
          Welcome to My Adventures, the world's first floating dive center in
          the Maldives! Immerse yourself in unparalleled underwater experiences
          aboard our unique platform. With daily dive trips and expert PADI
          courses, our certified team ensures unforgettable adventures beneath
          the waves. Discover the magic of the Maldives with us, where every
          dive is a journey into paradise.
        </GridTextBox>
        <GridTextBox title="Fun Dives">
          Dive into excitement with our thrilling adventures! From encounters
          with majestic sharks and gentle mantas to the mystery of night dives
          and the allure of wreck exploration, My Adventures Dive Center offers
          unforgettable experiences for every underwater enthusiast.
        </GridTextBox>
        <img src={dives} alt="Ocean with sharks" />
        <img src={equipment} alt="Diving equipment" />
        <GridTextBox title="Equipment">
          Dive into adventure worry-free. Rent top-quality gear from My
          Adventures Dive Center and explore the depths with confidence.
        </GridTextBox>
        <GridTextBox title="Dive Courses">
          Learn the basics from our expert instructors and embark on your
          underwater journey with confidence with our <b>beginner course</b>.
          <br />
          <br />
          Or take our <b>advanced course</b> to master new techniques and
          explore deeper realms under the guidance of our experienced
          instructors.
        </GridTextBox>
        <img src={diver} alt="Diver in front of coral" />
        <img src={dolphin} alt="Dolphin" />
        <GridTextBox title="Dolphin Cruise">
          Experience the enchantment of a Maldivian sunset while spotting
          playful dolphins. Join us for My Adventures Dive Center's Sunset
          Dolphin Tour today!
        </GridTextBox>
        <GridTextBox title="Night Fishing">
          Cast your line under the starlit sky and reel in unforgettable
          memories with My Adventures Dive Center's Night Fishing excursion.
          Join us for an exhilarating night on the water!
        </GridTextBox>
        <img src={fishing} alt="Fishing at night" />
        <img src={fishingMorning} alt="Fishing at morning" />
        <GridTextBox title="Sunrise Trolling">
          Start your day with adventure! Join My Adventures Dive Center for an
          exhilarating sunrise trolling fishing experience in the pristine
          waters of the Maldives.
        </GridTextBox>
        <GridTextBox title="Beach Barbecue">
          Savor the flavors of the sea and land with My Adventures Dive Center's
          Beach Barbecue. Indulge in delicious grilled delights while soaking in
          the stunning ocean views. Join us for an unforgettable culinary
          experience!
        </GridTextBox>
        <img src={bbq} alt="BBQ" />
      </GridPage>
    </div>
  );
};
