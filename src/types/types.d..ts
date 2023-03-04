type JwtPayload = {
  sub: string;
  name: string;
  role: string;
};

type JwtCachePayload = {
  sub: string;
  name: string;
  role: string;
  access_token: string;
  refresh_token: string;
};

export { JwtPayload, JwtCachePayload };
