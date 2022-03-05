const patents = [
    {
        label: "2021",
        title: "Predictive warning system. K.-N.D. Tran, J.A. Moros Ortiz, T.M. Lynar and J. Wagner. Issued by USPTO as US11195402 on December 7, 2021",
    },
    {
        label: "2021",
        title: "System, method and computer program product for characterizing object status and determining a maintenance schedule. A. Bojovschi, L.I. Rusu and J.M. Wagner. Issued by USPTO as US11195132 on December 7, 2021.",
    },
    {
        label: "2021",
        title: "System and method to measure, analyze, and model pulmonary function and disease utilizing temporal, spatial, and contextual data. M.C. Hanpton, T.M. Lynar, S. Pandey and J.M. Wagner. Issued by USPTO as US11141102 on October 12, 2021.",
    },
    {
        label: "2021",
        title: "Location specific identity verification system. M.C. Hampton, T.M. Lynar, J.M. Wagner and S. von Cavallar. Issued by USPTO as US11074351 on July 27, 2021.",
    },
    {
        label: "2021",
        title: "Driving state within a driving environment that includes autonomous and semi-autonomous vehicles. J. Andres, T.M. Lynar and J. Wagner. Issued by USPTO as US11021171 on June 1, 2021.",
    },
    {
        label: "2021",
        title: "Dynamically altering presentations to maintain or increase viewer attention. S. von Cavallar, T.M. Lynar and J.M. Wagner. Issued by USPTO as US10979472 on April 13, 2021.",
    },
    {
        label: "2021",
        title: "Personalized particulate matter exposure management using fine-grained weather modeling and optimal control theory. T.M. Lynar, S.M. Moore, M.E. Roberts, J.M. Wagner and S. Zhuk. Issued by USPTO as US10915601 on February 9, 2021.",
    },
    {
        label: "2021",
        title: "Method and apparatus for intercollaboration of cognitive models. T. Lynar, G. Slvakumar and J. Wagner. Issued by USPTO as US10885445 on January 5, 2021.",
    },
    {
        label: "2020",
        title: "System, method and computer program product for reality augmenting towards a predefined object. S. von Cavallar, T.M. Lynar, J.A.M. Ortiz and J.M. Wagner. Issued by USPTO as US10789604 on September 29, 2020.",
    },
    {
        label: "2020",
        title: "Optimizing product placement in a media. T. Lynar, S. von Cavallar and J. Wagner. Issued by USPTO as US10785546 on September 22, 2020.",
    },
    {
        label: "2020",
        title: "Location determination using device coordination. F. Jalali, M. Mirmomeni, S. Pervin and J.M. Wagner. Issued by USPTO as US10764720 on September 1, 2020.",
    },
    {
        label: "2020",
        title: "Predictive alerts for individual risk of injury with ameliorative actions. R. Garnavi, J.R. Kozloski, T.M. Lynar and J.M. Wagner. Issued by USPTO as US10762460 on September 1, 2020.",
    },
    {
        label: "2020",
        title: "Risk detection and peer corrective assistance for risk mitigation within a work environment. R. Garnavi, J.R. Kozloski, T. Lynar and J. Wagner. Issued by USPTO as US10762459 on September 1, 2020.",
    },
    {
        label: "2020",
        title: "Work schedule creation based on predicted and detected temporal and event based individual risk to maintain cumulative workplace risk below a threshold. H. Anjomshoa, J.R. Kozloski, T. Lynar and J. Wagner. Issued by USPTO as US10755211 on August 25, 2020.",
    },
    {
        label: "2020",
        title: "Display control system, method, recording medium and display apparatus network. S. von Cavallar, T.M. Lynar, J.A.M. Ortiz and J.M. Wagner. Issued by USPTO as US10692112 on June 23, 2020.",
    },
    {
        label: "2020",
        title: "Solar irradiation modeling and forecasting using community based terrestrial sky imaging. M. Abedini, R. Garnavi, T.M. Lynar, C.I.E. Mesiku and J.M. Wagner. Issued by USPTO as US10692013 on June 23, 2020.",
    },
    {
        label: "2020",
        title: "Automated aquaculture pen location. R.I. Hickson, T.M. Lynar, O.J. Smith, A. Swan and J.M. Wagner. Issued by USPTO as US10653120 on May 19, 2020.",
    },
    {
        label: "2020",
        title: "Automated aquaculture pen location. R.I. Hickson, T.M. Lynar, O.J. Smith, A. Swan and J.M. Wagner. Issued by USPTO as US10645911 on May 12, 2020.",
    },
    {
        label: "2020",
        title: "Predicting harmful chemical exposures and implementing corrective actions prior to overexposure. A.H.E. Eberbach, J.R. Kozloski, T.M. Lynar and J.M. Wagner. Issued by USPTOO on May 5, 2020.",
    },
    {
        label: "2020",
        title: "Attendance verification. J.K. Dhaliwahl, T.M. Lynar and J.M. Wagner. Issued by USPTO as US10614479 on April 7, 2020.",
    },
    {
        label: "2020",
        title: "Data-centric predictive container migration based on cognitive modelling. T.M. Lynar, S. Pandey, G. Sivakumar and J. Wagner. Issued by USPTO as US10601679 on March 24, 2020.",
    },
    {
        label: "2020",
        title: "Location determination using device coordination. F. Jalali, M. Mirmomeni, S. Pervin and J.M. Wagner. Issued by USPTO as US10542385 on January 21, 2020.",
    },
    {
        label: "2019",
        title: "Mining social media for ultraviolet light exposure analysis. R. Garnavi, T.M. Lynar, S. Pandey, Z. Wang and J.M. Wagner. Issued by USPTO as US10517524 on December 31, 2019.",
    },
    {
        label: "2019",
        title: "A.K. Baughman, J.R. Kozloski, T.M. Lynar, S. Pandey and J.M. Wagner. Discovering cognition bias toward data presentation styles through file system analysis. Issued by USPTO as US10417568 on September 17, 2019.",
    },
    {
        label: "2019",
        title: "T. Lynar, O.J. Smith and J. Wagner. 管理翱翔飞行器的飞行路线. Issued by CNPTO as CN104778294 on July 11, 2019.",
    },
    {
        label: "2019",
        title: "T.M. Lynar, O.J. Smith and J.M. Wagner. Managing flight paths of a soaring aircraft with crowd sourcing. Issued by USPTO as US10319241 on June 11, 2019.",
    },
    {
        label: "2019",
        title: "N. Gunn, J.M. Comeras, P. Rogers and J. Wagner. ナノポア構造体、及びナノポア構造体内コーティグ を形成する方法. Issued by JPPTO as JP6505093 on April 4, 2019.",
    },
    {
        label: "2019",
        title: "R. Garnavi, T.M. Lynar, S. Pandey, Z. Wang and J.M. Wagner. Mining social media for ultraviolet light exposure analysis. Issued by USPTO as US10265011 on April 23, 2019.",
    },
    {
        label: "2019",
        title: "M.C. Hampton, T.M. Lynar, S. Pandey and J.M. Wagner. System and method to measure, analyze, and model pulmonary function and disease utilizing temporal, spatial, and contextual data. Issued by USPTO as US10201307 on February 12, 2019.",
    },
    {
        label: "2018",
        title: "A.K. Baughman, J.R. Kozloski, T.M. Lynar, S. Pandey and J.M. Wagner. Cognitive bias determination and modeling. Issued by USPTO as US10109214 on October 23, 2018.",
    },
    {
        label: "2018",
        title: "N. Gunn, J.M. Comeras, P. Rogers and J. Wagner. 使用二硫键以形成用于纳米流体设备的可逆的和可重 复使用的涂层. Issued by CNPTO as CN105636709 on September 24, 2018.",
    },
    {
        label: "2018",
        title: "A.K. Baughman, J.R. Kozloski, T.M. Lynar, S. Pandey and J.M. Wagner. Prediction and optimized prevention of bullying and other counterproductive interactions in live and virtual meeting contexts. Issued by USPTO as US10067935 on September 4, 2018.",
    },
    {
        label: "2018",
        title: "R. Garnavi, T.M. Lynar, S. Sedai and J.M. Wagner. Image-based risk estimation. Issued by USPTO as US10049286 on August 14, 2018.",
    },
    {
        label: "2018",
        title: "T.M. Lynar, J.A. Moros Ortiz, S. von Cavallar and J.M. Wagner. Creating a work based on cognitive state. Issued by USPTO as US10043548 on August 7, 2018.",
    },
    {
        label: "2018",
        title: "J.R. Kozloski, T.M. Lynar, J.A. Moros Ortiz and J.M. Wagner. System and method for wearable indication of personal risk within a workplace. Issued by USPTO as US10032352 on July 24, 2018.",
    },
    {
        label: "2018",
        title: "J.R. Kozloski, T.M. Lynar, M.D. Nelson and J.M. Wagner. Energy efficient supercomputer job allocation. Issued by USPTO as US10025639 on July 17, 2018.",
    },
    {
        label: "2018",
        title: "N. Gunn, J.M. Lobez Comeras, P. Rogers and J. Wagner. Use of disulfide bonds to form a reversible and reusable coating for nanofluidic devices. Issued by USPTO as US10024852 on July 17, 2018.",
    },
    {
        label: "2018",
        title: "N. Gunn, J.M. Lobez Comeras, P. Rogers and J. Wagner. Use of disulfide bonds to form a reversible and reusable coating for nanofluidic devices. Issued by USPTO as US10024851 on July 17, 2018.",
    },
    {
        label: "2018",
        title: "A.K. Baughman, J.R. Kozloski, T.M. Lynar, S. Pandey and J.M. Wagner. Prediction and optimized prevention of bullying and other counterproductive interactions in live and virtual meeting contexts. Issued by USPTO as US9953029 on April 24, 2018.",
    },
    {
        label: "2018",
        title: "T.M. Lynar, O.J. Smith and J.M. Wagner. Managing flight paths of a soaring aircraft. Issued by USPTO as US9947229 on April 17, 2018.",
    },
    {
        label: "2018",
        title: "J.R. Kozloski, T. Lynar, O. Smith and J. Wagner. Informing first responders based on incident detection, and automatic reporting of individual location and equipment state. Issued by USPTO as US9934674 on April 3, 2018.",
    },
    {
        label: "2018",
        title: "J.S. Baldauf, M. Downton, N. Gunn, S. Harrer, S. Kannam, C. Schieber and J. Wagner. Detection of translocation events using graphene-based nanopore assemblies. Issued by USPTO as US9921181 on March 20, 2018.",
    },
    {
        label: "2018",
        title: "D. Karunamoorthy, T. Lynar, S. Pandey and J. Wagner. 供应和合并共享资源以最大化资源可性的方 法和系统. Issued by CNPTO as CNZL201410706156.1 on January 11, 2018.",
    },
    {
        label: "2017",
        title: "Eberbach, J.R. Kozloski, T. Lynar and J. Wagner. Predicting harmful noise events and implementing corrective actions prior to noise induced hearing loss. Issued by USPTO as US9848269 on December 18, 2017.",
    },
    {
        label: "2017",
        title: "M. Downton, N. Gunn, S. Harrer, P. Rogers, N. Gunn and J. Wagner. Methods for determining binding capability of target ligands with g protein-coupled receptors using translocation through nanochannels. Issued by USPTO as US9791453 on October 16, 2017.",
    },
    {
        label: "2017",
        title: "M. Abedini, R. Chakravorty, L. Ghahremanlou, S. Pervin and J.M. Wagner. Machine training and search engine for providing specialized cognitive healthcare apparatus. Issued by USPTO as US9785749 on October 10, 2017.",
    },
    {
        label: "2017",
        title: "J.R. Kozloski, T.M. Lynar, C.A. Pickover and J.M. Wagner. Directing communications to nodes of a social network using an elastic map. Issued by USPTO as US9762655 on September 17, 2017.",
    },
    {
        label: "2017",
        title: "R. Garnavi, T. Lynar, S. Pandey, Z. Wang and J. Wagner. Balanced ultraviolet light exposure recommendations. Issued by USPTO as US9760686 on September 11, 2017.",
    },
    {
        label: "2017",
        title: "J.R. Kozloski, T. Lynar, O.J. Smith and J. Wagner. Informing first responders based on incident detection, and automatic reporting of individual location and equipment state. Issued by USPTO as US9691262 on June 26, 2017.",
    },
    {
        label: "2017",
        title: "J.R. Kozloski, T. Lynar, J. Moros Ortiz and J. Wagner. System and method for wearable indication of personal risk within a workplace. Issued by USPTO as US9633538 on April 24, 2017.",
    },
    {
        label: "2017",
        title: "Eberbach, C. Whitehead and J. Wagner. Emergency automated vehicle control system to monitor emergency medical events through body area networks. Issued by USPTO as US9599986 on March 20, 2017.",
    },
    {
        label: "2017",
        title: "D. Karunamoorthy, T. Lynar, S. Pandey and J. Wagner. Optimally provisioning and merging shared resources to maximize resource availability. Issued by USPTO as US9590917 on March 6, 2017.",
    },
    {
        label: "2017",
        title: "R. Garnavi, T. Lynar, S. Pandey, Z. Wang and J. Wagner. Mining social media for ultraviolet light exposure analysis. Issued by USPTO as US9554744 on January 30, 2017.",
    },
    {
        label: "2016",
        title: "J.R. Kozloski, T.M. Lynar, C.A. Pickover and J.M. Wagner. Drone-based microbial analysis system. Issued by USPTO as US9481460 on November 1, 2016.",
    },
    {
        label: "2016",
        title: "M. Abedini, R. Chakravorty, L. Ghahremanlou, S. Pervin and J. Wagner. Machine training and search engine for providing specialized cognitive healthcare apparatus. Issued by USPTO as US9424532 on August 23, 2016.",
    },
    {
        label: "2016",
        title: "J.R. Kozloski, T. Lynar, M.D. Nelson and J. Wagner. Energy efficient supercomputer job allocation. Issued by USPTO as US9417928 on August 16, 2016.",
    },
    {
        label: "2016",
        title: "J.R. Kozloski, T. Lynar, C. Pickover and J. Wagner. System and method for collaborative vehicle crash planning and sequence deployment. Issued by USPTO as US9292635 on March 22, 2016.",
    },
    {
        label: "2016",
        title: "D. Karunamoorthy, T. Lynar, S. Pandey and J. Wagner. Optimally provisioning and merging shared resources to maximize resource availability. Issued by USPTO as US9280385 on March 08, 2016.",
    },
    {
        label: "2015",
        title: "J.R. Kozloski, T. Lynar, C. Pickover and J. Wagner. System and method for collaborative vehicle crash planning and sequence deployment. Issued by USPTO as US9108582 on August 18, 2015.",
    },
    {
        label: "2015",
        title: "T. Lynar, K. Steer, C. Vecchiola and J. Wagner. Mobile device offloading task to a peer device and receiving a completed task when energy level is below a threshold level. Issued by USPTO as US9110661 on August 18, 2015.",
    },
    {
        label: "2015",
        title: "T. Lynar, K. Steer, C. Vecchiola and J. Wagner. Mobile device offloading its task to a peer device when available power is below a threshold level. Issued by USPTO as US9104412 on August 11, 2015.",
    },
    {
        label: "2015",
        title: "T. Lynar, K. Steer and J. Wagner. Geospatial optimization for resilient power management equipment. Issued by USPTO as US8943361 on January 27, 2015.",
    },
    {
        label: "2014",
        title: "M. Downton, N. Gunn, S. Harrer, P. Rogers and J. Wagner. Modifying single proteins (gpcr), ligands, and nanopore surfaces to create binding-induced molecular changes of protein-ligand complexes detected in nanochannel translocation. Issued by USPTO as US8835362 on September 16, 2014.",
    },
    {
        label: "2012",
        title: "G. Cecchi, A. Rao, G. Stolovitzky and J. Wagner. Network characterization, feature extraction and application to classification. Issued by USPTO as US8271414 on September 18, 2012.",
    },
]

export default patents
