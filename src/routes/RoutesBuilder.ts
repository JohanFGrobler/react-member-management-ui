export enum ROUTES {
  MEMBERS = '/',
  MEMBER = '/member/:_id',
  SPORTS = '/sports'
}

type TArgsWithParams = Extract<TArgs, { path: string; params: unknown }>;

type TArgs =
  | { path: ROUTES.MEMBERS }
  | { path: ROUTES.MEMBER; params?: { _id: string } }
  | { path: ROUTES.SPORTS }

export function createPath(args: TArgs): string {
  if (!Object.prototype.hasOwnProperty.call(args, 'params')) return args.path;

  return Object.entries((args as TArgsWithParams)['params']).reduce(
    (previousValue: string, [param, value]) =>
      previousValue.replace(`:${param}`, '' + value),
    args.path
  );
}