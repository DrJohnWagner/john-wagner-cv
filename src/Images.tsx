interface Image {
    filename: string
    caption: string
    credit: string
    width?: string
}

const images = new Map<string, Image>()
images.set("UCDavis-Water", {
    filename: "UCDavis.png",
    caption: "",
    credit: "Nikolai Gates Vetr, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons.",
})
images.set("Nixdorf", {
    filename: "Nixdorf.png",
    caption:
        "I spent the summer of 1988 working at Nixdorf Computer AG in Paderborn, West Germany as a full-stack software engineer under the supervision of Wolfgang Kögler, who subsequently founded Ordix AG, and Andreas Sonntag, who later joined IBM.",
    credit: "Johann H. Addicks, GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>, via Wikimedia Commons.",
})
images.set("UCHC", {
    filename: "UCHC.jpg",
    caption:
        "I was an NIH NRSA Postdoctoral Fellow working with Dr. Les Loew at the National Resource for Cellular Analysis and Modeling in the Department of Physiology at the University of Connecticut Health Center in Farmnington, Connecticut. I worked on Ca2+ and inositol trisphophate signalling in Xenopus laevis eggs and was a full-stack software engineer on The Virtual Cell project team.",
    credit: "Sage Ross, GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>, via Wikimedia Commons.",
})
images.set("Watson", {
    filename: "Watson.png",
    caption:
        "I joined IBM Research in May, 2004 working under Dr. Gustavo Stolovitzky at the IBM T.J. Watson Research Center in Yorktown Heights, New York. I worked on mathematical models of p53 signalling and tumorigenesis, as well as large-scale, ultra-scalable neural tissue simulation with Dr. James Kozloski. During the last 18 months I helped land IBM Research's partnership with the Victorian Life Sciences Computation Initiative at the University of Melbourne, which led me to move to Australia to lead the IBM Research Collaboratory for Life Sciences-Melbourne.",
    credit: "Simon Greig, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons.",
})
images.set("2012", {
    filename: "US8271414.png",
    caption: "",
    credit: "",
})
images.set("2014", {
    filename: "US8835362.png",
    caption: "",
    credit: "",
})
images.set("2015", {
    filename: "US9108582.png",
    caption: "",
    credit: "",
})
images.set("2016", {
    filename: "US9424532.png",
    caption: "",
    credit: "",
})
// images.set("2019", {
//     filename: "JP2015118698A.png",
//    caption: "",
//     credit: "",
// })
images.set("2019", {
    filename: "CN104778294A.png",
    caption: "",
    credit: "",
})
images.set("Nanosensors", {
    filename: "Nanosensors.png",
    caption: "",
    credit: "",
    width: "75%",
})
images.set("Antibiotics", {
    filename: "Antibiotics.png",
    caption: "",
    credit: "",
    width: "80%",
})
images.set("Cancer", {
    filename: "Cancer.png",
    caption: "",
    credit: "",
})
images.set("SBML", {
    filename: "SBML.png",
    caption: "",
    credit: "",
})
images.set("Cellulose", {
    filename: "Cellulose.png",
    caption: "",
    credit: "",
    width: "85%",
})
images.set("Miscellany", {
    filename: "Miscellany.png",
    caption: "",
    credit: "",
    width: "80%",
})
images.set("Calcium", {
    filename: "Calcium.png",
    caption: "",
    credit: "",
})
images.set("Fertilisation", {
    filename: "Fertilisation.png",
    caption: "",
    credit: "",
})
images.set("HPC", {
    filename: "HPC.png",
    caption: "",
    credit: "",
    width: "90%",
})
images.set("Machine Learning", {
    filename: "Machine Learning.png",
    caption: "",
    credit: "",
})
images.set("Joel Keizer", {
    filename: "JoelKeizer-Square.png",
    caption:
        "I did my MS and PhD with Dr. Joel Keizer, a physical chemist and mathematical biologist who worked on statistical thermodynamics of nonequilibrium processes, insulin secretion and cellular calcium regulation.",
    credit: "",
})

export default images
