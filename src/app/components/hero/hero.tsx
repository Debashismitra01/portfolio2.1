import React from "react";
import './hero.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="hero" id="home">
            <div className="herotext">
                <h1>Hi, there</h1>
                <h2>I'm <span>Debashis Mitra</span></h2>
                <div className="hero-action">
                    <div className="hero-connect">
                        <Link href="#contact" >Connect with me
                        </Link>
                    </div>
                    <a 
                        className="hero-resume" 
                        href="https://drive.google.com/uc?export=download&id=1GrCA4ClFWKOFdbYOKs32qwQmuOvnONIi" 
                        download="DebashisMitraResume"
                    >
                        My Resume
                    </a>
                </div>
            </div>
            <div className="profile">
                <div className="outerborder">
                    <img src="/profile.jpg" alt="profile" className="hero-image" />
                </div>
            </div>  
        </div>
    );
};

