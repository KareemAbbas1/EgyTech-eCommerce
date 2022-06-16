import "./footer.css";
import { Container, Button, Image } from 'react-bootstrap';
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section className="footer">
            <Container fluid className='px-md-5 pt-5'>
                <span className='d-flex justify-content-between mb-4'>
                    <img src={logo} alt='logo'></img>
                    <span className='d-flex justify-content-between '>
                        <span>
                            <table>

                                <thead>
                                    <tr>
                                        <th className='table-header'>Shop</th>
                                        <th className='table-header'>Company</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className='table-data first-row'><Link to="/products">Mobile Phones</Link></td>
                                        <td className='table-data first-row'><Link to="/about-us">About us</Link></td>
                                    </tr>
                                    <tr>
                                        <td className='table-data'><Link to="/products">Computers</Link></td>
                                        <td className='table-data'><Link to="/contact-us">Contact us</Link></td>
                                    </tr>
                                    <tr>
                                        <td className='table-data'><Link to="/products">Tablets</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </span>
                        <span>
                            <Button className='footer-auth my-1'>Log in</Button><br />
                            <Button variant='outline-primary' className='footer-auth my-1'>Register</Button>
                        </span>
                    </span>
                </span>
            </Container>

            {/* <div></div> */}

            <Container fluid className='px-md-5'>
                <span className='d-flex justify-content-between pb-3 mt-2'>
                    <p className='copy-rights'>All Design Copyright, Rights Reserved to <a href='https://www.linkedin.com/in/kareem-abbas-715868210/' target="_blank" rel='noreferrer'>Kareem Abbas</a></p>
                    <span className='d-flex justify-content-between'>
                        <p className='follow-us'>Follow us:</p>
                        <span className='d-flex justify-content-between'>
                            <a href='#'>
                                <Image className='icon' roundedCircle src={facebook} />
                            </a>
                            <a href='#'>
                                <Image className='icon' roundedCircle src={twitter} />
                            </a>
                            <a href='#'>
                                <Image className='icon' roundedCircle src={instagram} style={{ marginRight: '0' }} />
                            </a>
                        </span>
                    </span>
                </span>
            </Container>
        </section>
    )
}

export default Footer