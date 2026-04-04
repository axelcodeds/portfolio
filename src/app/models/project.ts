export interface Project {
  id: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  domain: string;
  status: 'Planned' | 'In Progress' | 'Live';
  stack: string[];
  icon: string;
}
