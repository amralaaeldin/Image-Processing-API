export default function resolveParam(param: unknown): number | undefined {
  return param ? parseInt(param as unknown as string) : undefined;
}
