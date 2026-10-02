#!/bin/bash
# Watches this repo and automatically commits + pushes any changes to GitHub.
REPO="/Users/santopanella/Desktop/Claude Projekte/haarstudio-galerie-da-lucia"
LOG="$REPO/.auto-sync.log"

cd "$REPO" || exit 1

fswatch -o -l 8 --exclude '\.git/' --exclude '\.auto-sync\.log' "$REPO" | while read -r _; do
  cd "$REPO" || continue
  if [[ -n "$(git status --porcelain)" ]]; then
    {
      echo "---- $(date '+%Y-%m-%d %H:%M:%S') ----"
      git add -A
      git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"
      git push
    } >> "$LOG" 2>&1
  fi
done
