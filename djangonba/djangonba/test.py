import os
from pathlib import Path
BASE_DIR = Path(os.path.dirname((os.path.abspath(__file__)))).parents[1]
print(BASE_DIR)
