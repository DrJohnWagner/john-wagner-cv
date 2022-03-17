#! /bin/csh
foreach pdf ($HOME/Personal/Reprints/*.pdf)
	set png = `basename $pdf .pdf`
	sips -s format bmp $pdf --out $png.bmp --resampleHeightWidth 1032 800
end