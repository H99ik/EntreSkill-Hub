import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import ProfileHeader from "../components/ProfileHeader";
// import ProfileInfoCard from "../components/ProfileInfoCard";
// import SecurityCard from "../components/SecurityCard";
// import AccountCard from "../components/AccountCard";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <ProfileHeader />

        {/* <ProfileInfoCard /> */}

        {/* <SecurityCard /> */}

        {/* <AccountCard /> */}
      </div>

      <Footer />
    </>
  );
}

export default Profile;