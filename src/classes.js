class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title; // "Room makeup";
    this._done = false;
    console.log('Task creation...');
    Task.count += 1;
  }
  get done() {
    return this._done === true ? 'Done' : 'Not done';
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
       console.error('Erroe! You need to use true or false.');
    }
    return this._done = value;
  }

  complete() {
    this._done = true;
    console.log(`Task ${this.title} completed`);
  }

  static getDefaultTitle() {
    return 'Default';
  }
}

Task.count = 0;

let task = new Task('Room makeup');
let task2 = new Task('Task2');
let task3 = new Task('Sell somthing');

console.log(typeof task);

console.log(task instanceof Task);

console.log(task2.title);

task.complete();

console.log(Task.count);

let task4 = new Task();

console.log(task4.title);

task4.done = false;
console.log(task4.done);

task4.done = 1;
console.log(task4.done);
