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
import { IconInfoCircle as IconInfo} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDocSnippet } from "@/lib/providers/docsRegistry";
import { cn } from "@/lib/utils";

type Props = {
  k: string;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
};

export function DocTooltip({ k, className, side = "top" }: Props) {
  const doc = getDocSnippet(k);
  if (!doc?.hint) return null;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="Help"
            className={cn(
              "ml-2 inline-flex h-5 w-5 items-center justify-center rounded border text-muted-foreground hover:text-foreground",
              className
            )}
          >
            <IconInfo className="h-3.5 w-3.5" />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs text-sm leading-snug">
          {doc.hint}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
