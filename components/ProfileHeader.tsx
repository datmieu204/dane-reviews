import Image from "next/image";
import { Profile } from "@/types";

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="profile-header">
      <div className="avatar-wrapper">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={124}
          height={124}
          priority
          className="avatar-image"
        />
      </div>
      <h1 className="profile-name">{profile.name}</h1>
      {profile.bio && <p className="profile-bio">{profile.bio}</p>}
    </header>
  );
}
