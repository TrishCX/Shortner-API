import type { Response } from "express";

export type Props = {
  app: Response;
  urlToRedirect: string;
};

export default function redirect(props: Props) {
  const { app, urlToRedirect } = props;
  return app.redirect(urlToRedirect);
}
