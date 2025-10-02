type Observer = (data: string) => void;

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: string): void {
    this.observers.forEach((observer) => observer(data));
  }
}

const subject = new Subject();

const observer1 = (data: string) => {
  console.log("Observer 1: " + data);
};

const observer2 = (data: string) => {
  console.log("Observer 2: " + data);
};

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello");
