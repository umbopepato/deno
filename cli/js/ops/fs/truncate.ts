// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import { sendSync, sendAsync } from "../dispatch_json.ts";

function coerceLen(len?: number): number {
  if (len == null || len < 0) {
    return 0;
  }

  return len;
}

export function ftruncateSync(rid: number, len?: number): void {
  sendSync("op_ftruncate", { rid, len: coerceLen(len) });
}

export async function ftruncate(rid: number, len?: number): Promise<void> {
  await sendAsync("op_ftruncate", { rid, len: coerceLen(len) });
}

export function truncateSync(path: string, len?: number): void {
  sendSync("op_truncate", { path, len: coerceLen(len) });
}

export async function truncate(path: string, len?: number): Promise<void> {
  await sendAsync("op_truncate", { path, len: coerceLen(len) });
}
