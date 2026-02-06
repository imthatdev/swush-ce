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

import { DocTooltip } from "@/components/Admin/Docs/DocTooltip";
import { DocPopover } from "@/components/Admin/Docs/DocPopover";
import { LimitHint } from "@/components/Admin/Docs/LimitHint";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdminUploadsCard({
  usedTodayBytes,
  dailyLimitBytes,
}: {
  usedTodayBytes: number;
  dailyLimitBytes: number;
}) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          Upload Settings
          <DocPopover k="uploads.maxSize" title="Upload Settings – Docs" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="maxSize" className="flex items-center gap-2">
            Max File Size
            <DocTooltip k="uploads.maxSize" />
          </Label>
          <Input id="maxSize" name="maxSize" placeholder="e.g. 512MB" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dailyQuota" className="flex items-center gap-2">
            Daily Upload Quota
            <DocTooltip k="uploads.dailyQuota" />
          </Label>
          <Input id="dailyQuota" name="dailyQuota" placeholder="e.g. 5GB" />
          <LimitHint
            k="uploads.dailyQuota"
            used={Math.round(usedTodayBytes / (1024 * 1024))}
            limit={Math.round(dailyLimitBytes / (1024 * 1024))}
            unit="MB"
          />
        </div>
      </CardContent>
    </Card>
  );
}
