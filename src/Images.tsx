interface Image {
    filename: string
    credit: string
    width?: string
}

const images = new Map<string, Image>()
images.set("UCDavis-Water", {
    filename: "UCDavis.png",
    credit: "Nikolai Gates Vetr, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons.",
})
images.set("Nixdorf", {
    filename: "Nixdorf.png",
    credit: "Johann H. Addicks, GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>, via Wikimedia Commons.",
})
images.set("UCHC", {
    filename: "UCHC.jpg",
    credit: "Sage Ross, GFDL 1.2 <http://www.gnu.org/licenses/old-licenses/fdl-1.2.html>, via Wikimedia Commons.",
})
images.set("Watson", {
    filename: "Watson.png",
    credit: "Simon Greig, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons.",
})
images.set("2012", {
    filename: "US8271414.png",
    credit: "",
})
images.set("2014", {
    filename: "US8835362.png",
    credit: "",
})
images.set("2015", {
    filename: "US9108582.png",
    credit: "",
})
images.set("2016", {
    filename: "US9424532.png",
    credit: "",
})
// images.set("2019", {
//     filename: "JP2015118698A.png",
//     credit: "",
// })
images.set("2019", {
    filename: "CN104778294A.png",
    credit: "",
})
images.set("Nanosensors", {
    filename: "Nanosensors.png",
    credit: "",
    width: "75%",
})
images.set("Antibiotics", {
    filename: "Antibiotics.png",
    credit: "",
    width: "80%",
})
images.set("Cancer", {
    filename: "Cancer.png",
    credit: "",
})
images.set("SBML", {
    filename: "SBML.png",
    credit: "",
})
images.set("Cellulose", {
    filename: "Cellulose.png",
    credit: "",
    width: "85%",
})
images.set("Miscellany", {
    filename: "Miscellany.png",
    credit: "",
    width: "80%",
})
images.set("Calcium", {
    filename: "Calcium.png",
    credit: "",
})
images.set("Fertilisation", {
    filename: "Fertilisation.png",
    credit: "",
})
images.set("HPC", {
    filename: "HPC.png",
    credit: "",
    width: "90%",
})
images.set("Machine Learning", {
    filename: "Machine Learning.png",
    credit: "",
})

export default images
