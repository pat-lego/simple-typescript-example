const world = "world";

export function hello(helloStr: string = world): string {
  return `Hello ${helloStr}! `;
}

console.log(`Empty invocation of hello function ${hello()}`)
console.log(`Parameterized invocation of the hello function ${hello("Pat")}`)