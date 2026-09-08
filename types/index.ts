export type Product = {
  code: string;
  name: string;
  image: string;
  url: string;
  active?: boolean;
};

export type SocialLinksType = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  email?: string;
};

export type Profile = {
  name: string;
  bio?: string;
  avatar: string;
  socials?: SocialLinksType;
};
