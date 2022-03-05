const projects = [
    {
        title: "Artificial Intelligence in Diagnostic Ophthalmology",
        description:
            "Led a team of three software engineers working with a team of seven researchers to develop a prototype artificial analysis and machine learning based platform for digital diagnostic ophthalmology and explainable artificial intelligence. This system combined machine learning based analyses of patient records with deep learning based analyses of ophthalmic imaging, including fundus and optical coherence tomography imaging of the retina, and applied diagnostic criteria to estimate ophthalmic disease severity classification. My team also built a platform for showcasing all AI-based digital health projects in the lab.",
        skills: [
            "managed engineering team and all software engineering work and performed integration work with research team;",
            "worked extensively with designer on the entirety of the visual design and experience (sketch);",
            "designed and implemented back end services, APIs, database, tensorflow model integration, continuous integration and cloud deployment (python, Flask, MongoDB, tensorflow, Travis CI, IBM Cloud);",
            "performed extensive front end development (React, Nodejs, javascript, Docker, emotion/styled components, flow and more);",
            "created and implemented visualisations and analytics of all lab AI-based digital health projects (React and visualisation libraries and many bespoke visualisations); and",
            "reporting and presentations to management.",
        ],
    },
    {
        title: "Project Lygon: a Digital Platform for Lifecycle Management of Bank Guarantees",
        description:
            "Worked as front end software engineer within a team of six software engineers from IBM and ANZ Bank to build first-of-a-kind prototype blockchain (Hyperledger Fabric) based platform for streamlining the issuance and lifecycle management of bank guarantees. Upon successful completion of the prototype, worked as front end software engineer and tester within a team of approximately two dozen engineers on the full build out of the commercial platform, now available in three countries. Received IBM Research Division award for contribution to this project.",
        skills: [
            "front end development (React, Nodejs, javascript, Docker, emotion/styled components, flow and more);",
            "refactored and styled screens and user interface components for fluid layout and display on mobile devices;",
            "created visualisations of bank guarantee lifecycle processes and analytics (React and visualisation libraries); and",
            "performed testing of front end user interface and some testing of back end APIs (using Jira for issue tracking).",
        ],
    },
    {
        title: "Fair Resource Allocation and Scheduling in Global Transport",
        description:
            "Worked as client-facing Engineering Technical Lead of a team of a dozen IBM designers and engineers on three continents designing and building multi-language prototype blockchain (Hyperledger Fabric) based platform for streamlining fair resource allocation and scheduling of container transport between origin/destination and port.",
        skills: [
            "management of entire engineering technical team and all technical work, including UX/UI design, front end, back end, chaincode (Go), Hyperledger Fabric network and continuous integration (Travis CI);",
            "worked extensively with international design team on the entirety of the visual design and experience (Sketch);",
            "designed and implementated backend services and APIs including WeChat integration for mobile based interactions (Nodejs, koa);",
            "performed extensive front end development (React, Nodejs, javascript, Docker, emotion/styled components, flow and more);",
            "created and implemented visualisations and analytics of resource allocation and container state (React and visualisation libraries and many bespoke visualisations); and",
            "reporting and presentations to clients and management.",
        ],
    },
    {
        title: "Computational Studies of Cellulose and Cellulose Synthase Enzymes",
        description:
            "Leading a computational team working with an Australian Research Council Centre of Excellence in Plant Cell Walls at The University of Adelaide, The University of Melbourne and The University of Queensland, developed large-scale, high performance computational models of cellulose and cellulose microfibrils, as well as cellulose synthase and cellulose synthase like enzymes.",
        skills: [
            "analysis of experimental data;",
            "cellulose and enzyme structure modelling, structural refinement, homology modelling and umbrella sampling;",
            "all atom and coarse grained high performance molecular dynamics simulation (using NAMD and CHARMM) on BlueGene/Q supercomputers;",
            "scientific visualisation of cellulose and enzyme structures, dynamics and analyses (using VMD and tcl scripting); and",
            "scientific publication.",
        ],
    },
    // 	{
    // 		title: "Feedback and Crosstalk in TGF-β and IL-6 Pathways in Cancer",
    // 		description: "Colorectal cancer is the third most common cancer in the world and occurs following to an accumulation of specific genetic alterations, and TGF-B and IL-6 are among the signalling pathways that are typically dysregulated. We modelled and analysed the feedback in and crosstalk between these two signalling pathways to better understand their dysregulation in colorectal cancer.
    // developed mechanistic mathematical model of TGF-β receptor activation and TGF-β/SMAD signalling pathway, including negative feedback via SMAD7/Smurf and positive feedback via AZIN1;
    // • developed mechanistic mathematical model of IL-6 receptor activation and IL-6/JAK/STAT signalling pathway, including negative feedback via SOCS3;
    // • developed simplified model of TGF-β/IL-6 pathway crosstalk including including IL-6 mediated inhibition of TGF- β signalling vis STAT3/SMAD7.",
    // Key skills included:
    // • analysis of experimental data;
    // • parameter estimation, bifurcation analysis, time delay estimation, linear chain trick, rapid equilibrium assumption;
    // • construction of ordinary and delay differential equation based models of gene and protein regulatory networks;
    // • application of mathematical models to study cancer risk across classes (SNP309 status by sex) of individuals;
    // • simulation and optimisation (using MATLAB and Octave) and visualisation (MATLAB and Octave);
    // • scientific publication.
    // },
    // {
    // title: "Development of Next Generation Nanosensors and Nanofluidic Devices for Drug Screening",
    // description: "Co-leading a team of computational biologists, protein scientists and nanotechnology researchers, performed proof of concept development of a nanopore-based system for screening of ligand activation of a g protein coupled receptor. Our team:
    // • created experimental nanopores for measuring conductance changes during protein translocation;
    // • developed computational models for characterising nanopore geometry dependent conductance drops;
    // • performed experiments on g protein coupled receptors in the presence and absence of ligands;
    // • developed computational models for protein conformation specific conductance drops in nanopores during protein translocation; and
    // • created patent portfolio on single molecule translocation measurement in nanopores and nanofluidic devices.",
    // Key skills included:
    // • generation and analysis of experimental data;
    // • patch clamp measurements across nanopores;
    // • all atom and coarse grained high performance molecular dynamics simulation (using NAMD and CHARMM) on BlueGene/P and BlueGene/Q supercomputers;
    // • computational fluid dynamics modelling of fluid dynamics and conductances in open and particle/protein occupied nanopores;
    // • scientific visualisation and analysis of proteins and particles in nanopores (using VMD, tcl scripting and OpenFOAM);
    // • patenting and scientific publication.
    // },
    // {
    // title: "Computational Modelling of Proteins in Essential Pathways for Antibiotic Development",
    // description: "Lysine biosynthesis is essential in bacteria and is an identified target for antibiotics. In collaboration with Matthew Perugini’s lab at the Bio21 Institute at the University of Melbourne, we set out to characterise the bacterial and plant lysine biosynthesis pathway at the atomic level using molecular dynamics simulation. The overarching goal was to demonstrate the integration of high performance computing based protein modelling and simulation workflows into a wet lab/synchrotron based workflow for basic antibiotic research and development. In addition to co-leading this project with Matthew Perugini, a sample of my work included:
    // • wet lab based characterisation of ligand binding and protein allostery of dihydrodipicolonate synthase in four bacterial species using mass spectrometry, circular dichroism spectroscopy, analytical ultracentrifugation and enzyme kinetic assays;
    // • determination of protein crystal structures using X-ray crystallography, structural refinement and homology modelling;
    // • characterisation of protein dynamics, allostery, ligand binding, inhibitor binding, enzyme—substrate binding and metastable binding states using all atom and coarse grained molecular dynamics simulation, umbrella sampling, Markov state models and visualisation.",
    // Received IBM Research Division award for contribution to this project.
    // Key skills included:
    // • generation and analysis of experimental data;
    // • mass spectrometry, circular dichroism spectroscopy; analytical ultracentrifugation and enzyme kinetic assays;
    // • crystal structure determination, structural refinement and homology modelling;
    // • all atom and coarse grained high performance molecular dynamics simulation (using NAMD and CHARMM) on BlueGene/P and BlueGene/Q supercomputers;
    // • scientific visualisation of protein structures, dynamics and analyses (using VMD and tcl scripting);
    // • fine grained and group state Markov state modelling, transition path theory and hybrid k-centers k-medoids clustering;
    // • scientific publication.

    // }, {

    // title: "Mathematical Modelling of the Digital Response of p53 to DNA Damage and its Relation to Cancer Risk",
    // description: "The p53 tumour suppressor protein is the most altered gene involved in cancer, and is a key regulator of a range of processes involved in the prevention of cancer formation, including cell cycle arrest, DNA repair and apoptosis. Working with recently published data by Lahav et al., 2004 and Bakkenist and Kasten, 2003, I:
    // • performed an extensive literature review of p53 and its negative regulator, Mdm2, as well as DNA damage and repair, apoptosis and cell cycle mechanisms and pathways;
    // • developed a mechanistic, stochastic model of DNA damage and repair based upon the Bakkenist and Kasten, 2003 data that reproduced and helped interpret their experimental findings;
    // • developed a set of delay differential equation models of varying complexity of p53 and Mdm2 oscillations based upon known mechanisms described in the literature;
    // • coupled the DNA damage and repair model with the model of p53 and Mdm2 oscillations to yield a digital response to ionising radiation induced DNA damage, reproducing and interpreting the Lahav et al., 2004 data;
    // • integrated emerging SNP data to investigate the effects of genetic mutations on the digital p53 response, and proposed and tested the hypothesis that the effects of Mdm2 SNP309 G/T status on the digital p53 response could explain a clinical risk phenotype (i.e., the development of cancers at earlier age of onset in females); and
    // • derived and implemented a high performance computational model of tumour formation and growth.",
    // Received IBM Research Division award for contribution to this project.
    // Key skills included:
    // • analysis of experimental, clinical and SNP data;
    // • parameter estimation, bifurcation analysis, linear chain trick, differential equations of complex variables;
    // • construction of stochastic and delay differential equation based models of gene and protein regulatory networks;
    // • application of mathematical models to study cancer risk across classes (SNP309 status by sex) of individuals;
    // • simulation and optimisation (using C++, java, MATLAB and Octave) and visualisation (MATLAB and Octave);
    // • large-scale high performance computation (using C++) on BlueGene/L and BlueGene/P supercomputers; and
    // • scientific publication.

    // }, {

    // title: "Development of The Virtual Cell Modelling Environment",
    // description: "The Virtual Cell is a computational modelling framework and tool, designed for biologists and modellers, for “point-and-click” construction, simulation and analysis of spatial and nonspatial cellular physiology models incorporating experimental data. As a researcher and software engineer on this project, I:
    // • developed and implemented user interfaces for specifying cellular physiology models;
    // • developed and implemented finite element, finite volume and finite difference numerical methods for the simulation of both continuous and discrete reaction—diffusion models;
    // • developed and implemented user interface and back-end APIs and analytics for data and model analysis;
    // • designed and built a sixteen-node DEC Alpha Beowulf cluster for large-scale parallel and distributed computation of data and models;
    // • collaborated with a large, international team of scientists and software engineers on the development of the Systems Biology Markup Language, a free and open standard for the representation, communication and storage of computational models of biological processes.",
    // Key skills included:
    // • architecture design and software engineering in java, C and C++ and dozens of libraries and scripting languages;
    // • construction of simulation frameworks and codes for simulation of reaction—diffusion models;
    // • large-scale, high-performance scientific computing;
    // • scientific visualisation and data analysis; and
    // • scientific publication.

    // }, {

    // title: "Development of a Theory of Rapid Buffering of Calcium in Cells",
    // description: "Using recently published data by Allbritton et al, 1992 on calcium diffusion in Xenopus laevis oocytes:
    // • developed a complete spatiotemporal model for cellular calcium buffering in the presence of diffusion;
    // • used singular perturbation theory to derive a simplified “rapid buffering approximation” model valid in the limit of fast buffers;
    // • derived and validated expressions for effective and approximate diffusion coefficients;
    // • applied this model to explain completely the Allbritton et al, 1992 experiments;
    // • applied this theory to better understand experimental cellular calcium measurements using fluorescent dyes;
    // • demonstrated the validity of this theory in whole cell models of cellular calcium oscillations; and
    // • investigated the validity of this theory at short time and length scales, including near calcium channels.",
    // Key skills included:
    // • analysis of scientific data;
    // • construction of ordinary and partial differential equation based models;
    // • development and application of mathematical models to problems important in the life sciences;
    // • application of the theory to experimental cellular measurements;
    // • numerical analysis, simulation (using C, C++), and visualisation (using Visual C++ and libraries);
    // • singular perturbation, bifurcation and functional analysis; and
    // • scientific publication.

    // }, {

    // title: "Data Science and Precision Medicine Based Optimisation and Clinical Delivery of Haemodialysis Treatments",
    // description: "Using data we collected from patients in the UC Davis Medical Center haemodialysis clinic, constructed patient-specific mathematical models of urea dynamics during and between treatments to:
    // • analyse and model in a patient-specific manner the "rebound" in blood urea nitrogen levels that occurs following cessation of treatment;
    // • analyse and model in a patient-specific manner peripheral urea disequilibrium between the haemodialysis access arm and the opposite arm;
    // • analyse and model in a patient-specific manner the effects of temperature on peripheral urea disequilibrium; and
    // • constructed optimal, patient-specific haemodialysis treatment schedules that were used to inform subsequent clinical delivery of haemodialysis treatments.
    // This work led to the patient specific minimisation of the total time spent receiving haemodialysis treatments and the number of blood draws during and following treatment, two key patient and hospital metrics of haemodialysis delivery quality. Other outcomes included:
    // • delivery of optimal schedules for patient treatments in the haemodialysis clinic;
    // • advanced the scientific understanding of patient-specific rebound;
    // • advanced the scientific understanding of patient-specific peripheral urea disequilibrium between the haemodialysis access arm and the opposite arm, and the medical implications for blood urea nitrogen measurements in patients during haemodialysis;
    // • advanced the scientific understanding of the clinical impacts of blood rewarming during haemodialysis; and
    // • presented our findings in talks and at conferences and published our results in scientific journals.",
    // Key skills included:
    // • analysis of clinical data;
    // • construction of ordinary differential equation based compartmental models of urea dynamics and urea metabolism during and between haemodialysis treatments;
    // • personalisation of mathematical models to individual patients;
    // • numerical analysis, simulation (using C), optimisation (using C) and visualisation (Visual C++ and libraries); and
    // • scientific publication.

    // }
]

export default projects
