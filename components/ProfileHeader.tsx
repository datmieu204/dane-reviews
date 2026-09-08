import Image from "next/image";
import { Profile } from "@/types";
import ThemeToggle from "./ThemeToggle";

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="profile-header">
      <div className="header-top-bar">
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>Curated Picks</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="avatar-container">
        <div className="avatar-glow-ring" />
        <div className="avatar-wrapper">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={128}
            height={128}
            priority
            className="avatar-image"
          />
        </div>
      </div>

      <div className="profile-title-row">
        <h1 className="profile-name">{profile.name}</h1>
        <span className="verified-badge" title="Đã xác thực">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Verified">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </span>
      </div>

      {profile.bio && <p className="profile-bio">{profile.bio}</p>}
    </header>
  );
}
