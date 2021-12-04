export class Project {
  index: number;
  title: string;
  primaryRole: string;
  secondaryRole: string;
  description: string;
  type: string;
  technologiesUsed: string[];

  constructor(index: number, title: string, primaryRole: string, secondaryRole: string = null, description: string, type: string, technologiesUsed: string[]) {
    this.index = index;
    this.title = title;
    this.primaryRole = primaryRole;
    this.secondaryRole = secondaryRole;
    this.description = description;
    this.technologiesUsed = technologiesUsed;
    this.type = type;
  }
}
