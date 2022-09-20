export default function resolveParam (param: unknown) {
  return param  ? parseInt(param as unknown as string) : undefined;
}