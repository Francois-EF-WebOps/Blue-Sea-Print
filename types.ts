
export enum Section {
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
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
