import { Link } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import { useMemo } from "react";
import { Copyright, Facebook, LinkedIn, Twitter, YouTube, YoutubeSearchedFor } from "@mui/icons-material";

const Footer = () => {

    const key = "AIzaSyDElJVCbzaaeZNOqH7LxEem5zFvb8jcWHg";
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: key,
    });
    const center = useMemo(()=> ({lat: 42.34110, lng: -83.05527 }), []);


    return (
        <>
            <div id="footer">
                <div id="topFooter">
                    <div id="map">
                        {!isLoaded? (<h2>Loading...</h2>):(
                            <GoogleMap center={center} zoom={10} mapContainerClassName="mapContainer">
                                <Marker position={center}/>
                            </GoogleMap>
                        )}
                        
                    </div>
                    <div id="details">
                        <div className="detailsInfo">
                            <h2>Address</h2>
                            <p>2645 Woodward Ave, Detroit, MI 48201</p>
                        </div>
                        <div className="detailsInfo">
                            <h2>Directory</h2>
                            <Link to={"/menu"}><p>Menu</p></Link>
                            <Link to={"/account"}><p>Account</p></Link>
                            <Link to={"/"}><p>Home</p></Link>
                        </div>
                        <div className="detailsInfo">
                            <h2>Contact Us</h2>
                            <p>+1 555 123 4567</p>
                            <p>contact@bentobox.com</p>
                        </div>
                    </div>
                </div>
                
                <div id="bottomFooter">
                    <div id="copyright">
                    <Copyright className="copyrighticon"/><p>Copyright 2024, Powered by Your's Truly</p>
                    </div>
                    <div id="icons">
                        <Facebook className="facebookIcon"/>
                        <Twitter className="twitterIcon"/>
                        <YouTube className="youtubeIcon"/>
                        <LinkedIn className="linkedIn"/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Footer;