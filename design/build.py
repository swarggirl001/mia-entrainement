"""Assemble a design mock-up into one HTML page: inlines Kali (kali.js) and the Cikutra font.
Usage: python3 design/build.py accueil   (or: kali)  ->  design/<name>.html"""
import base64, os, re, sys
D = os.path.dirname(os.path.abspath(__file__))
name = sys.argv[1]
s = open(f"{D}/{name}.src.html").read()
k = open(f"{D}/kali.js").read()
s = s.replace("@KALI_CSS@", re.search(r"const KALI_CSS = `(.*?)`;", k, re.S).group(1)).replace("@KALI_JS@", k)
font = lambda f: base64.b64encode(open(f"{D}/fonts/{f}", "rb").read()).decode()
s = s.replace("@@BLACK@@", font("GLF-Cikutra-Black.otf")).replace("@@BOLD@@", font("GLF-Cikutra-Bold.otf"))
open(f"{D}/{name}.html", "w").write(s)
print(f"design/{name}.html")
