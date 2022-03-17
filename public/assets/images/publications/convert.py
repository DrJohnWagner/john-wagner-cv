import fitz
from os import listdir
from os.path import isfile, join, basename, splitext
import glob

pdfs = glob.glob("*.pdf")
# pdfs = [f for f in listdir(".") if isfile(join(mypath, f))]
for pdf in pdfs:
	base = splitext(basename(pdf))[0]
	doc = fitz.open(base + ".pdf")
	page = doc.loadPage(0)  # number of page
	zoom = 4
	mat = fitz.Matrix(zoom, zoom)
	pix = page.get_pixmap(matrix = mat)
	# pix = page.get_pixmap()
	pix.save(base + ".png")