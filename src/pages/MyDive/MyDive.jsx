import bbq from "./bbq.jpeg";
import tanks from "./tanks.png";
import dives from "./dives.jpeg";
import diver from "./diver.jpeg";
import dolphin from "./dolphin.jpeg";
import equipment from "./equipment.webp";
import fishing from "./fishing.webp";
import fishingMorning from "./fishingmorning.jpeg";
import moocho from "./moocho.jpeg";
import sajee from "./sajee.jpeg";
import styles from "./MyDive.module.css";

import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { GridPage, GridTextBox } from "../../components/GridPage/GridPage";

import { HashLink } from "react-router-hash-link";

export const MyDive = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container} id="top">
      <Header />
      <h1 className={styles.pageTitle}>My Dive</h1>
      <div className={styles.navigation}>
        <HashLink smooth to="#about">
          About
        </HashLink>
        <HashLink smooth to="#activities">
          Activities
        </HashLink>
        <HashLink smooth to="#team">
          Team
        </HashLink>
        {/* <HashLink smooth to="#prices">
          Prices
        </HashLink>
        <HashLink smooth to="#gallery">
          Gallery
        </HashLink> */}
      </div>

      <GridPage id="about">
        <img src={tanks} alt="Divers with tanks" />
        <GridTextBox title="About Us">
          Welcome to My Adventures, Maldives' favorite floating dive center!
          Immerse yourself in unparalleled underwater experiences aboard our
          unique platform. With daily dive trips and expert PADI courses, our
          certified team ensures unforgettable adventures beneath the waves.
          Discover the magic of the Maldives with us, where every dive is a
          journey into paradise.
        </GridTextBox>
      </GridPage>
      <GridPage title="Activities" id="activities">
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
      <GridPage title="Team" id="team">
        <img src={moocho} alt="Man diver" />
        <GridTextBox title="Hi, I am Moocho">
          "Yo-ho! I'm Moocho, a captain and diver for two decades, exploring the
          Maldives' depths year-round. From coral to currents, I navigate
          seasonal shifts and animal migrations, dedicated to preserving our
          marine wonders for future generations. Join me as we embark on a
          voyage of conservation and discovery!"
        </GridTextBox>
        <GridTextBox title="Hi, I am Sajee">
          "Hello, fellow adventurers! I'm Sajee, a dive aficionado with a
          penchant for exploration. With fins on my feet and a sense of wonder
          in my heart, I've traversed the depths of both the northern and
          southern realms of the Maldives, uncovering hidden treasures beneath
          the waves. Join me as we embark on unforgettable underwater journeys
          together!"
        </GridTextBox>
        <img src={sajee} alt="Man with long hair" />
      </GridPage>
      {/* <GridPage title="Prices" id="prices">
        <GridTextBox title="Fun Dive Price">
          <ul className={styles.priceList}>
            <li>
              Single dive with equipment <b>$75</b>
            </li>
            <li>
              Single dive without equipment <b>$65</b>
            </li>
            <li>
              3 Boat dives with equipment <b>$150</b>
            </li>
            <li>
              3 Boat dives without Equipment <b>$165</b>
            </li>
          </ul>
        </GridTextBox>
        <GridTextBox title="Equipment Rental">
          <ul className={styles.priceList}>
            <li>
              BCD <b>$10</b>
            </li>
            <li>
              REG <b>$10</b>
            </li>
            <li>
              COMP <b>$10</b>
            </li>
            <li>
              WETSUIT <b>$10</b>
            </li>
            <li>
              MASK & FINS <b>$5</b>
            </li>
            <li>
              15L TANK <b>$15</b>
            </li>
          </ul>
        </GridTextBox>
        <GridTextBox title="Dive Packages">
          <ul className={styles.priceList}>
            <li>
              <div>
                <p>5 days group dive per pax</p>
                <small>5pax, 5 days, 13 dives, beach trip</small>
              </div>
              <b>$800</b>
            </li>
            <li>
              <div>
                <p>3 days group dive per pax</p>
                <small>5pax, 5 days, 13 dives, beach trip</small>
              </div>
              <b>$550</b>
            </li>
          </ul>
        </GridTextBox>
        <GridTextBox title="Activities">
          <ul className={styles.priceList}>
            <li>
              <div>
                <p>Beach BBQ Setup</p>
                <small>MIN pax 8</small>
              </div>
              <b>$75</b>
            </li>
            <li>
              <div>
                <p>Dolphin Cruise</p>
                <small>MIN Pax 8</small>
              </div>
              <b>$65</b>
            </li>
            <li>
              <div>
                <p>Local Island Tour</p>
                <small>MIN Pax 10</small>
              </div>
              <b>$50</b>
            </li>
            <li>
              <div>
                <p>Trolling</p>
                <small>MIN Pax 3</small>
              </div>
              <b>$200</b>
            </li>
            <li>
              <div>
                <p>Night Fishing</p>
                <small>MIN Pax 10</small>
              </div>
              <b>$50</b>
            </li>
          </ul>
        </GridTextBox>
        <GridTextBox title="Dive Courses">
          <ul className={styles.priceList}>
            <li>
              PADI Open Water Course <b>$500</b>
            </li>
            <li>
              PADI Advanced Open Water <b>$450</b>
            </li>
            <li>
              PADI Discover Scuba Diving<b> $100</b>
            </li>
            <li>
              PADI Scuba Diver Course <b>$350</b>
            </li>
            <li>
              PADI Referral Course <b>$350</b>
            </li>
          </ul>
        </GridTextBox>
        <GridTextBox title="Group of services">
          <ul className={styles.priceList}>
            <li>
              PADI EFR <b>$250</b>
            </li>
            <li>
              PADI Adventure Course <b>$350</b>
            </li>
            <li>
              PADI Rescue Diver Course<b> $450</b>
            </li>
            <li>
              PADI Dive Master Course <b>$1500</b>
            </li>
            <li>
              PADI Specialty <b>$250</b>
            </li>
          </ul>
        </GridTextBox>
      </GridPage> */}
    </div>
  );
};
