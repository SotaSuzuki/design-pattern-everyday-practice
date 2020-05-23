// Singleton design pattern is creational design pattern that ensures that a class will only have one instance

class AppCore {
  static instance = new AppCore();

  static getInstance() {
    return this.instance;
  }

  showPlugins() {
    return [];
  }
}

const core = AppCore.getInstance();
const core2 = AppCore.getInstance();

console.assert(core === core2);

const plugins = core.showPlugins();
console.log(plugins.length);
