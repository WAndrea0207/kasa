import "./about.scss";
import Banner from "../components/Banner.jsx";
import bannerAbout from "../assets/banner-about.webp";
import Dropdown from "../components/Dropdown.jsx";

export default function About() {   
    return (
        <main className="about">
            <Banner image={bannerAbout}/>
            <div className="about__dropdowns">
                <Dropdown title="Fiabilité">
                </Dropdown>
                <Dropdown title="Respect">
                </Dropdown>
                <Dropdown title="Service">
                </Dropdown>
                <Dropdown title="Sécurité">
                </Dropdown>
            </div>
            
        </main>
    );
}   