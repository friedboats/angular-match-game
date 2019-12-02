export function Required() {
  return function(target: object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get () {
        throw new Error(`Attribute ${propertyKey} is required`);
      },
      set (value) {
        Object.defineProperty(target, propertyKey, { value, writable: true, configurable: true });
      },
    });
  }
}