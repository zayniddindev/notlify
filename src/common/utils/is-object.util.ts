export function isObject(obj: any): boolean {
  return (
    obj !== null && typeof obj === 'object' && !Array.isArray(obj) && Object.getPrototypeOf(obj).isPrototypeOf(Object)
  );
}
