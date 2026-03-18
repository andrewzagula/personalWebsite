export type ProjectAction = {
  kind: 'source' | 'website';
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  actions: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: 'PaperTrail',
    description: 'Agentic AI research assistant exploring arXiv to help answer research questions.',
    tech: ['Python', 'TypeScript', 'SQL', 'FastAPI', 'Next.js', 'React', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'OpenAI API'],
    actions: [
      { kind: 'source', label: 'Source (coming soon)' },
    ],
  },
  {
    title: 'Rewind',
    description: 'Research backtesting platform for simulating trading strategy performance.',
    tech: ['Python', 'Polaris', 'NumPy', 'DuckDB', 'FastAPI', 'Uvicorn', 'Parquet', 'PostgreSQL', 'Redis', 'Next.js', 'Tailwind CSS', 'Plotly', 'Docker', 'TypeScript'],
    actions: [
      { kind: 'source', label: 'Source (coming soon)' },
    ],
  },
  {
    title: 'PolishAI',
    description: 'System-wide AI layer that rewrites your messy thoughts into polished inputs.',
    tech: ['Electron', 'React', 'TypeScript', 'Node.js', 'SQLite', 'OpenAI API', 'Zustand', 'Zod'],
    actions: [
      { kind: 'source', label: 'Source (coming soon)' },
    ],
  },
  {
    title: 'AutoAdv',
    description: 'Automated adversarial prompting pipeline for multi-turn LLM jailbreaking.',
    tech: ['Python', 'OpenAI API', 'Together AI API', 'xAI API'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AAN-AutoAdv/AutoAdv' },
    ],
  },
  {
    title: 'AUDIT',
    description: 'RAG-powered CLI tool scanning local repositories for security vulnerabilities.',
    tech: ['Python', 'Typer', 'Pydantic', 'OpenAI API', 'ChromaDB', 'SQLite', 'FastAPI', 'Node.js', 'npm'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AryaVaidya08/AUDIT' },
    ],
  },
];
