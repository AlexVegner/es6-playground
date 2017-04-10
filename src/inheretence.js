class Task {
  constructor(title = getDefaultTitle()) {
    this._title = title;
    this.done = false;
    Task.count += 1;
    console.log('Create Task');
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  static getDefaultTitle() {
    return "Default Task";
  }
  complete() {
    this.done = true;
    console.log(`Task ${this._title} completed`);
  }
}

Task.count = 0;

class SubTask extends Task {
  constructor(title, parent) {
    super(title);
    this.parent = parent;
    console.log('Create Sub Task');
  }

  complete() {
    super.complete();
    console.log(`SubTask ${this.title} completed`);
  }
}

let task = new Task('Изучить  JS');
let subTask = new SubTask('Изучить ES6', task );
subTask.parent = task;

task.complete();
subTask.complete();
// console.log(subTask instanceof SubTask);
// console.log(subTask instanceof Task);
console.log(task);
console.log(subTask);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);
