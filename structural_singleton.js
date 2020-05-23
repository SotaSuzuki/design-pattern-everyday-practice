// Singleton design pattern is creational design pattern that ensures that a class will only have one instance

class AppCore {
  static instance = new AppCore();

  static getInstance() {
    return this.instance;
  }

  constructor() {
    this.plugins = [];
  }

  use(plugin) {
    this.plugins.push(plugin);
    return AppCore.getInstance();
  }

  getPlugins() {
    return this.plugins
  }
}

const core = AppCore.getInstance();
const core2 = AppCore.getInstance();

console.assert(core === core2);

const myPlugin = {};
const myPlugin2 = {};
core
  .use(myPlugin)
  .use(myPlugin2);

console.dir(core, { deps: null });

console.assert(core.getPlugins().length === 2);
console.assert(core.getPlugins() === core2.getPlugins());
