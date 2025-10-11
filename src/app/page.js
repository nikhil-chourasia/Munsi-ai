import Image from "next/image";
export default function Home() {
  return (
    <>
   
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        
        <div className="navigation-icons">
          <div className="about">About</div>
          <div className="features">Features</div>
          <div className="tech-stack">Tech Stack</div>
          <div className="benefits">Benefits</div>
          <div className="get-notified">Get Notified</div>
        </div>
      </div>
    </div>
      
    
<div className="hero-section">
   
    <div className="sectionA">    
      <div className="launching-soon-container">
        <div className="spark"></div>
        <div className="text">Launching Soon</div>
      </div>
    
    <div className="coming-soon-text">Coming Soon</div>
    <div className="work-track-grow">Work, Track, Grow</div>  
    <div className="description">Business Analytics simplified for small businesses using AI. Munsi AI is your intelligent companion for smarter business decisions.</div>
    <div className="CTA">
    <div className="learn-more-button">
      <div className="text">Learn More</div>
      <div className="downarrow"></div>
    </div>
    <div className="early-access">Get Early Access</div>
    </div>
    <div className="minidetails">
      <div className="minidetails-1">
        <div className="main-text-1">AI-Powered</div>
        <div className="sub-text-1">Analytics</div>
      </div>
      <div className="minidetails-2">
        <div className="main-text-2">SMBs</div>
        <div className="sub-text-2">Focused</div>
      </div>
      <div className="minidetails-3">
        <div className="main-text-3">24/7</div>
        <div className="sub-text-3">Support</div>
      </div>
    </div>
    
    </div> 




    <div className="sectionB">
        <div className="B-container">
          <div className="img-1-container">
            <div className="img-1"></div>
          </div>
          <div className="img-2-container">
            <div className="img-2"></div>
          </div>
          <div className="img-3-container">
            <div className="img-3"></div>
          </div>
        </div>
    </div>

</div>
   </>
  );
}
