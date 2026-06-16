#!/usr/bin/env python3
"""HyperFocus Z0ne - Constellation Session Start Hook.

Writes a .focus_session_start marker and checks core site files exist.
Exits 0 on pass, 1 on hard failure.
"""

import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SESSION_FILE = ROOT / ".focus_session_start"


def main() -> int:
    now = datetime.now()
    print("\n[SESSION START] HyperFocus Z0ne -- Constellation")
    print("-" * 40)
    print("   Time    : " + now.strftime("%Y-%m-%d %H:%M:%S"))

    SESSION_FILE.write_text(now.isoformat())

    index_ok = (ROOT / "index.html").exists()
    js_ok = (ROOT / "app.js").exists()
    css_ok = (ROOT / "style.css").exists()

    print("   index.html: " + ("PASS found" if index_ok else "FAIL index.html missing"))
    print("   app.js    : " + ("PASS found" if js_ok else "WARN app.js missing"))
    print("   style.css : " + ("PASS found" if css_ok else "WARN style.css missing"))
    print()

    if not index_ok:
        print("FAIL  Session start FAILED -- index.html not found.\n")
        return 1

    print("PASS  Constellation session started. BROski forever! Let's build!\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
