export class Project {
  index: number;
  title: string;
  primaryRole: string;
  secondaryRole: string;
  description: string;
  type: string;
  githubUrl: string;
  websiteUrl: string;
  technologiesUsed: string[];
  skillAcquired: string;

  constructor(index: number, title: string, primaryRole: string, secondaryRole: string = null, description: string, type: string, githubUrl: string, websiteUrl: string, technologiesUsed: string[], skillAcquired: string) {
    this.index = index;
    this.title = title;
    this.primaryRole = primaryRole;
    this.secondaryRole = secondaryRole;
    this.description = description;
    this.type = type;
    this.githubUrl = githubUrl;
    this.websiteUrl = websiteUrl;
    this.technologiesUsed = technologiesUsed;
    this.skillAcquired = skillAcquired;
  }
}
