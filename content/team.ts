/* ------------------------------------------------------------------
   Board and team. Photos go in public/images/team/ and are referenced
   as "/images/team/filename.jpg". Leave `image` off and the site draws
   a clean monogram tile instead — useful before headshots exist.
   ------------------------------------------------------------------ */

export type Member = {
  name: string;
  role: string;
  year?: string;       // "Class of 2027"
  college?: string;    // Rice residential college
  major?: string;
  bio?: string;
  email?: string;
  image?: string;
};

/* ---- PLACEHOLDER ROSTER — replace with the real board ---- */

export const board: Member[] = [
  { name: "[Name]", role: "President",       year: "Class of 20XX", college: "[College]", bio: "Short bio — what they work on, what got them involved." },
  { name: "[Name]", role: "Vice President",  year: "Class of 20XX", college: "[College]", bio: "Short bio." },
  { name: "[Name]", role: "Treasurer",       year: "Class of 20XX", college: "[College]", bio: "Short bio." },
  { name: "[Name]", role: "Secretary",       year: "Class of 20XX", college: "[College]", bio: "Short bio." },
  { name: "[Name]", role: "Campaigns Director", year: "Class of 20XX", college: "[College]", bio: "Short bio." },
  { name: "[Name]", role: "Communications Director", year: "Class of 20XX", college: "[College]", bio: "Short bio." },
];

/* Committee leads, class reps, faculty advisor, etc. Optional. */
export const committees: { name: string; description: string; lead?: string }[] = [
  { name: "Campaigns",     description: "Runs canvasses, phonebanks, and coordination with local races and county party staff." },
  { name: "Voter Access",  description: "Registration drives, ride-to-the-polls logistics, and know-your-rights materials." },
  { name: "Programming",   description: "Speakers, debate watch parties, and the social calendar." },
  { name: "Communications",description: "Newsletter, social media, and the stories published on this site." },
];
