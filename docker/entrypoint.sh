#!/bin/sh
set -e

if [ -n "${DATABASE_URL:-}" ]; then
  echo "Running database push..."
  pnpm db:migrate 
fi

exec node server.js