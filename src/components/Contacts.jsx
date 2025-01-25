import '../styles/Contacts.css';

function Contacts() {
    return (
        <>
            <div className="contacts">
                <ul>
                    <li className="email">
                        <a
                            href="mailto:dev.j.a@gmail.com"
                            style="
                                color: inherit;
                                text-decoration: none;
                                transition: color 0.3s;
                            "
                            onMouseOver="this.style.color='#ff7200';"
                            onMouseOut="this.style.color='inherit';"
                        >
                            dev.januda@gmail.com
                        </a>
                    </li>
                    <li className="phone">+94 75 71 98138</li>
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
            </div>
        </>
    );
}

export default Contacts;
