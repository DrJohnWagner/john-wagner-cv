#! /bin/csh
foreach png (*.png)
	# set png = `basename $pdf .pdf`
	# sips -s format bmp $png.pdf --out $png.bmp --resampleHeightWidth 1032 800
	sips -s format png $png --out thumbnails/$png --resampleHeightWidth 387 300
end