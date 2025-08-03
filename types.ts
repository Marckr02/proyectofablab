
export type Section = 'home' | 'help' | 'gallery' | 'ai';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Spec {
  name: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TutorialStep {
    title: string;
    description: string;
}

export interface AiTool {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export interface AiToolCategory {
  category: string;
  description?: string;
  tools: AiTool[];
}

export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    tags: string[];
    type: 'image' | 'video';
    src: string;
    thumbnail: string;
}
