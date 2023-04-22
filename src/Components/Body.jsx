import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Container, Navbar, Nav, Carousel, Form, Button, Row, Col } from 'react-bootstrap'
import logo from '../Assets/kunai001.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.jpg'
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io5"
import { IoLogoYoutube } from "react-icons/io5"

const Body = () => {

    // form status
    const [Tname, setTname] = useState('');
    const [Mobile, setMobile] = useState('');
    const [TLname, setTLname] = useState('');
    const [TLIGN, setTLIGN] = useState('');
    const [firstIGN, setfirstIGN] = useState('');
    const [secondIGN, setsecondIGN] = useState('');
    const [thirdIGN, setthirdIGN] = useState('');
    const [forthIGN, setforthIGN] = useState('');
    const [peakrank, setpeakrank] = useState('');

    // Submit Event
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Team_name: Tname,
            Mobile_no: Mobile,
            Team_Leader_name: TLname,
            Team_Leader_IGN: TLIGN,
            First_Player_IGN: firstIGN,
            Second_Player_IGN: secondIGN,
            Third_Player_IGN: thirdIGN,
            Forth_Player_IGN: forthIGN,
            Peak_Rank: peakrank
        }

        axios.post('https://sheet.best/api/sheets/0edb8c59-5d56-469d-8716-1ed6c74f3264', data).then((response) => {
            console.log(response);
            alert(" You have successfully Registered ")
            setTname('')
            setMobile('')
            setTLname('')
            setTLIGN('')
            setfirstIGN('')
            setsecondIGN('')
            setthirdIGN('')
            setforthIGN('')
            setpeakrank('')
            
        })
    }


    return (
        <div className='body'>
            <Navbar bg="none" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>Spike Summit</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Leaderboard"><strong>Leaderboard</strong></Nav.Link>
                            <Nav.Link href="#Registration"><strong>Registration</strong></Nav.Link>
                            <Nav.Link href="#About"><strong>About us</strong></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='crousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='leaderboard' id='Leaderboard'>
                <h3 className='text-head'><strong>Leaderboard</strong></h3><br /><br /><br />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            {/* <h5>Top Fragger</h5><br />
                            <p className='text'>Leaderboard will be updated after completion of the series of matches</p><br /> */}
                        </Col>
                        <Col>
                            <h5>Top Teams</h5><br />
                            <p className='text'>Leaderboard will be updated after completion of the series of matches</p><br />
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className='form' id='Registration'>
                <h3 className='center'><strong>Registration </strong></h3><br /><br /><br />
                <Container>
                    <Row>
                        <Col>
                            <Form className='text-field' onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Team Name</Form.Label>
                                    <Form.Control type="Tname" onChange={(e) => setTname(e.target.value)} value={Tname} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="Mobile" onChange={(e) => setMobile(e.target.value)} value={Mobile} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Team Leader Name</Form.Label>
                                    <Form.Control type="TLname" onChange={(e) => setTLname(e.target.value)} value={TLname} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Leader In-Game Name</Form.Label>
                                    <Form.Control type="TLIGN" placeholder="In-Game Name and Player Tag" onChange={(e) => setTLIGN(e.target.value)} value={TLIGN} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Player-1</Form.Label>
                                    <Form.Control type="firstIGN" placeholder="In-Game Name and Player Tag" onChange={(e) => setfirstIGN(e.target.value)} value={firstIGN} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Player-2</Form.Label>
                                    <Form.Control type="secondIGN" placeholder="In-Game Name and Player Tag" onChange={(e) => setsecondIGN(e.target.value)} value={secondIGN} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Player-3</Form.Label>
                                    <Form.Control type="thirdIGN" placeholder="In-Game Name and Player Tag" onChange={(e) => setthirdIGN(e.target.value)} value={thirdIGN} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Player-4</Form.Label>
                                    <Form.Control type="forthIGN" placeholder="In-Game Name and Player Tag" onChange={(e) => setforthIGN(e.target.value)} value={forthIGN} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Peak Rank</Form.Label>
                                    <Form.Control type="peakrank" onChange={(e) => setpeakrank(e.target.value)} value={peakrank} />
                                </Form.Group><br /><br />
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>&nbsp;
                                <Button variant="warning" href="upi://pay?pa=6375666706@ybl&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1">
                                    Pay Now
                                </Button>&nbsp;
                                <Button variant="danger" href='/qr' >
                                    QR Code
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container><br /><br />
            </div>
            <div className='about' id='About'>
                <Container>
                    <h4 className='center'>About Us</h4><br /><br /><br />
                    <Row>
                        <Col>
                            <p className='about-text'>Spike Summit is the ultimate destination for Valorant enthusiasts who are looking to take their gaming skills to the next level.&nbsp;&nbsp;
                                <br />Our website is designed to provide an exciting and competitive environment for players of all skill levels.
                            </p></Col>
                    </Row>
                </Container>
            </div>
            <footer id='footers'>
                <div className="footer__socials">
                    <a href="https://chat.whatsapp.com/KyfSV82dqMOBFBHraMZd4F"><IoLogoWhatsapp /></a>
                    <a href="https://www.instagram.com/esports_bolt/"><IoLogoInstagram /></a>
                    <a href="https://www.youtube.com/@boltesports"><IoLogoYoutube /></a>

                </div><br />
                <div className="footer__copyright">
                    <small>Design & Developed by Rishu</small><br />
                    <small>&copy;spike.web.app</small>

                </div>
            </footer>
        </div >
    )
}

export default Body