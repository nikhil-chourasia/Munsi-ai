



export default function WaitlistPage() {
  return (
    <>
    <a href="http://localhost:3000/">
    <div className="back-button"></div>
    </a>


    <div className="join-waitlist-box-container">
        <div className="join-waitlist-box">
            <div className="mail-logo-container">
                <div className="mail-logo"> </div>
            </div>

            <div className="JTWL-text">Join the Waitlist</div>
            <div className="infotext-cont">
                <div className="infotext">Enter your email and we will notify you for early access</div>
            </div>
            <div className="email-container">
                <input type="email" placeholder="youremail@gmail.com" className="email-input" required />
            </div>
            <div className="join-waitlist-container">
                <div className="join-waitlist">
                    <div className="join-waitlist-text">Join Waitlist</div>
                </div>
            </div>
            <div className="user-info"></div>
        </div>
    </div>
    </>
  );
}
