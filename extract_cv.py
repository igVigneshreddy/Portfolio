import sys
try:
    import pypdf
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "--quiet"])
    import pypdf

try:
    reader = pypdf.PdfReader("c:/Users/vigne/OneDrive/Desktop/portfolio/karnavignesh_cv_final.pdf")
    for i, page in enumerate(reader.pages):
        print(f"--- PAGE {i+1} ---")
        print(page.extract_text())
except Exception as e:
    print("Error:", e)
