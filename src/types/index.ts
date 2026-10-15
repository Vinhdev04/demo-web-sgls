export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  scopeList: string[];
  features: string[];
  technicalFocus: string;
  category: 'construction' | 'renovation' | 'finishing' | 'consultation';
}


export interface ProcessStep {
  stepNumber: string;
  title: string;
  summary: string;
  details: string;
  expectedOutput: string;
}

export interface ProjectTypology {
  id: string;
  title: string;
  category: 'all' | 'townhouse' | 'villa' | 'renovation' | 'finishing';
  categoryLabel: string;
  scaleDescription: string;
  structuralNotes: string[];
  status: 'planning' | 'updating';
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  principle: string;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  projectType: string;
  location: string;
  estimatedArea: string;
  requestContent: string;
}

export interface ConsultationSubmission {
  id: string;
  submittedAt: string;
  data: ConsultationFormData;
}
