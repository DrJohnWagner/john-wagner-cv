#! /bin/csh
foreach pdf (DE*.pdf GB*.pdf)
	set png = `basename $pdf .pdf`
	sips -s format png $png.pdf --out $png.png --resampleHeightWidth 1032 800
	sips -s format png $png.png --out thumbnails/$png.png --resampleHeightWidth 387 300
end