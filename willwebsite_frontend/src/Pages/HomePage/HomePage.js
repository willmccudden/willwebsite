
import { HomePageSlide } from '../../Components/HomePageSlide/HomePageSlide';
import './HomePage.css'
import HomePageText1 from '../../Components/HomePageSlide/HomePageText1';
import HomePageText2 from '../../Components/HomePageSlide/HomePageText2';
import HomePageText3 from '../../Components/HomePageSlide/HomePageText3';
import { Reveal } from '../../Components/UtilComponents/Reveal';
import NavBar from '../../Components/NavBar/NavBar';
import UniversityPhoto from '../../Images/UniversityPhoto.jpg'
import IBMLogo from '../../Images/IBMLogo.png'
import SurfingPhoto from '../../Images/SurfingPhoto.jpg'

function HomePage() {
    return (
        <div className='background'>
            <div className='container'>
                <div className='navbar-grid'>
                    <NavBar />
                </div>
                <div>
                    <h2>Will McCudden</h2>
                </div>

            </div>
            <h1>---- ABOUT ME ----</h1>
            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={4}>
                    <img src={UniversityPhoto} width='100%' alt='University Photo' />
                    <p className='slide-text'>{HomePageText1}</p>
                </HomePageSlide>
            </Reveal>

            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={4}>
                    <img className='slide-image' src={IBMLogo} width='100%' alt='IBM Logo' />
                    <p className='slide-text'>{HomePageText2}</p>
                </HomePageSlide>
            </Reveal>

            <Reveal>
                <HomePageSlide leftWeight={1} rightWeight={4}>
                    <img className='slide-image' src={SurfingPhoto} width='100%' alt='Surfing Photo' />
                    <p className='slide-text'>{HomePageText3}</p>
                </HomePageSlide>
            </Reveal>
        </div>
    )
}

export default HomePage;