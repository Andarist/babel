class Bar {}

class Foo extends Bar {
  constructor() {
    super.foo();
    super();
  }
}
