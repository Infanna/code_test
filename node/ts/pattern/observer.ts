class Observer {
  private data: string[] = [];
  private value: any;
  private pipeFunction;
  private subFunction;

  signal(subject) {
    const status = subject.getStatus();
    this.data.push(status);

    if (this.pipeFunction) {
      this.pipeFunction();
    } else {
      this.value = this.data[this.data.length - 1];
    }
    if (this.subFunction) {
      this.subFunction(this.value);
    }
  }

  pipe(format: string) {
    this.pipeFunction = () => {
      if (format === "firstValueFrom") {
        this.value = this.data[0];
      } else if (format === "all") {
        this.value = this.data;
      } else {
        this.value = this.data[this.data.length - 1];
      }
    };

    return this;
  }

  subscribe(subFunction: Function) {
    this.subFunction = subFunction;
  }
}

class Subject {
  _observer: Observer[] = [];
  status = "";

  register(observer: Observer) {
    this._observer.push(observer);
  }

  update(text: string) {
    this._observer.forEach((observer) => {
      this.status = text;
      observer.signal(this);
    });
  }

  getStatus() {
    return this.status;
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.register(observer1);
subject.register(observer2);
subject.register(observer3);

subject.update("test0");
subject.update("test1");

observer1.pipe("firstValueFrom").subscribe((value) => {
  console.log(value);
});
observer2.pipe("all").subscribe((value) => {
  console.log(value);
});
observer3.subscribe((value) => {
  console.log(value);
});

subject.update("test2");
subject.update("test3");
