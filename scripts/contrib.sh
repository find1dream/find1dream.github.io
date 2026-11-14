#!/usr/bin/env bash
# Count my commits per day across the work repos under $ROOT and write src/data/contrib.json.
# Only dates and counts leave the private repos. Usage: scripts/contrib.sh [ROOT] [SINCE]
set -euo pipefail
ROOT=${1:-$HOME/Dev/muse}
SINCE=${2:-2026-01-01}
AUTHOR='find1dream|linfeng|Linfeng'
OUT="$(dirname "$0")/../src/data/contrib.json"
self=$(cd "$(dirname "$0")/.." && pwd)
{
  for d in "$ROOT"/*/ "$ROOT"/app/*/; do
    [ -d "$d/.git" ] || continue
    [ "$(cd "$d" && pwd)" = "$self" ] && continue
    git -C "$d" log --all --no-merges --perl-regexp --author="$AUTHOR" --since="$SINCE" --format='%H %ad' --date=short
  done
} | sort -u -k1,1 | awk '{print $2}' | sort | uniq -c |
  awk -v since="$SINCE" 'BEGIN{printf "{\"since\":\"%s\",\"days\":{", since} {printf "%s\"%s\":%d", (NR>1?",":""), $2, $1} END{print "}}"}' > "$OUT"
echo "wrote $OUT"
