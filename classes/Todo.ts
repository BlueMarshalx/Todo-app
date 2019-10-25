export default class Todo {

  public id: string;
  public name: string;
  public description: string;
  public completed = false;
  public completedOn: Date | undefined;

  constructor(name: string, description: string, completed = false, completedOn?: Date) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.completedOn = completedOn;
  }

}