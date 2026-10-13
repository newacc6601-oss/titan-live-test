"""Print the three largest files in samples/ with their sizes."""
from pathlib import Path

folder = Path(__file__).resolve().parent / "samples"
files = [p for p in folder.iterdir() if p.is_file()]
ranked = sorted(files, key=lambda p: p.stat().st_size, reverse=True)[:3]

for p in ranked:
    print(f"{p.name}  {p.stat().st_size} bytes")
