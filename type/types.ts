export type Project = {
  id: number;
  name: string;
  images: {
    src: string;
    info1?: string;
    info2?: string;
    info3?: string;
  }[];
  git: string;
  liveSite: string;
  techStack: string[];
};

export type ProjectsDivMobileProps = {
  projects: Project[];
  mobileImageIndices: number[];
  onViewMore: (project: Project) => void;
};

export type ProjectDivPCProps = {
  projects: Project[];
  currentIndex: number;
  currentImageIndex: number;
  onViewMore: (project: Project) => void;
};


export type ProjectsModalProps = {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
};
