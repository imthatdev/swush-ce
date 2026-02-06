/*
 *   Copyright (c) 2025 Laith Alkhaddam aka Iconical.
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

"use client";

import { Progress } from "@/components/ui/progress";
import { DocTooltip } from "./DocTooltip";

type Props = {
  k: string;
  used: number;
  limit: number;
  unit?: string;
};

export function LimitHint({ k, used, limit, unit }: Props) {
  const pct = Math.min(100, Math.round((used / Math.max(1, limit)) * 100));
  return (
    <div className="flex items-center gap-3">
      <div className="min-w-40 text-sm">
        <div className="flex items-center">
          <span className="font-medium">Limit</span>
          <DocTooltip k={k} />
        </div>
        <div className="text-muted-foreground">
          {used} / {limit}
          {unit ? ` ${unit}` : ""}
        </div>
      </div>
      <Progress value={pct} className="w-48" />
    </div>
  );
}
