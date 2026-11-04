export type ExperienceItem = {
  company: string;
  website?: string;
  role: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  repositories: { label: string; url: string }[];
  liveDemo?: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const technicalSkills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    category: "Data Engineering",
    skills: [
      "PySpark",
      "Spark SQL",
      "Spark Structured Streaming",
      "Apache Kafka",
      "Apache Airflow",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "DuckDB", "SQLAlchemy"],
  },
  {
    category: "Cloud",
    skills: ["AWS S3", "AWS Glue", "Amazon Athena", "IAM", "boto3"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Docker Compose", "Git", "Streamlit", "pandas"],
  },
  {
    category: "Data Formats",
    skills: ["JSON", "JSONL", "CSV", "Parquet"],
  },
];

export const experience: ExperienceItem[] = [
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
      "Built a catalogue for Indian streetwear that tracks prices, size availability, and restocks across Shopify stores. An Airflow pipeline refreshes the data daily, and the app offers wishlists and Telegram restock alerts.",
    technologies: ["Airflow", "Python", "PostgreSQL", "FastAPI", "React"],
    repositories: [
      {
        label: "GitHub",
        url: "https://github.com/godslonelymann/the-catalogue",
      },
    ],
    liveDemo: "https://the-catalogue-frontend.vercel.app/",
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
  resume: "/Anurag_Gaikwad_Data_Engineer_Resume.pdf",
};
