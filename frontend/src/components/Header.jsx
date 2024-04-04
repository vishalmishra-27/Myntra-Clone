import React, { useRef } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    const ref = useRef();

    const clearInput = () => {
        ref.current.value = '';
    }

    const bag = useSelector(state => state.bag);
    return (
        <>
            <header className='text-center'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <div className="logo_container"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" />
                            </div>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse show gap-5" id="navbarScroll">
                            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav_bar">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/">Men</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Women</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Kids</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Beauty</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Studio <sup>New</sup></Link>
                                </li>
                            </ul>
                            <div className="search_bar mx-auto">
                                <span className="search_icon"><IoSearchSharp /></span>
                                <input ref={ref} type="text" className="search_input" placeholder="Search for products, brands and more" />
                                <RxCross2 onClick={clearInput} className='clearinput' />
                            </div>
                            <div className="action_bar">
                            <div className="action_container">
                                <BsFillPersonFill />
                                <span className="action_name">Profile</span>
                            </div>

                            <div className="action_container">
                                <FaFaceGrinHearts />
                                <span className="action_name">Wishlist</span>
                            </div>

                            <Link className="action_container" to="/bag">
                                <MdShoppingBag />
                                <span className="action_name">Bag</span>
                                <span className="bag-item-count">{bag.length}</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <header>

                <nav className="nav_bar">
                    <Link to="/">Men</Link>
                    <Link to="/">Women</Link>
                    <Link to="/">Kids</Link>
                    <Link to="/">Home & Living</Link>
                    <Link to="/">Beauty</Link>
                    <Link to="/">Studio <sup>New</sup></Link>
                </nav>
                <div className="search_bar">
                    <span className="search_icon"><IoSearchSharp /></span>
                    <input ref={ref} type="text" className="search_input" placeholder="Search for products, brands and more" />
                    <RxCross2 onClick={clearInput} className='clearinput' />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                        <BsFillPersonFill />
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        <FaFaceGrinHearts />
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link className="action_container" to="/bag">
                        <MdShoppingBag />
                        <span className="action_name">Bag</span>
                        <span className="bag-item-count">{bag.length}</span>
                    </Link>
                </div>
            </header> */}
        </>
    )
}

export default Header