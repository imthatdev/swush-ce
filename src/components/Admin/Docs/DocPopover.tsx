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
import { IconHelpCircle } from "@tabler/icons-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ReactMarkdown from "react-markdown";
import { getDocSnippet } from "@/lib/providers/docsRegistry";
import { Button } from "@/components/ui/button";

type Props = { k: string; title?: string };

export function DocPopover({ k, title }: Props) {
  const doc = getDocSnippet(k);
  if (!doc?.md) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="More help">
          <IconHelpCircle className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-md">
        <div className="space-y-2">
          <div className="text-sm font-medium">
            {title ?? doc.title ?? "Help"}
          </div>
          <div className="prose prose-sm dark:prose-invert">
            <ReactMarkdown>{doc.md}</ReactMarkdown>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
