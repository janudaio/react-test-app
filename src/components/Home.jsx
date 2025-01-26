import '../styles/home.css';

function Home() {
    return (
        <>
            <div className="main-section home">
                <div className="home-content">
                    <div>
                        <span className="hello">Hello!</span>
                        <h1>
                            I am <br />
                            <span>Januda</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias consequatur
                        </p>
                    </div>
                </div>
                <div className="contacts">
                    <ul>
                        <li className="email">
                            <a href="mailto:dev.j.a@gmail.com">
                                dev.januda@gmail.com
                            </a>
                        </li>
                        <li>+94 75 71 98138</li>
                        <li>Kegalle, Sri Lanka</li>
                    </ul>
                    <div className="icons">
                        <a href="https://github.com/janudaio" target="_blank">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/januda-amaneth-094124288/"
                            target="_blank"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="#" target="_blank">
                            <ion-icon name="logo-google"></ion-icon>
                        </a>
                        <a
                            href="https://www.instagram.com/__ja_n_u_wa.__/"
                            target="_blank"
                        >
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                    <div className="call2act">
                        {/* <button className="interactive-hover-button-1">
                            <a
                                href=""
                                style="color: inherit; text-decoration: none"
                            >
                                About Me
                            </a>
                        </button>
                        <button className="interactive-hover-button-2">
                            <a style="color: inherit; text-decoration: none">
                                Portfolio
                            </a>
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
