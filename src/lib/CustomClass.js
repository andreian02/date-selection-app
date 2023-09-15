// src/CustomClass.js


class BiDirectionalStems {
  constructor() {
    this.forwardMap = new Map();
    this.reverseMap = new Map();
  }

  // Add a stem and its properties to the map
  addStem(name, properties) {
    this.forwardMap.set(name, properties);
    for (const [property, value] of Object.entries(properties)) {
      if (!this.reverseMap.has(property)) {
        this.reverseMap.set(property, new Map());
      }
      this.reverseMap.get(property).set(value, name);
    }
  }

  // Query a property of a stem
  queryProperty(stemName, propertyName) {
    const properties = this.forwardMap.get(stemName);
    if (properties && properties.hasOwnProperty(propertyName)) {
      return properties[propertyName];
    } else {
      return `Property '${propertyName}' not found for '${stemName}'.`;
    }
  }
}  export default BiDirectionalStems;