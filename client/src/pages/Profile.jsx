import DashboardLayout from "../components/layout/DashboardLayout";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import SecurityCard from "../components/profile/SecurityCard";
import AccountCard from "../components/profile/AccountCard";

import { useEffect, useState, useRef } from "react";
import { getProfile } from "../services/authService";

function Profile() {
  // State to hold the user profile data
  const [user, setUser] = useState(null);

  const editFormRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        const data = await getProfile(userInfo.token);

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-xl font-semibold text-gray-500">
            Loading Profile...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>

        <p className="mt-2 text-gray-500">
          Manage your personal information, security settings and account
          details.
        </p>
      </div>

      {/* Profile Header */}
      <ProfileHeader user={user} editFormRef={editFormRef} />

      {/* Profile Information */}
      <div className="mt-8">
        <ProfileInfoCard user={user} />
      </div>

      {/* Edit Profile + Security */}
      <div
        ref={editFormRef}
        className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8"
      >
        <EditProfileForm user={user} setUser={setUser} />

        <SecurityCard />
      </div>

      {/* Account Information */}
      <div className="mt-8">
        <AccountCard user={user} />
      </div>
    </DashboardLayout>
  );
}

export default Profile;
