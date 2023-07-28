import { CustomersSlider } from "../components/CustomersSlider";

export function IndexPage() {
    return (
        <>
            <div className="welcome block flex">
                <div>
                    <h1>Travel to your dream destination</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                    <a className="button_reserve" href="">Reserve Ticket</a>
                </div>
                <img src="img/photo1.png" alt="" />
            </div>

            <div className="create block flex">
                <h1>Create a memory to remember</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                <a className="button_travel" href="">My Travel Logs</a>
            </div>

            <div className="gallery block flex">
                <div>
                    <img src="img/photo2.png" alt="" />
                    <span></span>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                </div>
                <div>
                    <img src="img/photo4.png" alt="" />
                    <span></span>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                </div>
                <div>
                    <img src="img/photo5.png" alt="" />
                    <span></span>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.</p>
                </div>
            </div>

            <div className="see_places">
                <div className="see_places_content">
                    <img src="img/airplace_icon_5092.png" alt="" />
                    <h1>See places you’ve <span>never</span> been before</h1>
                    <h6>Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor</h6>
                </div>
            </div>

            <div className="description block flex">
                <img src="img/photo6.png" alt="" className="description_image" />
                <img src="img/tape_5143.png" alt="" className="tape" />
                <div className="description_content flex">
                    <img src="img/photo3.png" alt="" />
                    <div className="description_text flex">
                        <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei</h1>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            <br />
                            <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <button className="button_arrow">
                </button>
            </div>

            <div className="choose block flex">
                <div className="choose_content flex">
                    <h1>Choose anywhere you’d like to be</h1>
                    <div>
                        <h6>Lorem Ipsum dolor</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in
                            voluptate velit esse.</p>
                    </div>
                    <div>
                        <h6>Lorem Ipsum dolor</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in
                            voluptate velit esse.</p>
                    </div>
                </div>
                <img src="img/photo7.png" alt="" />
            </div>

            <div className="more_info block flex">
                <div className="more_info_content flex">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod<button></button></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod<button></button></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod<button></button></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod<button></button></p>
                    </div>
                </div>
                <img src="img/photo8.png" alt="" />
            </div>

            <div className="reviews block flex">
                <h1>Here’s what they have to say...</h1>
                <div className="reviews_content block flex">
                    <CustomersSlider />
                </div>
            </div>

            <div className="be_updated block flex">
                <div className="be_updated_content flex">
                    <h1>Be updated!</h1>
                    <form>
                        <div className="form_line">
                            <input type="text" className="form_input" placeholder=" " />
                            <label className="form_label">First Name*</label>
                        </div>
                        <div className="form_line">
                            <input type="text" className="form_input" placeholder=" " />
                            <label className="form_label">Last Name*</label>
                        </div>
                        <div className="form_line">
                            <input type="text" className="form_input" placeholder=" " />
                            <label className="form_label">Email Subject*</label>
                        </div>
                        <div className="form_line">
                            <textarea className="form_input textarea" placeholder=" "></textarea>
                            <label className="form_label">Write something here...</label>
                        </div>
                        <button className="form_button">Submit Email</button>
                    </form>
                </div>
                <img src="img/photo9.png" alt="" />
            </div>

            {/* <footer className="footer block flex">
                <h1>My Log Travels</h1>
                <div className="footer_content">
                    <h6>Quick Links</h6>
                    <div className="links flex">
                        <div>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">My Travel Logs</a>
                        </div>
                        <div>
                            <a href="">Travels</a>
                            <a href="">Promo Flights</a>
                            <a href="">Travel Routes</a>
                        </div>
                        <div>
                            <a href="">Recommendations</a>
                            <a href="">Guides</a>
                            <a href="">Blogs</a>
                        </div>
                        <div>
                            <a href="">Mission Statement</a>
                            <a href="">The Team</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                </div>
                <p>2021 - 2022 My Log Travels. All Rights Reserved.</p>
            </footer> */}
        </>
    )
}