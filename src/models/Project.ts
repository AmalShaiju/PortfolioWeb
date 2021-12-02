export class Project {
  index: number;
  title: string;
  role: string;
  description: string;
  technology: string;

  constructor(index: number,
    title: string,
    role: string,
    description: string,
    technology: string
  ) {
    this.index = index;
    this.title = title;
    this.role = role;
    this.description = description;
    this.technology = technology;
  }
}
