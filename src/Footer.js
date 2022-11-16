import React from 'react'
import { GrFacebookOption, GrInstagram, GrTwitter} from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_up">
            <div className="footer_first">
                <div className="logo_footer">
                    <img src={require('./house.png')} alt="img" />
                    <img src={require('./name.png')} alt="img" />
                </div>
                <div className="socials">
                    <GrFacebookOption />
                    <GrInstagram />
                    <GrTwitter />
                </div>
            </div>
            <div className="community footer_align">
                <h3>Community</h3>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
            <div className="places footer_align">
                <h3>Places</h3>
                <ul>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
            </div>
            <div className="about_us footer_align">
                <h3>About us</h3>
                <ul>
                    <li>Road map</li>
                    <li>creators</li>
                    <li>Career</li>
                    <li>Conatact us</li>
                </ul>
            </div>
        </div>
        <div className="cc">
            <BiCopyright /><p> 2022 Metabnb</p>
        </div>
    </div>
  )
}
