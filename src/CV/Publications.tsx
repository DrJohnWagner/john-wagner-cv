const publications = [
    {
        topics: ["Machine Learning", "Genomics"],
        authors: "J. Dhaliwal and J. Wagner",
        title: "Feature extraction and selection by STR enrichment in machine learning for gene prediction",
        journal: "Pattern Recognition. Under review.",
        year: 2022,
    },
    {
        topics: ["Machine Learning", "Genomics"],
        authors: "J. Dhaliwal and J. Wagner",
        title: "A novel feature extraction method based on highly expressed SNPs for tissue-specific gene prediction",
        journal: "Journal of Big Data, 8(1): 1—13, 2021. DOI:10.1186/s40537-021-00497-9. (2021 Impact Factor: 11.092)",
        year: 2021,
    },
    {
        topics: ["Machine Learning"],
        authors: "N. Alam, K.-N. Tran, S.A. Chen, J. Wagner, J. Andres and M. Mohania",
        title: "Towards a predictive analytics evaluation platform",
        journal: "ECML-PKDD 2019. arXiv:1910.14258.",
        year: 2019,
    },
    {
        topics: ["SBML"],
        authors: "S.M. Keating et al. (52 authors including J. Wagner)",
        title: "SBML Level 3: an extensible format for the exchange and reuse of biological models",
        journal: "Molecular Systems Biology 16: e9110, 2020. DOI:10.15252/msb.20199110. (2020 Impact Factor: 11.429)",
        year: 2020,
    },
    {
        topics: ["SBML"],
        authors: "M. Hucka et al. (43 authors, including J. Wagner)",
        title: "The Systems Biology Markup Language (SBML): a medium for representation and exchange of biochemical network models",
        journal: "Bioinformatics, 19(4):524—531, 2003. DOI: 10.1093/bioinformatics/btg015. (2003 Impact Factor: 6.701)",
        year: 2003,
    },
    {
        topics: ["Cancer"],
        authors: "S. Khatibi, J. Babon, J. Wagner, J.H. Manton, C.W. Tan., J. Zhu, S. Wormald and A.W. Burgess",
        title: "TGF-β and IL-6 family signalling crosstalk: an integrated model",
        journal:
            "Growth Factors, 35(2—3):100—124, 2017. DOI:10.1080/08977194.2017.1363746. (2017 Impact Factor: 1.800)",
        year: 2017,
    },
    {
        topics: ["Cancer"],
        authors: "S. Khatibi, H.-J. Zhu, J. Wagner, C.W. Tan, J.H. Manton and A.W. Burgess",
        title: "Mathematical model of TGF-β signalling: feedback coupling is consistent with signal switching",
        journal: "BMC Syst Biol 11:48, 2017. DOI:10.1186/s12918-017-0421-5. (2017 Impact Factor: 2.050)",
        year: 2017,
    },
    {
        topics: ["Cancer"],
        authors: "W. Hu, Z. Feng, L. Ma, J. Wagner, J.J. Rice, G. Stolovitzky, and A.J. Levine",
        title: "A single nucleotide polymorphism in the mdm2 gene disrupts the oscillation of p53 and mdm2 levels in cells",
        journal:
            "Cancer Research, 67(6):2757—2765, 2007. DOI: 10.1158/0008-5472.CAN-06-2656. (2007 Impact Factor: 7.672)",
        year: 2007,
    },
    {
        topics: ["Cancer"],
        authors: "J. Wagner, L. Ma, J.J. Rice, W. Hu, A. Levine and G.A. Stolovitzky",
        title: "p53–Mdm2 loop is controlled by a balance of its feedback strength and effective dampening using ATM and delayed feedback",
        journal:
            "IEE Proceedings Systems Biology, 152(3):109—118, 2005. https://doi.org/10.1049/ip-syb:20050025. (2005 Impact Factor: 1.955)",
        year: 2005,
    },
    {
        topics: ["Cancer"],
        authors: "L. Ma, J. Wagner, J.J. Rice, A. Levine, W. Hu and G. Stolovitzky",
        title: "A plausible model for the digital response of p53 to DNA damage",
        journal:
            "Proceedings of the National Academy of Sciences, 102(40): 14266—14271, 2005. DOI: 10.1073/pnas.0501352102. (2005 Impact Factor: 10.231)",
        year: 2005,
    },
    {
        topics: ["Antibiotics"],
        authors: "S.E. Gordon, D.K. Weber, M.T. Downton, J. Wagner and M.A. Perugini",
        title: "Dynamic Modelling Reveals ‘Hotspots’ on the Pathway to Enzyme-Substrate Complex Formation",
        journal: "PLoS Computational Biology, 2016. DOI:10.1371/journal.pcbi.1004811. (2014 Impact Factor: 4.620)",
        year: 2016,
    },
    {
        topics: ["Antibiotics"],
        authors:
            "T.P. Soares da Costa, J.B. Christensen, S. Desbois, S.E. Gordon, R. Gupta, C.J. Hogan, T.G. Nelson, M.T. Downton, C.K. Ghardi, B.M. Abbott, J. Wagner, S. Panjikar and M.A. Perugini",
        title: "Quaternary structure analyses of an essential oligomeric enzyme",
        journal:
            "Methods in Enzymology, 562, 205—223, 2015. DOI:10.1016/bs.mie.2015.06.020. (2012 Impact Factor: 2.002)",
        year: 2015,
    },
    {
        topics: ["Antibiotics"],
        authors: "L. Hor, R.C.J. Dobson, M.T. Downton, J. Wagner, C.A. Hutton and M.A. Perugini",
        title: "Dimerization of Bacterial Diaminopimelate Epimerase is Essential for Catalysis",
        journal:
            "Journal of Biological Chemistry, 288(13):9238—9248, 2013. DOI: 10.1074/jbc.M113.450148 (2013 Impact Factor: 4.600)",
        year: 2013,
    },
    {
        topics: ["Antibiotics"],
        authors:
            "S.C. Atkinson, C. Dogovski, M.T. Downton, P.E. Czabotar, R.C.J. Dobson, J.A. Gerrard, J. Wagner and M.A. Perugini",
        title: "Structural, kinetic and computational investigation of Vitis vinifera DHDPS reveals new insight into the mechanism of lysine-mediated allosteric inhibition",
        journal:
            "Plant Molecular Biology, 81(4-5)431—446, 2013. DOI: 10.1007/s11103-013-0014-7. (2012 Impact Factor; 4.072)",
        year: 2013,
    },
    {
        topics: ["Antibiotics"],
        authors:
            "S.C. Atkinson, C. Dogovski, M.T. Downton, F.G. Pearce, J.A. Gerrard, R.C.J. Dobson, J. Wagner and M.A. Perugini",
        title: "Crystal, solution and in silico structural studies of dihydrodipicolinate synthase from the common grapevine",
        journal: "PLoS ONE, 7(6):e38318, 2012. DOI: 10.1371/journal.pone.0038318. (2012 Impact Factor: 3.730)",
        year: 2012,
    },
    {
        topics: ["Antibiotics"],
        authors:
            "C. Dogovski, S.C. Atkinson, S.R. Dommaraju, M. Downton, L. Hor, S. Moore, J.J. Paxman, M.G. Peverelli, T.W. Qiu, M. Reumann, T. Siddiqui, N.L. Taylor, J. Wagner, J.M. Wubben and M.A. Perugini",
        title: "Enzymology of Bacterial Lysine Biosynthesis",
        journal: "In Biochemistry. ISBN 979-953-307-484-8, InTech, 2012.",
        year: 2012,
    },
    {
        topics: ["Nanosensors"],
        authors:
            "S. Harrer, S. Kim, C. Schieber, S. Kannam, N. Gunn, S. Moore, D. Scott, R. Bathgate, S. Skafidas and J. Wagner",
        title: "Label-free screening of single biomolecules through resistive pulse sensing technology for precision medicine applications",
        journal: "Nanotechnology, 26 182502, 2015. DOI:10.1088/0957-4484/26/18/182502. (2013 Impact Factor: 3.672)",
        year: 2015,
    },
    {
        topics: ["Nanosensors"],
        authors: "S.C Kim, S.K. Kannam, S. Harrer, S. Moore, M.T. Downton and J. Wagner",
        title: "Geometry dependence of conductance drop in nanopore in the presence of a particle",
        journal: "Physical Review E, 89, 042702, 2014. DOI: 10.1103/PhysRevE.89.042702. (2014 Impact Factor: 2.326)",
        year: 2014,
    },
    {
        topics: ["Nanosensors"],
        authors: "S.K. Kannam, S.C. Kim, P.R. Rogers, N. Gunn, J. Wagner, S. Harrer and M.T. Downton",
        title: "Sensing of protein molecules through nanopores: A molecular dynamics study",
        journal:
            "Nanotechnology 25 155502, 2014 (7pp). DOI: 10.1088/0957-4484/25/15/155502. (2014 Impact Factor: 3.672)",
        year: 2014,
    },
    {
        topics: ["Nanosensors"],
        authors:
            "S.K. Kannam, M.T. Downton, N. Gunn, S.C. Kim, P.R. Rogers, C. Schieber, J.S. Baldauf, J.M. Wagner, D. Scott, R. Bathgate, S. Skafidas and S. Harrer",
        title: "Nanosensors for next generation drug screening",
        journal:
            "Proceedings of SPIE 8923, Micro/Nano Materials, Devices, and Systems, 89230I (December 7, 2013). DOI: 10.1117/12.2033737.",
        year: 2013,
    },
    {
        topics: ["Cellulose", "HPC"],
        authors: "D.P. Oehme, M.T. Downton, M.S. Doblin, J. Wagner, M.J. Gidley and A. Bacic",
        title: "Gaining insight into Macrofibril Formation by Simulating Cellulose Microfibril Adsorption",
        journal: "Cellulose, 2015, 22(6):3501-3520. DOI:10.1007/s10570-015-0778-9. (2014 Impact Factor: 3.573)",
        year: 2015,
    },
    {
        topics: ["Cellulose", "HPC"],
        authors:
            "J.G. Schwerdt, A.J. Harvey, N.J. Shirley, R.A. Burton, F. Wright, M. Schreiber, C. Halpin, J. Zimmer, D. Oehme, J.M. Wagner, D.F. Marshall, R. Waugh and G.B. Fincher",
        title: "Evolutionary Dynamics of the Cellulose Synthase Gene Superfamily in Grasses",
        journal:
            "Plant Physiology, published online before print May 2015 pp.00140.2015. DOI:10.1104/pp.15.00140. (2014 Impact Factor: 7.394)",
        year: 2015,
    },
    {
        topics: ["Cellulose", "HPC"],
        authors: "D.P. Oehme, M.T. Downton, M.S. Doblin, J. Wagner, M.J. Gidley and A. Bacic",
        title: "Novel aspects of the structure and dynamics of elementary Iβ cellulose microfibrils revealed by computational simulations",
        journal: "Plant Physiology, 168(1):3—17, 2015. DOI: 10.1104/pp.114.254664 (2014 Impact Factor: 7.394)",
        year: 2015,
    },
    {
        topics: ["Fertilisation"],
        authors: "C.P. Fall, J. Wagner, L.M. Loew and R.L. Nuccitelli",
        title: "Cortically restricted production of IP3 leads to propagation of the fertilization Ca2+ wave along the cell surface in a model of the Xenopus egg",
        journal:
            "Journal of Theoretical Biology, 231(4):487—496, 2004. https://doi.org/10.1016/j.jtbi.2004.06.019. (2012 Impact Factor: 1.683)",
        year: 2004,
    },
    {
        topics: ["Fertilisation"],
        authors:
            "J. Wagner, C.P. Fall, F. Hong, C.E. Sims, N.L. Allbritton, R.A. Fontanilla, I.I. Moraru, L.M. Loew, and R. Nuccitelli",
        title: "A wave of IP3 production accompanies the fertilization Ca2+ wave in the egg of the frog, Xenopus laevis: theoretical and experimental support",
        journal:
            "Cell Calcium, 35:433—447, 2004. https://doi.org/10.1016/j.ceca.2003.10.009. (2004 Impact Factor: 5.186)",
        year: 2004,
    },
    {
        topics: ["Fertilisation"],
        authors: "J. Wagner, Y.-X. Li, J. Pearson and J. Keizer",
        title: "Simulation of the fertilization Ca2+ wave in Xenopus laevis eggs",
        journal:
            "Biophysical Journal, 75:2088—2097, 1998. https://doi.org/10.1016/s0006-3495(98)77651-9. (1998 Impact Factor: 4.524)",
        year: 1998,
    },
    {
        topics: ["Calcium"],
        authors: "C. Fall, J. Wagner, R. Nuccitelli and J. Pearson",
        title: "Progress in Ca2+ dynamics: Small temporal and spatial scales drive macroscopic dynamics",
        journal:
            "Cell Calcium, 27(6):363—364, 2000. https://doi.org/10.1054/ceca.2000.0134. (2000 Impact Factor: 3.711)",
        year: 2000,
    },
    {
        topics: ["Calcium"],
        authors: "G.D. Smith, J. Wagner and J. Keizer",
        title: "Validity of the rapid buffering approximation near a point source of calcium ions",
        journal:
            "Biophysical Journal, 70:2527—2539, 1996. DOI: 10.1016/S0006-3495(96)79824-7. (1996 Impact Factor: 4.713)",
        year: 1996,
    },
    {
        topics: ["Calcium"],
        authors: "J. Wagner and J. Keizer",
        title: "Effects of rapid buffers on Ca2+ diffusion and Ca2+ oscillations",
        journal:
            "Biophysical Journal, 67:447—456, 1994. DOI: 10.1016/S0006-3495(94)80500-4. (1994 Impact Factor: 4.427)",
        year: 1994,
    },
    {
        topics: ["Miscellany"],
        authors: "D.K. Weber, S. Yao, N. Rojko, G. Anderluh, T.P. Lybrand, M.T. Downton, J. Wagner and F. Separovic",
        title: "Characterization of the lipid-binding site of equinatoxin II in micelles by NMR and molecular dynamics simulation",
        journal:
            "Biophysical Journal, 108(8): 1987—1996, 2015. DOI: 10.1016/j.bpj.2015.03.024. (2014 Impact Factor: 3.832)",
        year: 2015,
    },
    {
        topics: ["Genomics", "HPC"],
        authors:
            "B. Goudey, M. Abedini, J.L. Hopper, M. Inouye, E. Makalic, D.F. Schmidt, J. Wagner, Z. Zhou, J. Zobel and M. Reumann",
        title: "High performance computing enabling exhaustive analysis of higher order single nucleotide polymorphism interaction in Genome Wide Association Studies",
        journal: "Health Information Science and Systems 2015, 3:S3. DOI:10.1186/2047-2501-3-S1-S3.",
        year: 2015,
    },
    {
        topics: ["Genomics", "HPC"],
        authors:
            "M. Reumann, E. Makalic, B.W. Goudey, M. Inouye, A. Bickerstaffe, M. Bui, D.J. Park, M.K. Kapuscinski, D.F. Schmidt, Z. Zhou, G. Qian, J. Zobel, J. Wagner and J.L. Hopper",
        title: "Supercomputing enabling exhaustive statistical analysis of genome wide association study data: preliminary results",
        journal: "34th Annual International IEEE EMBS Conference, 2012. DOI:10.1109/EMBC.2012.6346166.",
        year: 2012,
    },
    {
        topics: ["HPC"],
        authors: "J. Kozloski and J. Wagner",
        title: "An ultrascalable solution to large-scale neural tissue simulation",
        journal: "Frontiers in Neuroinformatics, 5:15, 2011. DOI: 10.3389/fninf.2011.00015.",
        year: 2011,
    },
    {
        topics: ["Cancer", "HPC"],
        authors: "J. Wagner and K. Jordan",
        title: "Utilizing Parallel Processing in Computational Biology Applications",
        journal:
            "In High performance computing for high-throughput image reconstruction and analysis, A.R. Rao and G. Cecchi, eds. Artech House, 2009.",
        year: 2009,
    },
    {
        topics: ["Miscellany"],
        authors: "Ma’ayan, G.A. Cecchi, J. Wagner, A.R. Rao, R. Iyengar, G. Stolovitzky",
        title: "Ordered cyclic motifs contribute to dynamic stability in biological and engineered networks",
        journal:
            "Proceedings of the National Academy of Sciences, 105(49): 19234—19239, 2008. https://doi.org/10.1073/pnas.0805344105. (2008 Impact Factor: 9.380)",
        year: 2008,
    },
    {
        topics: ["Miscellany"],
        authors: "J. Wagner and G. Stolovitzky",
        title: "Stability and time-delay modeling of negative feedback loops",
        journal: "Proceedings of the IEEE, 96(8):1398—1410, 2008. (2011 Impact Factor: 4.613)",
        year: 2008,
    },
    {
        topics: ["Miscellany"],
        authors: "Ma’ayan, G.A. Cecchi, J. Wagner, A.R. Rao, A. Lipshtat, R. Iyengar, G. Stolovitzky",
        title: "Sequence A117747",
        journal: "The On-Line Encyclopedia of Integer Sequences, April 28, 2006. https://oeis.org/A117747.",
        year: 2006,
    },
    {
        topics: ["Miscellany"],
        authors: "C.P. Fall, E.S. Marland, J.M. Wagner and J. J. Tyson (Editors)",
        title: "Computational Cell Biology",
        journal: "Springer-Verlag, New York, 2002.",
        year: 2002,
    },
    {
        topics: ["Miscellany"],
        authors: "J.C. Schaff, B.M. Slepchenko, Y.-S. Choi, J. Wagner, D. Resasco and L.M. Loew",
        title: "Analysis of non-linear dynamics on arbitrary geometries with the Virtual Cell",
        journal: "Chaos, 11(1):115—131, 2001. https://doi.org/10.1063/1.1350404. (2001 Impact Factor: 1.935)",
        year: 2001,
    },
    {
        topics: ["Miscellany"],
        authors: "J. Keizer, R. Fox, and J. Wagner",
        title: "On the amplification of molecular fluctuations for nonstationary systems: hydrodynamic fluctuations for the Lorenz model",
        journal: "Physics Letters A, 175:17—22, 1993. (1993 Impact Factor: 1.149)",
        year: 1993,
    },
    {
        topics: ["Miscellany"],
        authors: "T.A. Depner, S. Rizwan, A.Y. Cheer, J.M. Wagner and L.A. Eder",
        title: "High venous urea concentrations in the opposite arm: a consequence of hemodialysis-induced compartment disequilibrium",
        journal: "ASAIO Journal, 37(3):M141-3, 1991. (2012 Impact Factor: 1.491)",
        year: 1991,
    },
]

export default publications
