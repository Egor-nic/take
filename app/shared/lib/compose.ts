// eslint-disable-next-line ts/no-unsafe-function-type
export default function compose(...fns: Function[]) {
  return (component: () => React.ReactNode) =>
    fns.reduceRight((prevFn, nextFn) => nextFn(prevFn), component);
}
