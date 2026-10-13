"""Write 15 text files of random length into samples/."""
import random
from pathlib import Path

OUT = Path(__file__).resolve().parent / "samples"
OUT.mkdir(exist_ok=True)

random.seed()
for i in range(1, 16):
    length = random.randint(40, 4000)
    text = "".join(random.choice("abcdefghijklmnopqrstuvwxyz \n") for _ in range(length))
    (OUT / f"sample_{i:02d}.txt").write_text(text, encoding="utf-8")

print(f"Wrote 15 files in {OUT}")
