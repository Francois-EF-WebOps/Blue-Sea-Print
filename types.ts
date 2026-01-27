
export enum Section {
  SIX_HOUR_PROTOCOL = 'SIX_HOUR_PROTOCOL',
  DOCTRINE = 'DOCTRINE',
  PATHWAY = 'PATHWAY',
  PRIMITIVES = 'PRIMITIVES',
  NUTRITION = 'NUTRITION',
  PRESERVATION = 'PRESERVATION',
  LEARNING = 'LEARNING',
  SAFETY = 'SAFETY',
  FAILURE = 'FAILURE',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface BlueprintContent {
  title: string;
  icon: string;
  description: string;
  steps?: string[];
  details?: Record<string, string | string[]>;
  timeline?: {
    label: string;
    duration: string;
    tasks: string[];
  }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
