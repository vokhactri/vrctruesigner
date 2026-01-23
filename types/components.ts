/**
 * Shared component prop types
 */
import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface FlowStepProps {
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
}
