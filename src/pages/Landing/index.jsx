import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { BiCheckDouble, BiCaretDownCircle } from "react-icons/bi"
import { AiOutlineMedicineBox } from "react-icons/ai"
import { GiDoctorFace, GiMedicines } from "react-icons/gi"
import { PiStudent } from "react-icons/pi"
import { CgDetailsMore } from "react-icons/cg"
import MovingComponent from 'react-moving-text'

function Landing() {
    return (
        <div>



            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">

                    <h1 class="logo  text-primary p-2">Service Uni.</h1>

                    <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto o" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>



                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                            <li> <Link className='getstarted scrollto active' to="/login" >Login</Link></li>
                            <li> <Link className='getstarted scrollto active' to="/signup" >Sign Up</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-9 text-center">

                            <h1>
                                Online Service Portal
                            </h1>
                            <h2>By </h2>
                            <h2> <MovingComponent duration="1000ms" type="typewriter"
                                dataText={[
                                    "UNIVERSITY OF WOLLONGONG"
                                ]} /></h2>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#about" class="btn-get-started  scrollto ">Get Started</a>

                    </div>

                    <div class="row icon-boxes">
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><AiOutlineMedicineBox size={35} /></div>
                                <h4 class="title"><a href="">Book Appointment</a></h4>
                                <p class="description">Now you can simply book an appointment with your doctor at anytime </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><GiMedicines size={35} /></div>
                                <h4 class="title"><a href="">Buy Medicine</a></h4>
                                <p class="description">Facility to book medicines online and later on you can buy , Skip Queues</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><PiStudent size={35} /></div>
                                <h4 class="title"><a href="">Subjects Enrollment</a></h4>
                                <p class="description">Enroll your subjects in this online portal</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                            <div class="icon-box">
                                <div class="icon"><CgDetailsMore size={35} /></div>
                                <h4 class="title"><a href="">Many More To Come..</a></h4>
                                <p class="description">In Coming Days this platform will support accomodation facility , sports events and update on this platform</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <main id="main">


                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">
                        {/* <hr className='text-primary' style={{ border: "1px solid blue" }}></hr> */}
                        <div class="section-title ">
                            <h2>ABOUT</h2>

                            <p>Reach to Us Anytime </p>
                        </div>
                        <div class="mb-2">
                            {/* <hr className='text-primary' style={{ border: "1px solid blue", marginBottom: "10px" }}></hr> */}
                        </div>
                        <div class="row content">
                            <div class="col-lg-6">
                                <p>
                                    <span className='text-primary ' style={{ fontSize: "25px" }}>| </span>  Our commitment to user-friendly design, privacy and security, and a growing network of trusted partners ensures that every interaction with ServiceUni is a step towards a healthier, more knowledgeable, and empowered life.
                                </p>
                                <ul>
                                    <li className='d-flex align-items-end'><span className='mr-4'><BiCheckDouble className='text-primary' size={25} /></span><span>ServiceUni partners with reputable pharmacies    </span> </li>
                                    <li className='d-flex align-items-end'><span className='mr-4'><BiCheckDouble className='text-primary' color='' size={25} /></span><span>Payment processing is conducted through secure channels </span> </li>
                                    <li className='d-flex align-items-end'><span className='mr-4'><BiCheckDouble className='text-primary' color='' size={25} /></span><span>All user data is encrypted to ensure privacy and security.</span> </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0">
                                <p style={{ fontSize: 15, wordSpacing: 3, marginBottom: "15px" }} className='mb-4'>
                                    <span className='text-primary ' style={{ fontSize: "25px" }}>| </span> ServiceUni is a dynamic and innovative platform at the intersection of healthcare, education, and wellness. We are dedicated to simplifying and enriching lives by providing seamless access to quality medical care, medications, and a diverse array of educational opportunities. Our commitment to user-friendly design, privacy and security, and a growing network of trusted partners ensures that every interaction with ServiceUni is a step towards a healthier, more knowledgeable, and empowered life. Welcome to a world where convenience, knowledge, and well-being come together in one unified experience.


                                </p>
                                <a href="#" class="btn-learn-more">Learn More</a>
                            </div>
                        </div >

                    </div >
                </section >


                <section id="counts" class="counts section-bg">
                    <div class="container">

                        <div class="row justify-content-end">

                            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" class="purecounter">1000+</span>
                                    <p>Medicines Puchased</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" class="purecounter">3000+</span>
                                    <p> Registered Students</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" class="purecounter">100+</span>
                                    <p>Successful Appointments</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" class="purecounter">50+</span>
                                    <p>Events Organized</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="about-video" class="about-video">
                    <div class="container" data-aos="fade-up">

                        <div class="row">

                            <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                                <img src="./img/about-video.jpg" class="img-fluid" alt="" />

                            </div>

                            <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                                <h3>Mission Behind Developing this platform</h3>
                                <p class="fst-italic mb-4">

                                </p>
                                <ul style={{ listStyleType: "number" }}>
                                    <li> ServiceUni is a revolutionary platform that combines the convenience of booking appointments with top-rated doctors</li>
                                    <li> Enrolling in a wide array of subjects for your personal and professional development</li>
                                    <li> ServiceUni is a revolutionary platform that combines the convenience of booking appointments with top-rated doctors</li>
                                    <li> Enrolling in a wide array of subjects for your personal and professional development</li>
                                    <li> ServiceUni is a revolutionary platform that combines the convenience of booking appointments with top-rated doctors</li>
                                    <li> Enrolling in a wide array of subjects for your personal and professional development</li>
                                </ul>
                                <p>
                                    ServiceUni is continuously expanding its services to reach and serve a more students. Users can check the availability of services in their devices by using the search feature on the platform.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>




                <section id="services" class="services section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Services</h2>
                            <p>Your Uni in your hand</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                        </svg>
                                        <i class="bx bx-file"></i>
                                    </div>

                                    <h4><a href="">Book Appointment</a></h4>
                                    <p>Search and discover experienced doctors in various specialties.
                                        Check doctor profiles, patient reviews, and available appointment slots.
                                        Book appointments at your convenience.
                                        .</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box iconbox-orange ">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                        </svg>
                                        <i class="bx bx-file"></i>
                                    </div>
                                    <h4><a href="">Enrollments</a></h4>
                                    <p>Our user-friendly course selection and enrollment process makes it easy for you to acquire new skills, earn certifications, or simply pursue your passion.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box iconbox-pink">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                        </svg>
                                        <i class="bx bx-tachometer"></i>
                                    </div>
                                    <h4><a href="">Pharmacy</a></h4>
                                    <p>With ServiceUni, you can access the medications you need, whenever you need them, without leaving the comfort of your class.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-yellow">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                        </svg>
                                        <i class="bx bx-layer"></i>
                                    </div>
                                    <h4><a href="">Sports Updates</a></h4>
                                    <p>In Upcoming days, we will launch portal for live sports event and updates , and you can participate here </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box iconbox-red">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                                        </svg>
                                        <i class="bx bx-slideshow"></i>
                                    </div>
                                    <h4><a href="">Accomodation</a></h4>
                                    <p>Accomodation finding will be easy , you can check available accomodation options on our platform , and book here </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box iconbox-teal">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                                        </svg>
                                        <i class="bx bx-arch"></i>
                                    </div>
                                    <h4><a href="">Many More</a></h4>
                                    <p>We are working on feedbacks and what should be done in the platform to make students life easier</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>








                <section id="faq" class="faq section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Frequently Asked Questions</h2>
                            <p>These Are Few question that are asked by multiple students</p>
                        </div>

                        <div class="faq-list">
                            <ul >


                                <li data-aos="fade-up" className='' data-aos-delay="100">
                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Q: Is ServiceUni available in my area?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Q: Is ServiceUni available in my area?
                                            A: ServiceUni is expanding rapidly. You can check if our services are available in your area by entering your location in our search bar.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Q: Can A student Enroll before opening Enrollment?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Q: How to Buy Medicine here? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Q: Can I choose my preferred doctor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Q: Are the medications on ServiceUni authentic and safe?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Q: Are my medical records secure on the platform? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </section>


                <section id="contact" class="contact">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h2>Contact</h2>
                            <p> Reach to us Anytime</p>     </div>

                        {/* <div>
                            <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                        </div> */}

                        <div class="row mt-5">

                            <div class="col-lg-4">
                                <div class="info">
                                    <div class="address text-dark">
                                        <i class="bi bi-geo-alt"></i>
                                        <h4 className='text-dark'>Location:</h4>
                                        <p className='text-dark'>Northfields Ave, Wollongong NSW 2522</p>
                                    </div>

                                    <div class="email">
                                        <i class="bi bi-envelope"></i>
                                        <h4 className='text-dark'>Email:</h4>
                                        <p className='text-dark'>uowservice@edu.au</p>
                                    </div>

                                    <div class="phone">
                                        <i class="bi bi-phone"></i>
                                        <h4 className='text-dark'>Call:</h4>
                                        <p className='text-dark'>+61 781 881</p>
                                    </div>

                                </div>

                            </div>

                            <div class="col-lg-8 mt-5 mt-lg-0">

                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row gy-2 gx-md-3">
                                        <div class="col-md-6 form-group">
                                            <input type="text border" name="name" class="form-control border" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input type="email " class="form-control border" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                        <div class="form-group col-12">
                                            <input type="text border" class="form-control border" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div class="form-group col-12">
                                            <textarea class="form-control border" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <div class="my-3 col-12">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center col-12"><button type="submit">Send Message</button></div>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main >


        </div >
    )
}




export default Landing