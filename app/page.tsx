"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "sananthb@terpmail.umd.edu";
const RESUME_PATH = "/Vikram_Resume.pdf";

const projects = [
  {
    title: "Counterfactual Financial Scenario Generation",
    fullTitle:
      "Counterfactual Financial Scenario Generation Using Conditional Diffusion Models",
    link: "https://github.com/vikram3010/conditional-diffusion-financial-scenarios",
    gif: "/animated-projects/financial-ddpm.gif",
    image: "/projects/financial-ddpm.png",
    type: "Deep Learning · Financial AI",
    tags: ["PyTorch", "DDPM", "TimeSeries"],
    description:
      "Macro-conditioned diffusion model for realistic financial scenarios under changing economic conditions.",
  },
  {
    title: "Kafka + Spark Streaming Analytics",
    fullTitle:
      "Real-Time Big Data Streaming Pipeline with Kafka and Spark Structured Streaming",
    link: "https://github.com/vikram3010/kafka-spark-streaming-analytics",
    gif: "/animated-projects/kafka-spark.gif",
    image: "/projects/kafka-spark.png",
    type: "Big Data · Streaming",
    tags: ["Kafka", "Spark", "PySpark"],
    description:
      "Real-time event pipeline using Kafka producers, Spark Structured Streaming, and windowed analytics.",
  },
  {
    title: "Vector Database Chatbot",
    fullTitle: "Vector Database Chatbot Using Chroma, Embeddings, and Python",
    link: "https://github.com/vikram3010/vector-database-chatbot-chroma",
    gif: "/animated-projects/vector-chatbot.gif",
    image: "/projects/vector-chatbot.png",
    type: "Generative AI · Retrieval",
    tags: ["Chroma", "Embeddings", "NLP"],
    description:
      "Document-grounded chatbot using chunking, vector storage, semantic search, and retrieval workflows.",
  },
  {
    title: "Cloud NLP Summarization",
    fullTitle: "Cloud-Based NLP Model for Automated Document Summarization",
    link: "https://github.com/vikram3010/Cloud-Based-NLP-Model-for-Automated-Document-Summarization",
    gif: "/animated-projects/cloud-nlp.gif",
    image: "/projects/cloud-nlp.png",
    type: "NLP · Cloud",
    tags: ["NLP", "Cloud", "Summarization"],
    description:
      "Cloud-oriented summarization workflow with preprocessing, summary logic, and deployment-ready structure.",
  },
  {
    title: "Cloud Data Analytics Workflow",
    fullTitle: "Cloud-Based Data Processing and Analytics Workflow",
    link: "https://github.com/vikram3010/cloud-based-data-processing-analytics",
    gif: "/animated-projects/cloud-analytics.gif",
    image: "/projects/cloud-analytics.png",
    type: "Cloud · Data Engineering",
    tags: ["Cloud", "ETL", "Analytics"],
    description:
      "Scalable workflow for ingestion, transformation, storage, analytics, and reproducible cloud execution.",
  },
  {
    title: "NLP Text Classification",
    fullTitle:
      "Natural Language Processing Pipeline for Text Classification and Analysis",
    link: "https://github.com/vikram3010/nlp-text-classification-pipeline",
    gif: "/animated-projects/nlp-classification.gif",
    image: "/projects/nlp-classification.png",
    type: "NLP · Classification",
    tags: ["NLP", "ScikitLearn", "F1Score"],
    description:
      "Text classification pipeline with preprocessing, vectorization, supervised learning, and metric evaluation.",
  },
  {
    title: "R Statistical Analysis",
    fullTitle: "Statistical Data Analysis and Visualization Using R",
    link: "https://github.com/vikram3010/r-statistical-analysis-visualization",
    gif: "/animated-projects/r-statistics.gif",
    image: "/projects/r-statistics.png",
    type: "Statistics · R",
    tags: ["R", "EDA", "Visualization"],
    description:
      "Statistical analysis project using R for cleaning, hypothesis testing, visualization, and reporting.",
  },
  {
    title: "PySpark ML Pipeline",
    fullTitle: "Scalable Machine Learning Pipeline with PySpark",
    link: "https://github.com/vikram3010/pyspark-machine-learning-pipeline",
    gif: "/animated-projects/pyspark-ml.gif",
    image: "/projects/pyspark-ml.png",
    type: "PySpark · Big Data",
    tags: ["PySpark", "SparkSQL", "ML"],
    description:
      "Large-scale ML workflow using Spark SQL, cleaning, feature preparation, training, and evaluation.",
  },
  {
    title: "Dask ML Workflow",
    fullTitle: "Parallel Data Processing and Machine Learning Workflow with Dask",
    link: "https://github.com/vikram3010/dask-machine-learning-workflow",
    gif: "/animated-projects/dask-ml.gif",
    image: "/projects/dask-ml.png",
    type: "Dask · Parallel ML",
    tags: ["Dask", "DaskML", "Parallel"],
    description:
      "Parallel data workflow using Dask and Dask-ML for scalable loading, preprocessing, and training.",
  },
  {
    title: "Neo4j Graph Recommendation",
    fullTitle:
      "Graph Analytics and Recommendation System Using Neo4j Graph Data Science",
    link: "https://github.com/vikram3010/neo4j-graph-recommendation-system",
    gif: "/animated-projects/neo4j-graph.gif",
    image: "/projects/neo4j-graph.png",
    type: "Graph Analytics",
    tags: ["Neo4j", "Cypher", "GDS"],
    description:
      "Graph recommendation workflow modeling users, artists, and relationships with Neo4j analytics.",
  },
  {
    title: "MNIST Dimensionality Reduction",
    fullTitle:
      "MNIST Classification with PCA, kNN, SVM, and Dimensionality Reduction",
    link: "https://github.com/vikram3010/mnist-dimensionality-reduction-ml",
    gif: "/animated-projects/mnist-ml.gif",
    image: "/projects/mnist-ml.png",
    type: "Machine Learning",
    tags: ["PCA", "SVM", "kNN"],
    description:
      "Digit classification workflow comparing raw and reduced features using PCA, kNN, and SVM.",
  },
  {
    title: "Dataset Text Summarizer",
    fullTitle: "Dataset-Based Text Summarizer Using Machine Learning",
    link: "https://github.com/vikram3010/dataset-based-text-summarizer",
    gif: "/animated-projects/text-summarizer.gif",
    image: "/projects/text-summarizer.png",
    type: "NLP · Summarization",
    tags: ["NLP", "ML", "Summarizer"],
    description:
      "ML summarization tool using preprocessing, feature extraction, summary generation, and evaluation.",
  },
  {
    title: "B2B E-Invoice Generator",
    fullTitle: "B2B E-Invoice Generator with QR Code and IRN Integration",
    link: "https://github.com/vikram3010/b2b-e-invoice-generator",
    gif: "/animated-projects/invoice-generator.gif",
    image: "/projects/invoice-generator.png",
    type: "Software Engineering",
    tags: ["WebDev", "MySQL", "Automation"],
    description:
      "Invoice automation system with QR logic, IRN-style integration, forms, and database workflow.",
  },
];

const skillLogos = [
  { label: "Python Programming", icon: "python", accent: "#3776AB" },
  { label: "SQL Querying", icon: "database", accent: "#BFA181" },
  { label: "PyTorch Deep Learning", icon: "flame", accent: "#EE4C2C" },
  { label: "TensorFlow and Keras", icon: "blocks", accent: "#FF6F00" },
  { label: "Scikit-learn", icon: "network", accent: "#F7931E" },
  { label: "Pandas", icon: "bars", accent: "#150458" },
  { label: "NumPy", icon: "cube", accent: "#4DABCF" },
  { label: "Matplotlib", icon: "chart", accent: "#11557C" },
  { label: "Apache Spark", icon: "spark", accent: "#E25A1C" },
  { label: "PySpark", icon: "spark", accent: "#F7B731" },
  { label: "Apache Kafka", icon: "nodes", accent: "#FFFFFF" },
  { label: "Spark Structured Streaming", icon: "stream", accent: "#BFA181" },
  { label: "Dask", icon: "parallel", accent: "#FC6E00" },
  { label: "Dask-ML", icon: "parallel", accent: "#F9A03F" },
  { label: "Natural Language Processing", icon: "text", accent: "#7DD3FC" },
  { label: "Generative AI", icon: "brain", accent: "#C084FC" },
  { label: "Vector Databases", icon: "vectors", accent: "#34D399" },
  { label: "Chroma", icon: "rings", accent: "#A7F3D0" },
  { label: "Time-Series Modeling", icon: "wave", accent: "#60A5FA" },
  { label: "Financial Data Analysis", icon: "finance", accent: "#FACC15" },
  { label: "Cloud Analytics Workflows", icon: "cloud", accent: "#38BDF8" },
  { label: "Data Engineering", icon: "pipeline", accent: "#BFA181" },
  { label: "ETL Pipelines", icon: "etl", accent: "#D4C5B0" },
  { label: "Statistical Analysis", icon: "stats", accent: "#F9A8D4" },
  { label: "Hypothesis Testing", icon: "test", accent: "#FDA4AF" },
  { label: "Exploratory Data Analysis", icon: "eda", accent: "#86EFAC" },
  { label: "R Programming", icon: "r", accent: "#276DC3" },
  { label: "Neo4j Graph Data Science", icon: "graph", accent: "#00A3E0" },
  { label: "Cypher Query Language", icon: "query", accent: "#BFA181" },
  { label: "Recommendation Systems", icon: "recommend", accent: "#FDE68A" },
  { label: "Tableau", icon: "tableau", accent: "#E97627" },
  { label: "Power BI", icon: "powerbi", accent: "#F2C811" },
  { label: "Docker", icon: "docker", accent: "#2496ED" },
  { label: "Git and GitHub", icon: "git", accent: "#F05032" },
  { label: "Java", icon: "java", accent: "#EA2D2E" },
  { label: "C++", icon: "cpp", accent: "#00599C" },
  { label: "JavaScript", icon: "javascript", accent: "#F7DF1E" },
  { label: "React.js", icon: "react", accent: "#61DAFB" },
  { label: "MySQL", icon: "mysql", accent: "#4479A1" },
  { label: "MongoDB", icon: "mongodb", accent: "#47A248" },
];

const experience = [
  {
    role: "Data Science Intern",
    company: "PluginLive",
    period: "Jul 2023 – Dec 2023",
    logo: "PL",
    side: "left",
    summary:
      "Worked on structured data preparation, exploratory analysis, SQL querying, and machine learning workflows using Python, Pandas, NumPy, and Scikit-learn.",
  },
  {
    role: "Data Science Intern",
    company: "Skolar",
    period: "May 2022 – Oct 2022",
    logo: "SK",
    side: "right",
    summary:
      "Built practical foundations in preprocessing, supervised learning, visualization, model evaluation, feature engineering, and end-to-end data science execution.",
  },
];

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Maryland, College Park",
    period: "Aug 2024 – May 2026",
    logo: "UMD",
    side: "left",
    summary:
      "Graduate coursework focused on machine learning, deep learning, big data systems, statistical modeling, data engineering, NLP, cloud computing, and applied analytics.",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Easwari Engineering College",
    period: "Nov 2020 – 2024",
    logo: "EEC",
    side: "right",
    summary:
      "Affiliated by Anna University. Built a strong foundation in programming, databases, web development, software engineering, and machine learning fundamentals.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {eyebrow && (
        <p className="text-lg uppercase tracking-[0.36em] text-[#D4C5B0]/65">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-5 text-6xl font-black leading-none text-white md:text-8xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-[#D4C5B0]/78">
          {description}
        </p>
      )}
    </div>
  );
}

function TimelineItem({
  item,
}: {
  item: {
    degree?: string;
    role?: string;
    school?: string;
    company?: string;
    period: string;
    logo: string;
    summary: string;
    side: string;
  };
}) {
  const isLeft = item.side === "left";

  return (
    <div className="relative grid min-h-[310px] grid-cols-1 items-center gap-6 md:grid-cols-[1fr_120px_1fr]">
      <div>
        {isLeft ? (
          <div className="rounded-md border border-[#BFA181]/18 bg-[#201833] p-8 shadow-[0_6px_0_#D4C5B0]">
            <h3 className="text-3xl font-black text-white">
              {item.degree || item.role}
            </h3>
            <p className="mt-3 text-xl font-bold text-[#D4C5B0]/75">
              {item.school || item.company}
            </p>
            <p className="mt-5 text-lg leading-8 text-[#D4C5B0]/75">
              {item.summary}
            </p>
          </div>
        ) : (
          <p className="hidden text-right text-xl font-black text-[#D4C5B0]/75 md:block">
            {item.period}
          </p>
        )}
      </div>

      <div className="relative hidden h-full items-center justify-center md:flex">
        <div className="absolute bottom-0 top-0 w-[5px] bg-white" />
        <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-white bg-[#070913] shadow-xl">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#BFA181] text-sm font-black text-[#1C1C1C]">
            {item.logo}
          </span>
        </div>
      </div>

      <div>
        {!isLeft ? (
          <div className="rounded-md border border-[#BFA181]/18 bg-[#201833] p-8 shadow-[0_6px_0_#D4C5B0]">
            <h3 className="text-3xl font-black text-white">
              {item.degree || item.role}
            </h3>
            <p className="mt-3 text-xl font-bold text-[#D4C5B0]/75">
              {item.school || item.company}
            </p>
            <p className="mt-5 text-lg leading-8 text-[#D4C5B0]/75">
              {item.summary}
            </p>
          </div>
        ) : (
          <p className="hidden text-xl font-black text-[#D4C5B0]/75 md:block">
            {item.period}
          </p>
        )}
      </div>
    </div>
  );
}

function SkillLogo({
  icon,
  label,
  accent,
  index,
}: {
  icon: string;
  label: string;
  accent: string;
  index: number;
}) {
  function IconShape() {
    const common = {
      fill: "none",
      stroke: accent,
      strokeWidth: 7,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (icon) {
      case "python":
        return (
          <>
            <path
              {...common}
              d="M38 38h32c10 0 18 8 18 18v8H52c-8 0-14 6-14 14v8H26c-8 0-14-6-14-14V56c0-10 8-18 18-18h8z"
            />
            <path
              {...common}
              d="M86 86H54c-10 0-18-8-18-18v-8h36c8 0 14-6 14-14v-8h12c8 0 14 6 14 14v16c0 10-8 18-18 18h-8z"
            />
            <circle cx="46" cy="50" r="4" fill={accent} />
            <circle cx="78" cy="74" r="4" fill={accent} />
          </>
        );

      case "database":
      case "mysql":
        return (
          <>
            <ellipse {...common} cx="64" cy="34" rx="34" ry="14" />
            <path {...common} d="M30 34v48c0 8 15 14 34 14s34-6 34-14V34" />
            <path {...common} d="M30 58c0 8 15 14 34 14s34-6 34-14" />
          </>
        );

      case "flame":
        return (
          <path
            {...common}
            d="M66 18c12 20-8 24 10 42 8 8 11 20 3 30-10 14-35 14-47 0-13-15-3-35 13-48 5 14 15 15 21-24z"
          />
        );

      case "blocks":
        return (
          <>
            <rect {...common} x="25" y="28" width="28" height="28" />
            <rect {...common} x="70" y="28" width="28" height="28" />
            <rect {...common} x="47" y="72" width="28" height="28" />
          </>
        );

      case "network":
      case "graph":
        return (
          <>
            <circle {...common} cx="64" cy="28" r="10" />
            <circle {...common} cx="32" cy="82" r="10" />
            <circle {...common} cx="96" cy="82" r="10" />
            <path {...common} d="M59 37 38 73M69 37l21 36M44 82h40" />
          </>
        );

      case "bars":
      case "tableau":
      case "powerbi":
        return (
          <>
            <rect x="26" y="70" width="14" height="32" rx="4" fill={accent} />
            <rect x="48" y="48" width="14" height="54" rx="4" fill={accent} />
            <rect x="70" y="30" width="14" height="72" rx="4" fill={accent} />
            <rect x="92" y="58" width="14" height="44" rx="4" fill={accent} />
          </>
        );

      case "cube":
        return (
          <>
            <path {...common} d="M64 20 102 42v44L64 108 26 86V42z" />
            <path {...common} d="M64 20v44l38-22M64 64 26 42M64 64v44" />
          </>
        );

      case "chart":
      case "stats":
      case "eda":
        return (
          <>
            <path {...common} d="M24 96h80" />
            <path {...common} d="M30 82l20-22 18 12 30-36" />
            <circle cx="30" cy="82" r="5" fill={accent} />
            <circle cx="50" cy="60" r="5" fill={accent} />
            <circle cx="68" cy="72" r="5" fill={accent} />
            <circle cx="98" cy="36" r="5" fill={accent} />
          </>
        );

      case "spark":
        return (
          <>
            <path
              {...common}
              d="M64 18 74 52 108 64 74 76 64 110 54 76 20 64 54 52z"
            />
            <path
              {...common}
              d="M92 24l6 18 18 6-18 6-6 18-6-18-18-6 18-6z"
            />
          </>
        );

      case "nodes":
      case "vectors":
        return (
          <>
            {[32, 64, 96].map((x) => (
              <circle key={x} cx={x} cy="64" r="10" fill={accent} />
            ))}
            <path {...common} d="M42 64h12M74 64h12" />
            <circle cx="64" cy="32" r="8" fill={accent} />
            <path {...common} d="M64 40v14" />
          </>
        );

      case "stream":
      case "pipeline":
      case "etl":
        return (
          <>
            <path {...common} d="M22 42h34c12 0 12 44 24 44h26" />
            <path {...common} d="M22 86h34c12 0 12-44 24-44h26" />
            <path {...common} d="M96 32l14 10-14 10M96 76l14 10-14 10" />
          </>
        );

      case "parallel":
        return (
          <>
            <path {...common} d="M34 28v72M64 28v72M94 28v72" />
            <path {...common} d="M24 42h80M24 86h80" />
          </>
        );

      case "text":
      case "query":
        return (
          <>
            <path {...common} d="M28 34h72M28 54h58M28 74h72M28 94h44" />
            <circle cx="96" cy="94" r="8" fill={accent} />
          </>
        );

      case "brain":
        return (
          <>
            <path
              {...common}
              d="M46 30c-16 0-22 14-14 26-14 8-10 32 8 34 2 16 24 18 30 4 14 8 34-2 30-20 14-10 8-32-8-34 0-20-28-24-36-8-2-1-6-2-10-2z"
            />
            <path {...common} d="M54 48v40M74 44v44M42 64h44" />
          </>
        );

      case "rings":
        return (
          <>
            <circle {...common} cx="64" cy="64" r="36" />
            <circle {...common} cx="64" cy="64" r="22" />
            <circle cx="64" cy="64" r="8" fill={accent} />
          </>
        );

      case "wave":
        return (
          <>
            <path {...common} d="M20 72c12-26 24-26 36 0s24 26 36 0 24-26 36 0" />
            <path {...common} d="M20 92h88" />
          </>
        );

      case "finance":
        return (
          <>
            <path {...common} d="M28 92h72" />
            <path {...common} d="M38 82V54M62 82V34M86 82V46" />
            <path {...common} d="M34 48l28-18 24 12 18-20" />
          </>
        );

      case "cloud":
        return (
          <>
            <path
              {...common}
              d="M42 84H92c12 0 20-8 20-19s-9-19-21-19c-5-18-30-24-44-9-16-2-31 10-31 25 0 13 10 22 26 22z"
            />
            <path {...common} d="M42 96h44" />
          </>
        );

      case "test":
        return (
          <>
            <path {...common} d="M46 24v28L28 92c-4 8 2 16 12 16h48c10 0 16-8 12-16L82 52V24" />
            <path {...common} d="M42 24h44M42 78h44" />
          </>
        );

      case "r":
        return (
          <>
            <ellipse {...common} cx="64" cy="64" rx="44" ry="30" />
            <path {...common} d="M44 80V46h26c18 0 18 24 0 24H44" />
            <path {...common} d="M68 70l22 18" />
          </>
        );

      case "recommend":
        return (
          <>
            <path {...common} d="M64 28l10 22 24 3-18 17 5 24-21-12-21 12 5-24-18-17 24-3z" />
            <path {...common} d="M28 102h72" />
          </>
        );

      case "docker":
        return (
          <>
            <rect x="22" y="58" width="14" height="14" fill={accent} />
            <rect x="40" y="58" width="14" height="14" fill={accent} />
            <rect x="58" y="58" width="14" height="14" fill={accent} />
            <rect x="40" y="40" width="14" height="14" fill={accent} />
            <rect x="58" y="40" width="14" height="14" fill={accent} />
            <path {...common} d="M22 78h78c-6 18-20 28-42 28-18 0-32-10-36-28z" />
          </>
        );

      case "git":
        return (
          <>
            <path {...common} d="M64 18l46 46-46 46-46-46z" />
            <circle cx="48" cy="48" r="7" fill={accent} />
            <circle cx="80" cy="80" r="7" fill={accent} />
            <path {...common} d="M53 53l22 22M48 48v34" />
          </>
        );

      case "java":
        return (
          <>
            <path {...common} d="M52 30c20 14-18 22 4 38M76 22c22 18-24 26 2 46" />
            <path {...common} d="M34 82c18 10 44 10 62 0M40 98c14 8 34 8 48 0" />
          </>
        );

      case "cpp":
        return (
          <>
            <path {...common} d="M64 20 102 42v44L64 108 26 86V42z" />
            <path {...common} d="M72 48c-16-14-40-2-40 16s24 30 40 16" />
            <path {...common} d="M82 54v22M94 54v22M76 65h24" />
          </>
        );

      case "javascript":
        return (
          <>
            <rect {...common} x="28" y="28" width="72" height="72" />
            <path {...common} d="M50 78c0 12 20 12 20 0V48M78 80c5 8 20 8 20-2 0-16-22-8-22-24 0-10 16-12 22-4" />
          </>
        );

      case "react":
        return (
          <>
            <ellipse {...common} cx="64" cy="64" rx="48" ry="18" />
            <ellipse {...common} cx="64" cy="64" rx="48" ry="18" transform="rotate(60 64 64)" />
            <ellipse {...common} cx="64" cy="64" rx="48" ry="18" transform="rotate(120 64 64)" />
            <circle cx="64" cy="64" r="8" fill={accent} />
          </>
        );

      case "mongodb":
        return (
          <>
            <path
              {...common}
              d="M64 18c24 24 28 58 0 92-28-34-24-68 0-92z"
            />
            <path {...common} d="M64 40v62" />
          </>
        );

      default:
        return (
          <>
            <circle {...common} cx="64" cy="64" r="36" />
            <path {...common} d="M44 64h40M64 44v40" />
          </>
        );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.025, 0.28) }}
      className="group relative flex justify-center"
      title={label}
    >
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#D4C5B0] bg-[#F6EFE5] shadow-xl transition duration-300 group-hover:-translate-y-2 group-hover:scale-105">
        <svg viewBox="0 0 128 128" className="h-20 w-20">
          <IconShape />
        </svg>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    fullTitle: string;
    link: string;
    gif: string;
    image: string;
    type: string;
    tags: string[];
    description: string;
  };
  index: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 46, rotateX: 7 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.045, 0.3),
        ease: "easeOut",
      }}
      className="group rounded-[1.65rem] bg-[#201833] p-6 shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-3 hover:shadow-[#BFA181]/10"
    >
      <div className="relative h-64 overflow-hidden rounded-2xl bg-[#0f1020] p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#BFA18133_0%,transparent_58%)]" />

        <img
          src={project.gif}
          alt={project.fullTitle}
          className="relative z-10 h-full w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            e.currentTarget.src = project.image;
          }}
        />

        <div className="absolute right-5 top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#1C1C1C] text-sm font-black text-[#BFA181] shadow-xl">
          GH
        </div>
      </div>

      <h3 className="mt-8 min-h-[84px] text-3xl font-black leading-tight text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-xl text-[#BFA181] underline">{project.type}</p>
      <p className="mt-5 min-h-[96px] text-xl leading-8 text-[#D4C5B0]/75">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tag}
            className={`text-lg ${
              tagIndex % 3 === 0
                ? "text-[#BFA181]"
                : tagIndex % 3 === 1
                  ? "text-[#D4C5B0]"
                  : "text-white"
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#070913] text-[#D4C5B0]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#070913]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,#BFA18122_0%,transparent_28%),radial-gradient(circle_at_88%_15%,#5B4B7A40_0%,transparent_32%),radial-gradient(circle_at_50%_100%,#BFA18116_0%,transparent_32%)]" />

        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              radial-gradient(circle at 6% 14%, rgba(255,255,255,0.75) 0 1px, transparent 1.8px),
              radial-gradient(circle at 13% 72%, rgba(212,197,176,0.65) 0 1px, transparent 1.8px),
              radial-gradient(circle at 19% 36%, rgba(255,255,255,0.55) 0 1px, transparent 1.8px),
              radial-gradient(circle at 27% 82%, rgba(191,161,129,0.75) 0 1px, transparent 1.8px),
              radial-gradient(circle at 34% 18%, rgba(255,255,255,0.65) 0 1px, transparent 1.8px),
              radial-gradient(circle at 42% 64%, rgba(212,197,176,0.55) 0 1px, transparent 1.8px),
              radial-gradient(circle at 51% 28%, rgba(255,255,255,0.75) 0 1px, transparent 1.8px),
              radial-gradient(circle at 59% 78%, rgba(191,161,129,0.6) 0 1px, transparent 1.8px),
              radial-gradient(circle at 66% 40%, rgba(255,255,255,0.6) 0 1px, transparent 1.8px),
              radial-gradient(circle at 73% 16%, rgba(212,197,176,0.7) 0 1px, transparent 1.8px),
              radial-gradient(circle at 81% 68%, rgba(255,255,255,0.55) 0 1px, transparent 1.8px),
              radial-gradient(circle at 89% 34%, rgba(191,161,129,0.75) 0 1px, transparent 1.8px),
              radial-gradient(circle at 96% 88%, rgba(255,255,255,0.6) 0 1px, transparent 1.8px)
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              radial-gradient(circle at 9% 46%, rgba(255,255,255,0.95) 0 1.5px, transparent 2.5px),
              radial-gradient(circle at 23% 9%, rgba(191,161,129,0.9) 0 1.4px, transparent 2.4px),
              radial-gradient(circle at 39% 91%, rgba(255,255,255,0.85) 0 1.4px, transparent 2.4px),
              radial-gradient(circle at 57% 11%, rgba(212,197,176,0.9) 0 1.4px, transparent 2.4px),
              radial-gradient(circle at 76% 84%, rgba(255,255,255,0.85) 0 1.4px, transparent 2.4px),
              radial-gradient(circle at 92% 52%, rgba(191,161,129,0.9) 0 1.4px, transparent 2.4px)
            `,
          }}
        />

        <div className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#BFA181]/10 blur-[150px]" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#D4C5B0]/8 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <nav className="fixed left-0 right-0 top-0 z-50 bg-[#070913]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-[#102846] text-lg font-black text-white">
                SV
              </span>
              <span className="text-2xl font-black text-white">
                Sai | Vikram
              </span>
            </a>

            <div className="hidden gap-12 text-2xl font-bold text-[#D4C5B0]/82 md:flex">
              <a href="#about" className="hover:text-[#BFA181]">
                About
              </a>
              <a href="#education" className="hover:text-[#BFA181]">
                Education
              </a>
              <a href="#work" className="hover:text-[#BFA181]">
                Work
              </a>
              <a href="#skills" className="hover:text-[#BFA181]">
                Skills
              </a>
              <a href="#projects" className="hover:text-[#BFA181]">
                Projects
              </a>
              <a href="#contact" className="hover:text-[#BFA181]">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="absolute left-[-18%] top-[10%] h-[700px] w-[700px] rounded-full border border-[#BFA181]/18" />
          <div className="absolute left-[-12%] top-[14%] h-[600px] w-[600px] rounded-full border border-[#BFA181]/14" />
          <div className="absolute right-[-16%] top-[10%] h-[760px] w-[760px] rounded-full border border-[#BFA181]/18" />
          <div className="absolute right-[-10%] top-[15%] h-[620px] w-[620px] rounded-full border border-[#BFA181]/14" />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full"
          >
            <div className="ml-0 border-l-[6px] border-[#BFA181] pl-10 md:ml-16">
              <h1 className="text-7xl font-black leading-[0.95] text-white md:text-[9rem]">
                Hi, I&apos;m <span className="text-[#BFA181]">Vikram</span>
              </h1>
              <p className="mt-10 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
                I&apos;m an aspiring Data / ML / Software Engineer driven by
                curiosity and modern technology.
              </p>
            </div>

            <div className="mx-auto mt-20 max-w-5xl rounded-[2.5rem] border border-[#BFA181]/20 bg-[#D4C5B0]/8 p-8 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-black/25 p-6 text-center">
                  <p className="text-4xl font-black text-[#BFA181]">2</p>
                  <p className="mt-2 text-lg font-bold text-[#D4C5B0]/75">
                    Internships
                  </p>
                </div>
                <div className="rounded-3xl bg-black/25 p-6 text-center">
                  <p className="text-4xl font-black text-[#BFA181]">
                    Projects
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#D4C5B0]/75">
                    Applied Portfolio
                  </p>
                </div>
                <div className="rounded-3xl bg-black/25 p-6 text-center">
                  <p className="text-4xl font-black text-[#BFA181]">40+</p>
                  <p className="mt-2 text-lg font-bold text-[#D4C5B0]/75">
                    Technical Skills
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-[#BFA181] px-8 py-3 text-xl font-black text-[#1C1C1C] transition hover:bg-[#D4C5B0]"
                >
                  View Projects
                </a>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0] transition hover:text-[#BFA181]"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/vikram3010"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0] transition hover:text-[#BFA181]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-vikram-karna-ananth-balasingam/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0] transition hover:text-[#BFA181]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-28 text-center"
        >
          <p className="text-2xl uppercase tracking-[0.32em] text-[#D4C5B0]/65">
            Introduction
          </p>
          <h2 className="mt-6 text-7xl font-black text-white md:text-8xl">
            Overview.
          </h2>

          <p className="mx-auto mt-10 max-w-5xl text-center text-2xl leading-[1.65] text-[#D4C5B0]/78">
            I&apos;m Sai Vikram Karna Ananth Balasingam, an MS Data Science
            student at the University of Maryland, College Park. I build
            practical systems across machine learning, deep learning, data
            engineering, NLP, cloud analytics, graph databases, and software
            development. My work focuses on connecting models with
            implementation: clean data pipelines, reliable evaluation,
            reproducible workflows, and portfolio-ready engineering
            documentation.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            {[
              ["ML", "Machine Learning Systems"],
              ["DE", "Data Engineering"],
              ["AI", "Applied AI / NLP"],
              ["SE", "Software Engineering"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="rounded-[2rem] border-2 border-[#BFA181] bg-[#201833] p-8 text-center shadow-2xl shadow-black/25"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#BFA181] text-3xl font-black text-[#1C1C1C]">
                  {icon}
                </div>
                <p className="mt-8 text-2xl font-black text-white">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader title="Education." />

          <div className="mx-auto mt-20 max-w-6xl">
            {education.map((item) => (
              <TimelineItem key={item.school} item={item} />
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-5xl rounded-[2rem] border border-[#BFA181]/20 bg-[#201833] p-8 text-center shadow-xl">
            <h3 className="text-3xl font-black text-white">
              Leadership & Involvement
            </h3>
            <p className="mx-auto mt-5 max-w-4xl text-xl leading-9 text-[#D4C5B0]/75">
              Served as Secretary of the Computer Science Department from
              2021–2022 and was a Member of ACE, the Association of Computer
              Engineers, during 2021–2022.
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader
            eyebrow="What I have done so far"
            title="Work Experience."
          />

          <div className="mx-auto mt-20 max-w-6xl">
            {experience.map((item) => (
              <TimelineItem key={item.company} item={item} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader
            eyebrow="Technical Toolkit"
            title="Skills."
            description="Tools, frameworks, platforms, and methods I use across the data and software lifecycle."
          />

          <div className="mt-20 grid grid-cols-3 gap-x-8 gap-y-14 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {skillLogos.map((skill, index) => (
              <SkillLogo
                key={skill.label}
                label={skill.label}
                icon={skill.icon}
                accent={skill.accent}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-2xl uppercase tracking-[0.32em] text-[#D4C5B0]/65">
              My Work
            </p>
            <h2 className="mt-6 text-7xl font-black text-white md:text-8xl">
              Projects.
            </h2>
            <p className="mx-auto mt-10 max-w-5xl text-2xl leading-[1.55] text-[#D4C5B0]/78">
              These projects showcase my work across machine learning, deep
              learning, streaming systems, cloud workflows, NLP, graph
              analytics, statistical modeling, and software engineering. Each
              card links to its GitHub repository.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.fullTitle}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative mx-auto max-w-7xl px-6 py-28 text-center"
        >
          <p className="text-2xl uppercase tracking-[0.32em] text-[#D4C5B0]/65">
            Get in touch
          </p>
          <h2 className="mt-6 text-7xl font-black text-white md:text-8xl">
            Contact.
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-2xl leading-[1.55] text-[#D4C5B0]/78">
            I am actively seeking opportunities in the United States where I can
            apply machine learning, analytics, data engineering, and software
            development to build impactful technical solutions.
          </p>

          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-[#201833] p-10 shadow-2xl shadow-black/30">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-[#120c25] px-7 py-5 text-left text-xl text-[#D4C5B0]/70">
                Your Name
              </div>
              <div className="rounded-xl bg-[#120c25] px-7 py-5 text-left text-xl text-[#D4C5B0]/70">
                Your Email
              </div>
            </div>
            <div className="mt-6 min-h-40 rounded-xl bg-[#120c25] px-7 py-5 text-left text-xl text-[#D4C5B0]/70">
              Your Message
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-full bg-[#BFA181] px-8 py-3 text-xl font-black text-[#1C1C1C] transition hover:bg-[#D4C5B0]"
              >
                Email Me
              </a>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0]"
              >
                Resume
              </a>
              <a
                href="https://github.com/vikram3010"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sai-vikram-karna-ananth-balasingam/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#BFA181]/40 px-8 py-3 text-xl font-black text-[#D4C5B0]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#BFA181]/15 py-10 text-center text-lg text-[#D4C5B0]/55">
          Built with Next.js, React, Tailwind CSS, and Framer Motion · Sai
          Vikram Karna Ananth Balasingam
        </footer>
      </div>
    </main>
  );
}