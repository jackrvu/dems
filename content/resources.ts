/* ------------------------------------------------------------------
   Resources page. Grouped links — voting logistics, getting involved,
   and background reading. Verify every link before publishing.
   ------------------------------------------------------------------ */

export type Resource = { title: string; url: string; description: string };
export type ResourceGroup = { heading: string; blurb?: string; items: Resource[] };

export const resourceGroups: ResourceGroup[] = [
  {
    heading: "Register and vote in Texas",
    blurb:
      "Texas has no online voter registration — you must mail or hand-deliver a paper application. Deadlines are 30 days before an election.",
    items: [
      { title: "Texas voter registration application", url: "https://www.votetexas.gov/register-to-vote/", description: "Official state page: eligibility, the paper application, and deadlines." },
      { title: "Am I registered?", url: "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do", description: "Texas Secretary of State lookup — confirm your registration and precinct." },
      { title: "Harris County Elections", url: "https://www.harrisvotes.com/", description: "Local polling locations, early voting hours, and sample ballots." },
      { title: "Vote by mail in Texas", url: "https://www.votetexas.gov/voting/", description: "Who qualifies for a mail ballot (students away from their county of registration, among others) and how to apply." },
      { title: "Acceptable photo ID", url: "https://www.votetexas.gov/register-to-vote/need-id.html", description: "What to bring to the polls, and what to do if you don't have an accepted ID." },
    ],
  },
  {
    heading: "Get involved",
    blurb: "Ways to plug in beyond our meetings.",
    items: [
      { title: "Harris County Democratic Party", url: "https://www.hcdp.org/", description: "County party volunteer opportunities, precinct chair info, and candidate lists." },
      { title: "Texas Democratic Party", url: "https://www.texasdemocrats.org/", description: "State party news, platform, and organizing programs." },
      { title: "College Democrats of America", url: "https://collegedems.com/", description: "National federation of campus chapters." },
      { title: "Become a volunteer deputy registrar", url: "https://www.harrisvotes.com/VDR", description: "Get certified in Harris County so you can register voters yourself." },
    ],
  },
  {
    heading: "On campus",
    blurb: "Rice-specific offices and policies worth knowing.",
    items: [
      { title: "Rice Student Association", url: "https://sa.rice.edu/", description: "Club registration, funding requests, and Senate proceedings." },
      { title: "Rice Center for Civic Leadership", url: "https://ccl.rice.edu/", description: "Civic engagement programming, fellowships, and community partnerships." },
      // TODO: add the club's own docs — constitution, onboarding guide, canvassing
      // script, one-pagers — either as links or as PDFs in public/docs/.
    ],
  },
];
