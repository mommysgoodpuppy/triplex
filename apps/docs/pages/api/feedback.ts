/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
import type { NextApiRequest, NextApiResponse } from "next";
import {
  literal,
  maxLength,
  minLength,
  object,
  optional,
  parse,
  string,
  union,
} from "valibot";
import { cors } from "../../util/middleware";
import { BASE_URL } from "../../util/url";

const appNames = {
  docs: "Triplex Docs",
  standalone: "Triplex Standalone",
  vsce: "Triplex for VS Code",
};

const schema = object({
  app: union([literal("standalone"), literal("vsce"), literal("docs")]),
  feedback: optional(string([minLength(0), maxLength(1024)])),
  pathname: optional(string([minLength(1), maxLength(96)])),
  sentiment: optional(union([literal("positive"), literal("negative")])),
  user: optional(string([minLength(1), maxLength(96)])),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await cors(req, res);

  const { app, feedback, pathname, sentiment, user } = parse(schema, req.query);

  if (typeof process.env.DISCORD_WEBHOOK_URL !== "string") {
    res
      .status(202)
      .json({ error: "Hook not set up, refer to repository README.md" });
    return;
  }

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      body: JSON.stringify({
        embeds: [
          {
            fields: [
              {
                name: "Page",
                value: pathname ? `${BASE_URL}${pathname}` : "(empty)",
              },
              { name: "Feedback", value: feedback || "(empty)" },
              { name: "Sentiment", value: sentiment || "(empty)" },
              { name: "User", value: user || "(unknown)" },
            ],
            title: `Feedback for ${appNames[app]}`,
          },
        ],
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    res.status(201).json({ success: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ error: "Failed to send feedback" });
  }
}
