#!/usr/bin/env python3
"""HyperFocus Z0ne - Constellation Env Guard.

Static site -- no required env vars.
Confirms we are in the correct repo root and passes.
Always exits 0.
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    print("\n[ENV GUARD] HyperFocus Z0ne -- Constellation")
    print("-" * 40)
    print("   Static site -- no required env vars.")
    print()

    marker = ROOT / "index.html"
    if not marker.exists():
        print("WARN  index.html not found -- may be wrong directory")
    else:
        print("   PASS  repo root confirmed (" + marker.name + " present)")

    print()
    print("PASS  Env guard passed (static site -- no secrets required).\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
