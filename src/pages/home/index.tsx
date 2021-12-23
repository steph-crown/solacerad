import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomePageContainer } from "./style";

export const HomePage: FC = () => {
    const history = useHistory();
    console.log(history);
    useEffect(() => {
        return () => {};
    }, []);
    return (
        <HomePageContainer>
            {" "}
            <div>
                {/* pre-loder-area area start here  */}
                <div className="preloader">
                    <span className="loader">
                        <span className="loader-inner" />
                    </span>
                </div>
                {/* pre-loder-area area start here  */}
                <div className="main-wrapper">
                    {/* header area start here  */}
                    <header
                        className="header-area transparent-header d-none d-lg-block"
                        id="sticky"
                    >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 ">
                                    <div className="header-logo">
                                        <a href="index.html">
                                            <img
                                                src="./images/logo.png"
                                                alt="pragnacy"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div className="primary-menu text-center">
                                        <nav>
                                            <ul>
                                                <li className="current-menu-item ">
                                                    <a href="index.html">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="about.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service.html">
                                                        Service
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">Team</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-3 text-end ">
                                    <a
                                        href="appintment.html"
                                        className="header-btn"
                                    >
                                        Get Appintment
                                    </a>
                                </div>
                                .
                            </div>
                        </div>
                    </header>
                    {/* header area start here  */}
                    {/* mobile header area start here  */}
                    <div className="mobile-header d-block d-lg-none ">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html">
                                    <img
                                        src="./images/logo.png"
                                        alt="pragnacy"
                                    />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="/navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fas fa-bars" />
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarNav"
                                >
                                    <ul className="navbar-nav ">
                                        <li className="current-menu-item ">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="service.html">Service</a>
                                        </li>
                                        <li>
                                            <a href="team.html">Team</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="appintment.html">
                                                Get Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* mobile header area end here  */}
                    {/* hero banner area start here  */}
                    <section className="hero-banner-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="hero-banenr-image">
                                        <img
                                            src="./images/hero-banner-image.png"
                                            alt="hero-banner"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hero-banenr-text">
                                        <h1 className="banner-title">
                                            Welcome to Healthy Pregnancy
                                            Fertility Center
                                        </h1>
                                        <p className="banner-content">
                                            Feugiat fringilla eu, potenti ut
                                            penatibus penatibus cras gravida.
                                            Consequat tristique risus aenean
                                            velit non. Aliquam pulvinar dictumst
                                            mi in ut. Consequat arcu metus
                                            aenean feugiat ut ac.
                                        </p>
                                        <a className="primary-btn" href="/">
                                            FInd Out More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* hero banner area end here  */}
                    {/* story area start here  */}
                    <section className="story-area section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title mb-45 text-center">
                                        <h2 className="title">
                                            Read Our Story
                                        </h2>
                                        <p className="sub-title">
                                            {" "}
                                            Elementum consequat elit augue morbi
                                            ac sagittis maecenas sed. Turpis
                                            auctor condimentum orci platea at
                                            urna pretium et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="story-wrap">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="story-video">
                                            <img
                                                className="video-thumbnail"
                                                src="./images/story-image.png"
                                                alt="story"
                                            />
                                            <div className="video-info">
                                                <a
                                                    href="https://youtu.be/01fswlREnjM"
                                                    className="video-btn popup-video"
                                                    data-autoplay="true"
                                                    data-vbtype="video"
                                                >
                                                    <i className="icon fas fa-play" />
                                                </a>
                                            </div>
                                            <div className="circle-area">
                                                <div className="circel-one">
                                                    <img
                                                        src="./images/circle-1.png"
                                                        alt="circle"
                                                    />
                                                </div>
                                                <div className="circel-two">
                                                    <img
                                                        src="./images/circle-2.png"
                                                        alt="circle"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="story-info">
                                            <h2>Welcome to Pregnancy Care</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Leo
                                                hac a sit tincidunt ornare
                                                dictum quis neque. Purus
                                                interdum senectus nisi,
                                                hendrerit dapibus. Egestas ac
                                                neque ac in. Lacus nisi nunc,
                                                vulputate libero faucibus urna,
                                                sed maecenas.
                                            </p>
                                            <p>
                                                Rutrum mattis mauris sagittis
                                                ullamcorper curabitur. Dictumst
                                                mi sit pellentesque semper nunc
                                                ac senectus.
                                            </p>
                                            <a className="primary-btn" href="/">
                                                About Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span className="circle" />
                            </div>
                        </div>
                    </section>
                    {/* story area end here  */}
                    {/* service area start here  */}
                    <section className="service-area section-top pb-110">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title title-white mb-45 text-center">
                                        <h2 className="title">
                                            Why Your Should Choose Us
                                        </h2>
                                        <p className="sub-title">
                                            Elementum consequat elit augue morbi
                                            ac sagittis maecenas sed. Turpis
                                            auctor condimentum orci platea at
                                            urna pretium et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s1.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Family Planning</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s2.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Risk Pregnancy Care</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s3.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Gynecological</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s4.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Fertility Medication</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s5.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Personal Ultrasound</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-serice text-center">
                                        <div className="service-icon">
                                            <img
                                                src="./images/s1.png"
                                                alt="service icon"
                                            />
                                        </div>
                                        <h3>
                                            <a href="/">Infant Activities</a>
                                        </h3>
                                        <p>
                                            Mauris enim vitae maecenas
                                            ullamcorper nisi velit volutpat
                                            egestas libero. Massa posuere enim
                                            eget arcu, nunc, nunc id. Nec enim,
                                            viverra fringilla nam faucibus.
                                        </p>
                                        <a className="service-btn" href="/">
                                            View Details{" "}
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service area end here  */}
                    {/* counter area start here  */}
                    <section className="counter-area section-top ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="signle-counter text-center">
                                        <div className="counter-icon">
                                            <img
                                                src="./images/c1.png"
                                                alt="counter icon"
                                            />
                                        </div>
                                        <h2 className="counter-text">
                                            <span className="counter">500</span>{" "}
                                            <span>+</span>
                                        </h2>
                                        <h4 className="counter-title">
                                            Patients Every Day
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="signle-counter text-center">
                                        <div className="counter-icon">
                                            <img
                                                src="./images/c2.png"
                                                alt="counter icon"
                                            />
                                        </div>
                                        <h2 className="counter-text">
                                            <span className="counter">500</span>{" "}
                                            <span>+</span>
                                        </h2>
                                        <h4 className="counter-title">
                                            Patients Every Day
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="signle-counter text-center">
                                        <div className="counter-icon">
                                            <img
                                                src="./images/c3.png"
                                                alt="counter icon"
                                            />
                                        </div>
                                        <h2 className="counter-text">
                                            <span className="counter">500</span>{" "}
                                            <span>+</span>
                                        </h2>
                                        <h4 className="counter-title">
                                            Patients Every Day
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="signle-counter text-center">
                                        <div className="counter-icon">
                                            <img
                                                src="./images/c4.png"
                                                alt="counter icon"
                                            />
                                        </div>
                                        <h2 className="counter-text">
                                            <span className="counter">500</span>{" "}
                                            <span>+</span>
                                        </h2>
                                        <h4 className="counter-title">
                                            Patients Every Day
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* counter area end here  */}
                    {/* Quafied Doctors areas tart here  */}
                    <section className="quafied-doctors-area pt-110 section-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title mb-45 text-center">
                                        <h2 className="title">
                                            Quafied Doctors Guide
                                        </h2>
                                        <p className="sub-title">
                                            {" "}
                                            Elementum consequat elit augue morbi
                                            ac sagittis maecenas sed. Turpis
                                            auctor condimentum orci platea at
                                            urna pretium et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ul
                                className="nav nav-tabs"
                                id="quafied-doctors"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link active"
                                        id="getting-pregnant-tab"
                                        data-bs-toggle="tab"
                                        href="/getting-pregnant"
                                        role="tab"
                                        aria-controls="getting-pregnant"
                                        aria-selected="true"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/getting-pregnant.svg"
                                                alt="getting-pregnant"
                                            />
                                        </div>
                                        <span>Getting Pregnant</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="pregnancy-tab"
                                        data-bs-toggle="tab"
                                        href="/pregnancy"
                                        role="tab"
                                        aria-controls="pregnancy"
                                        aria-selected="false"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/pregnancy.svg"
                                                alt="pregnancy"
                                            />
                                        </div>
                                        <span>Pregnancy</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="first-scan-tab"
                                        data-bs-toggle="tab"
                                        href="/first-scan"
                                        role="tab"
                                        aria-controls="first-scan"
                                        aria-selected="false"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/first-scan.svg"
                                                alt="first-scan"
                                            />
                                        </div>
                                        <span>First Scan</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="baby-birth-tab"
                                        data-bs-toggle="tab"
                                        href="/baby-birth"
                                        role="tab"
                                        aria-controls="baby-birth"
                                        aria-selected="false"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/baby-birth.svg"
                                                alt="baby-birth"
                                            />
                                        </div>
                                        <span>Baby Birth</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="baby-care-tab"
                                        data-bs-toggle="tab"
                                        href="/baby-care"
                                        role="tab"
                                        aria-controls="baby-care"
                                        aria-selected="false"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/baby-care.svg"
                                                alt="baby-care"
                                            />
                                        </div>
                                        <span>Baby Care</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="feeding-baby-tab"
                                        data-bs-toggle="tab"
                                        href="/feeding-baby"
                                        role="tab"
                                        aria-controls="feeding-baby"
                                        aria-selected="false"
                                    >
                                        <div className="tab-icon">
                                            <img
                                                className="icon"
                                                src="./images/feeding-baby.svg"
                                                alt="feeding-baby"
                                            />
                                        </div>
                                        <span>Feeding Baby</span>
                                    </a>
                                </li>
                            </ul>
                            <div
                                className="tab-content"
                                id="quafied-doctorsContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="getting-pregnant"
                                    role="tabpanel"
                                    aria-labelledby="getting-pregnant-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pregnancy"
                                    role="tabpanel"
                                    aria-labelledby="pregnancy-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="first-scan"
                                    role="tabpanel"
                                    aria-labelledby="first-scan-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="baby-birth"
                                    role="tabpanel"
                                    aria-labelledby="baby-birth-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="baby-care"
                                    role="tabpanel"
                                    aria-labelledby="baby-care-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="feeding-baby"
                                    role="tabpanel"
                                    aria-labelledby="feeding-baby-tab"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="quafied-doctors-img">
                                                <img
                                                    src="./images/getting-pregnant.png"
                                                    alt="quafied"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="quafied-doctors-content">
                                                <h2>
                                                    Best Quality Pregnancy
                                                    Center
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Leo hac a sit tincidunt
                                                    ornare dictum quis neque.
                                                    Purus interdum senectus
                                                    nisi, hendrerit dapibus.
                                                    Egestas ac neque ac in.
                                                </p>
                                                <p>
                                                    Rutrum mattis mauris
                                                    sagittis ullamcorper
                                                    curabitur. Dictumst mi sit
                                                    pellentesque semper nunc ac
                                                    senectus.
                                                </p>
                                                <div className="quafied-feature-list">
                                                    <ul className="quafied-feature">
                                                        <li>
                                                            Qualified Doctors
                                                        </li>
                                                        <li>Outdoor Checkup</li>
                                                        <li>General Medical</li>
                                                        <li>24x7 Emergency</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    className="primary-btn"
                                                    href="/"
                                                >
                                                    Get Appointment
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Quafied Doctors areas end here  */}
                    {/* testimonial area start here  */}
                    <section className="testimonial-area section-top pb-110">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title mb-45 text-center">
                                        <h2 className="title">
                                            Clients Feedback
                                        </h2>
                                        <p className="sub-title">
                                            {" "}
                                            Elementum consequat elit augue morbi
                                            ac sagittis maecenas sed. Turpis
                                            auctor condimentum orci platea at
                                            urna pretium et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="single-testimonial text-center ">
                                    <div className="quote-icon">
                                        <img
                                            className="icon"
                                            src="./images/quote.svg"
                                            alt="quote"
                                        />
                                    </div>
                                    <div className="clint-say">
                                        <p>
                                            Ut ut porta gravida tristique ac id
                                            interdum in volutpat. Justo, viverra
                                            libero augue aenean etiam. Varius in
                                            a ornare suspendisse arcu,
                                            adipiscing.{" "}
                                        </p>
                                    </div>
                                    <div className="clint-info">
                                        <h3>Robert Luise</h3>
                                        <span>General Patient</span>
                                    </div>
                                    <ul className="clint-rating">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="far fa-star" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="single-testimonial text-center ">
                                    <div className="quote-icon">
                                        <img
                                            className="icon"
                                            src="./images/quote.svg"
                                            alt="quote"
                                        />
                                    </div>
                                    <div className="clint-say">
                                        <p>
                                            Ut ut porta gravida tristique ac id
                                            interdum in volutpat. Justo, viverra
                                            libero augue aenean etiam. Varius in
                                            a ornare suspendisse arcu,
                                            adipiscing.{" "}
                                        </p>
                                    </div>
                                    <div className="clint-info">
                                        <h3>Robert Luise</h3>
                                        <span>General Patient</span>
                                    </div>
                                    <ul className="clint-rating">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="far fa-star" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="single-testimonial text-center ">
                                    <div className="quote-icon">
                                        <img
                                            className="icon"
                                            src="./images/quote.svg"
                                            alt="quote"
                                        />
                                    </div>
                                    <div className="clint-say">
                                        <p>
                                            Ut ut porta gravida tristique ac id
                                            interdum in volutpat. Justo, viverra
                                            libero augue aenean etiam. Varius in
                                            a ornare suspendisse arcu,
                                            adipiscing.{" "}
                                        </p>
                                    </div>
                                    <div className="clint-info">
                                        <h3>Robert Luise</h3>
                                        <span>General Patient</span>
                                    </div>
                                    <ul className="clint-rating">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="far fa-star" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="single-testimonial text-center ">
                                    <div className="quote-icon">
                                        <img
                                            className="icon"
                                            src="./images/quote.svg"
                                            alt="quote"
                                        />
                                    </div>
                                    <div className="clint-say">
                                        <p>
                                            Ut ut porta gravida tristique ac id
                                            interdum in volutpat. Justo, viverra
                                            libero augue aenean etiam. Varius in
                                            a ornare suspendisse arcu,
                                            adipiscing.{" "}
                                        </p>
                                    </div>
                                    <div className="clint-info">
                                        <h3>Robert Luise</h3>
                                        <span>General Patient</span>
                                    </div>
                                    <ul className="clint-rating">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="far fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial area end here  */}
                    {/* subscribe area start here  */}
                    <section className="subscribe-area section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title title-white mb-45 text-center">
                                        <h2 className="title">
                                            Get Pregnant Stories inbox
                                        </h2>
                                        <p className="sub-title">
                                            Elementum consequat elit augue morbi
                                            ac sagittis maecenas sed. Turpis
                                            auctor condimentum orci platea at
                                            urna pretium et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="subscribe-form text-center">
                                        <form action="/">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter Your Email"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="primary-btn"
                                            >
                                                Subscribe Now
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* subscribe area end here  */}
                    {/* footer area start here  */}
                    <footer className="footer-aera">
                        <div className="footer-top text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="footer-widget">
                                            <div className="footer-brand">
                                                <a href="/">
                                                    <img
                                                        src="./images/footer-logo.png"
                                                        alt="footer-logo"
                                                    />
                                                </a>
                                            </div>
                                            <div className="footer-menu-widget">
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <a href="/">home</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                About Us
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Services
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Our Team
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Contact Us
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="social-media-widget">
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="copyright-area text-center text-md-start">
                                            <p className="mb-0">
                                                © <a href="/">ZainikLab</a> 2021
                                                Allright Reserved
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="terms-policy-area text-center text-md-end">
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Terms of Cockies
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* footer area end here  */}
                </div>
            </div>
        </HomePageContainer>
    );
};
