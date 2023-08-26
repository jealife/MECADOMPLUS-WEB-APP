import Image from "next/image";
import Hand3D from '../../../assets/images/Hand Holding Wrench.png'
import './hero.css'
import ServiceStack from "../serviceStack/ServiceStack";
export default function Hero() {
    return (
        <div>
            <div className="hero-section">
                <div className="left-section">
                    <div className="left-section-container">
                        <div className="top">
                            <span> ne cherchez plus loin </span>
                            <h1 className="hero-title">
                                Trouvez un <span>Mécanicien </span>
                                où que vous soyez
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                                repellendus at ea consectetur esse optio reprehenderit modi,
                                facilis tenetur aut. Inventore incidunt perferendis asperiores
                                earum.
                            </p>

                            <div className="search-bar-container">
                                <form className="search-home-form" action="" method="post">
                                    <input id="homeSearch" type="search" placeholder="Search your service..." required />
                                        <button type="submit">
                                            <i className='bx bx-search-alt-2'></i>
                                        </button>
                                </form>
                            </div>
                        </div>
                        <div className="bottom"></div>
                        <div className="msg-bottom">
                            <div className="icon-bottom">
                                <Image src={Hand3D} alt="Hand 3d" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestias!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right-section"></div>

                <div className="services-block">
                    <h2>
                        Services
                    </h2>
                    <ServiceStack/>
                </div>
            </div>
        </div>
    )
}