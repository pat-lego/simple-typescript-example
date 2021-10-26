const world = "world";

export function hello(helloStr: string = world): string {
  return `Hello ${helloStr}! `;
}