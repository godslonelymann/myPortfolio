export type ExperienceItem = {
  company: string;
  website?: string;
  role: string;
  period: string;
  description: string | string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  repositories: { label: string; url: string }[];
  liveDemo?: string;
};

export const professionalTitle = "Data & Backend Engineer";

export const experience: ExperienceItem[] = [
  {
    company: "IWM Quant",
    role: "Data Engineer Intern",
    period: "August 2026 – October 2026",
    description: [
      "Designed a 39-table PostgreSQL database for a mutual fund investment app, covering user accounts, portfolio imports, financial goals, and fund analytics.",
      "Built reliable data import workflows that prevent duplicate records, maintain traceability of analytics data, and protect sensitive information such as PAN.",
      "Developed a Python ETL pipeline to collect daily mutual fund NAV data from AMFI, including 12+ years of historical data. Automated ingestion using AWS Lambda and EventBridge Scheduler, with S3 storage and CloudWatch logging.",
      "Built Python scrapers to collect monthly portfolio disclosures and scheme documents from 50+ AMC websites, then parsed and standardized the data for PostgreSQL.",
      "Deployed the scraping and processing pipelines on AWS EC2, using month-end cron jobs to automate collection, cleaning, and database loading.",
    ],
  },
  {
    company: "NovaProwl",
    website: "https://novaprowl.in",
    role: "Full-Stack Developer Intern",
    period: "January 2026 – March 2026",
    description:
      "Worked on an AI-assisted data analytics platform, contributing to file ingestion, data-cleaning features, dashboards and AI-generated analytical insights.",
  },
];

export const projects: Project[] = [
  {
    title: "PulseGrid",
    description:
      "Built a self-hosted uptime monitor for websites and HTTP APIs. It runs scheduled checks, charts uptime and response times, and sends email and webhook alerts when services go down or recover.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Python"],
    repositories: [
      { label: "GitHub", url: "https://github.com/godslonelymann/PulseGrid" },
    ],
    liveDemo: "https://mypulsegrid.duckdns.org/",
  },
  {
    title: "The Catalogue",
    description:
      "Built an app that lets users monitor up to 10 Shopify brands, browse their catalogues, and save products for later. The app refreshes catalogues daily and sends email alerts when a saved product is back in stock in the selected size and colour.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Python"],
    repositories: [
      {
        label: "GitHub",
        url: "https://github.com/godslonelymann/the-catalogue-new",
      },
    ],
    liveDemo: "https://the-catalogue-kappa.vercel.app/",
  },
  {
    title: "Amazon Reviews ETL Pipeline",
    description:
      "Built a Dockerized PySpark pipeline that cleans and deduplicates over 2.1 million Amazon appliance reviews, joins product metadata, and validates CSV exports for rating, category, and price analysis in Tableau.",
    technologies: ["PySpark", "Python", "Docker Compose", "Tableau"],
    repositories: [
      {
        label: "GitHub",
        url: "https://github.com/godslonelymann/amazon-reviews-etl-pipeline",
      },
    ],
  },
];

export const socialLinks = {
  emailAddress: "anuragworks09@gmail.com",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=anuragworks09%40gmail.com",
  github: "https://github.com/godslonelymann",
  linkedin: "https://www.linkedin.com/in/anuragrgaikwad",
  resume: "/Anurag_Gaikwad_Resume.pdf",
};
