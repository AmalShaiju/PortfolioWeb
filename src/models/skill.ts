export enum SkillType {
  FRONTEND,
  BACKEND,
  DATABASE,
  MOBILE,
  SOFT,
  PROFESSIONAL,
  TOOL
}
export class Skill {
  description: string;
  skillType: SkillType;

  constructor(description: string, skillType: SkillType) {
    this.description = description;
    this.skillType = skillType;
  }
}
