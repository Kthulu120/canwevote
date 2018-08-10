// here we list constants
export const STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


export const VOTING_LAWS_DECISION_TREE = {
  "states": {
     "Alabama": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "Some people convicted of a felony may apply to have their vote restored immediately upon completion of their full sentence. Those convicted of certain felony offenses such as murder, rape, incest, sexual crime against children, and treason are not eligible for re-enfranchisement.", "l": ""},
         {"t": "Instructions for Voting Restoration, State of Alabama" ,"l": "https://felonvoting.procon.org/sourcefiles/alabama-rights-restoration-2017.pdf"}
       ]
     },
     "Alaska":{
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "American Samoa": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Arizona":{
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "Automatic voting restoration upon completion of sentence and payment of all fines for first-time, single-felony offenders. Second-time felony offenders may apply for restoration with their county after completion of their sentence. ", "l": ""},
         {"t": "Instructions for Voting Restoration, State of Arizona", "l": "https://felonvoting.procon.org/sourcefiles/arizona-restoration-of-rights-instructions-2017.pdf"}
       ]
     },
     "Arkansas": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "California": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": [
         {"t": "On Sep. 28, 2016, California Gov. Jerry Brown signed AB 2466, a bill that allows convicted felons who are serving time in county jails (rather than state prison) the ability to vote from within jail.", "l": ""},
         {"t": "Assembly Bill No. 2466", "l": "https://felonvoting.procon.org/sourcefiles/ca-assembly-bill-2466.pdf"}
       ]
     },
     "Colorado": {
       "prison": false,
       "after prison": false,
       "after prison and parole": true,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Connecticut": {
       "prison": false,
       "after prison": false,
       "after prison and parole": true,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "District of Columbia": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Delaware": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "On Apr. 16, 2013 the Delaware Senate passed the Hazel D. Plant Voter Restoration Act in a 15-6 vote. The act amended the Delaware Constitution by removing the five year waiting period for most felons to regain the ability to vote. People convicted of a felony (with some exceptions) are now automatically eligible to vote after serving their full sentence including incarceration, parole, and probation. Exceptions: People convicted of murder or manslaughter, a felony offense against public administration involving bribery, improper influence, or abuse of office, or a felony sexual offense remain permanently disqualified from voting.", "l": ""},
         {"t": "Hazel D. Plant Voter Restoration Act", "l": "https://felonvoting.procon.org/sourcefiles/hazel-d-plant-voter-restoration-act.pdf"},
         {"t": "Delaware Constitution: Article V Section 2", "l": "https://felonvoting.procon.org/sourcefiles/deleware-constitution-article-V-2014.pdf"},
       ]
     },
     "Federated States of Micronesia": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Florida": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "On Mar. 9, 2011 the Florida rules of Executive Clemency were toughened. Automatic restoration of civil rights and the ability to vote will no longer be granted for any offenses. All individuals convicted of any felony will now have to apply for executive clemency after a five year waiting period. Individuals who are convicted, or who have previously been convicted, of certain felonies such as murder, assault, child abuse, drug trafficking, arson, etc. are subject to a seven year waiting period and a clemency board hearing to determine whether or not the ability to vote will be restored.'Prior to the Mar. 9, 2011 rule change, some individuals convicted of nonviolent felonies were re-enfranchised automatically by the Clemency Board upon completion of their full sentences, including payment of fines and fees.'", "l": ""},
        {"t": "According to the Florida Rights Restoration Coalition website (accessed Aug. 15, 2012), 'If you were convicted of a felony in another state and had your civil rights restored before you became a Florida resident, you do not need to apply for RCR [restoration of civil rights] in Florida.'", "l": ""},
        {"t": "Florida Rules of Executive Clemency", "l": "https://felonvoting.procon.org/sourcefiles/florida-rules-executive-clemency-2017.pdf"},
        {"t": "Florida Clemency Application", "l": "https://felonvoting.procon.org/sourcefiles/florida_clemency_application.pdf"},
       ]
     },
     "Georgia": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Guam": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Hawaii": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Idaho": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Illinois": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Indiana": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Iowa": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "On Jan. 14, 2011, the Republican Governor of Iowa, Terry Branstad, issued executive order 70, rescinding a law allowing people convicted of a felony to automatically have their ability to vote restored after completing their sentences. The automatic voting restoration law had been instituted by former Democratic Governor Tom Vilsack's signing of executive order 42 in 2005. Felons in Iowa must now pay all outstanding monetary obligations to the court in addition to completing their sentence and period of parole or probation. People convicted of a felony may then apply for restoration of the ability to vote.", "l": ""},
         {"t": "Executive Order 70", "l": "https://www.procon.org/sourcefiles/Exec_Order_70_Iowa_voting.pdf"},
         {"t": "Executive Order 42", "l": "https://felonvoting.procon.org/sourcefiles/vilsack-eo-42.pdf"},
         {"t": "Iowa Streamlined Application for Resotration of Citizenship Rights", "l": "https://felonvoting.procon.org/sourcefiles/iowa-restoration-of-rights-instructions-2017.pdf"}
       ]
     },
     "Kansas": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Kentucky": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": true,
       "notes": [
         {"t": "On Nov. 24, 2015, Kentucky Gov. Steven L. Beshear issued executive order 2015-871 to automatically restore the right to vote to nonviolent felons who have completed probation, parole, and who have no outstanding court-ordered restitution payments. On Dec. 22, 2015, newly elected Gov. Matthew G. Bevin issued executive order 2015-052, rescinding the previous Governor’s executive order. As a result, people convicted of any felony in Kentucky must individually apply with the Governor to have their voting rights restored.", "l": ""},
         {"t": "Executive Order 2015-052", "l": "https://felonvoting.procon.org/sourcefiles/bevin-executive-order-2015-052.pdf"},
         {"t": "Executive Order 2015-871", "l": "https://felonvoting.procon.org/sourcefiles/kentucky-executive-order-felon-voting.pdf"},
         {"t": "Kentucky Application for Restoration of Civil Rights", "l": "https://felonvoting.procon.org/sourcefiles/kentucky-rights-restoration-application.pdf"}
       ]
     },
     "Louisiana": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Maine": {
       "prison": true,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Marshall Islands": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Maryland": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": [
         {"t": " On Feb. 9, 2016, the Maryland General Assembly overrode the Governor's veto of SB 340 and restored the vote to all convicted felons immediately upon their release from prison. Previously, convicted felons in Maryland had to complete all parole and probation before they were able to vote.", "l": ""},
         {"t": "Senate Bill 340", "l": "https://felonvoting.procon.org/sourcefiles/maryland-senate-bill-340.pdf"},
       ]
     },
     "Massachusetts": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Michigan": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Minnesota": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Mississippi": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "People convicted of a felony are barred from voting only if they have been convicted of one or more of the following specific felony crimes: 'murder, rape, bribery, theft, arson, obtaining money or goods under false pretense, perjury, forgery, embezzlement, bigamy, armed robbery, extortion, felony bad check, felony shoplifting, larceny, receiving stolen property, robbery, timber larceny, unlawful taking of a motor vehicle, statutory rape, carjacking, or larceny under lease or rental agreement.'To regain the ability to vote, an individual, after completion of his/her sentence, must go to his/her state representative and convince them to personally author a bill restoring the vote to that individual. Both houses of the legislature must then pass the bill. Re-enfranchisement can also be granted directly by the governor. Individuals convicted of felonies in Mississippi remain eligible to vote for US President in federal elections.", "l": ""},
         {"t": "Mississippi Constitution: Article 12, Section 241", "l": "https://felonvoting.procon.org/sourcefiles/MissArticle12.pdf"},
         {"t": "Mississippi Constitution: Article 12, Section 253", "l": "https://felonvoting.procon.org/sourcefiles/Mississippi_Article12Section%20253.pdf"}
       ]
     },
     "Missouri": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Montana": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Nebraska": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "The vote is automatically restored to all people convicted of a nonviolent felony after the sentence completion. People convicted of a violent felony and all second- time felony offenders (whether violent or nonviolent) are not automatically re-enfranchised. Those individuals must seek restoration of their voting abilities in the court in which they were convicted.", "l": ""},
         {"t": "Nevada Code: Section NRS 213.09", "l": "https://felonvoting.procon.org/sourcefiles/NevadaCode.pdf"}
       ]
     },
     "Nevada": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "New Hampshire": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "New Jersey": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "New Mexico": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "New York": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": [
         {"t": "On Apr. 18, 2018, New York Governor Andrew Cuomo issued Executive Order 181 to restore the right to vote to parolees, dependent upon review of records by the Governor's Office. The Commissioner of the Department of Corrections and Community Supervision will submit records for individuals released from prison in the prior month beginning on May 1, 2018 for review. Previously, voting was allowed only after completion of parole.", "l": ""},
         {"t": "Executive Order No. 181", "l": "https://felonvoting.procon.org/sourcefiles/governor-cuomo-executive-order-apr-2018.pdf"}
       ]
     },
     "North Carolina": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "North Dakota": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "orthern Mariana Islands": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Ohio": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Oklahoma": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Oregon": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Palau": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Pennsylvania": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Puerto Rico": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Rhode Island": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "South Carolina": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "South Dakota": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": [
         {"t": "On Mar. 19, 2012, HB 1247 was enacted. The bill took the ability to vote away from convicted felons serving terms of probation. Previously, only people on parole or incarcerated were ineligible to register to vote. Now convicted felons must serve their full term of incarceration, parole, and probation before they may register to vote.", "l": ""},
         {"t": "South Dakota: HB 1247", "l": "https://felonvoting.procon.org/sourcefiles/south-dakota-hb-1274.pdf"}
       ]
     },
     "Tennessee": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "All people convicted of a felony since 1981, except for some serious felonies such as murder, rape, treason and voter fraud, may apply to the Board of Probation and Parole for voting restoration upon completion of their sentence. People convicted of a felony between Jan. 15, 1973, and May 17, 1981, are eligible to register to vote regardless of the crime committed. People convicted of certain felonies prior to Jan. 15, 1973 may be barred from voting.", "l": ""},
         {"t": "Tennessee Restoration of Voting Rights", "l": "https://felonvoting.procon.org/sourcefiles/tennessee-felony-voter-registration-2017.pdf"}
       ]
     },
     "Texas": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Utah": {
       "prison": false,
       "after prison": true,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Vermont": {
       "prison": true,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": false,
       "notes": []
     },
     "Virgin Island": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": []
     },
     "Virginia": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": [
         {"t": "On Apr. 18, 2014 Governor Terry McAuliffe announced changes to Virginia's restoration of rights process. Under the new rules, people convicted of non-violent felonies (including drug crimes) will have their ability to vote automatically restored providing that they: 1. have completed their term of incarceration and all probation or parole; 2. have paid all court costs, fines, and any restitution; and 3. have no pending felony charges.", "l": ""},
         {"t": "On June 23, 2015 Governor McAuliffe announced that 'outstanding court costs and fees will no longer prohibit an individual from having his or her rights restore'", "l": ""},
         {"t": "On Apr. 22, 2016, Governor McAuliffe signed an order restoring the vote to all 200,000+ felons in Virginia, regardless of their charge, who had completed their term of incarceration and their term of probation or parole. The New York Times reports (Apr. 22, 2016, 'Virginia Governor Restores Voting Rights to Felons') that the governor's action will not apply to felons released in the future, although the Governor's aides say he plans 'to issue similar orders on a monthly basis to cover people as they are released'", "l": ""},
         {"t": "According to an email from the Virginia Department of Elections that was provided to ProCon.org on Mar. 28, 2018, 'Virginia applies the restoration policy of the state the conviction was handed down.' So, for instance, if a person was convicted in an automatic restoration state such as California, and then moved to Virginia, that individual would be eligible to register to vote in Virginia. ", "l": ""},
         {"t": "Governor McAuliffe's Statement on the Virginia Supreme Court Decision", "l": "https://felonvoting.procon.org/sourcefiles/mcauliffe-statement-on-virginia-supreme-court-ruling.pdf"},
         {"t": "Governor McAuliffe Restores Voting and Civil Rights to Over 200,000 Virginians", "l": "https://felonvoting.procon.org/sourcefiles/mcauliffe-restores-vote-to-all-felons-2016.pdf"},
         {"t": "Governor McAuliffe Announces New Reforms to Restoration of Rights Process", "l": "https://felonvoting.procon.org/sourcefiles/governor-macauliffe-removes-fines-restriction-2015.pdf"},
         {"t": "Governor McAuliffe’s Letter Outlining His Policy Changes", "l": "https://felonvoting.procon.org/sourcefiles/mcauliffe-changes-to-virginia-restoration-of-rights.pdf"},
         {"t": "", "l": ""},
       ]
     },
     "Washington": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": [
         {"t": "All people with a felony conviction must re-register to vote after completion of their sentence and all parole and probation. However, the Secretary of State's website states that 'your voting rights can be revoked if the sentencing court determines that you have failed to comply with the terms of your legal financial obligations.'", "l": ""},
         {"t": "Felons and Voting Rights", "l": "https://felonvoting.procon.org/sourcefiles/washington-felony-voter-registration-2017.pdf"},
       ]
     },
     "West Virginia": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Wisconsin": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": true,
       "perm": false,
       "notes": []
     },
     "Wyoming": {
       "prison": false,
       "after prison": false,
       "after prison and parole": false,
       "after 3 ps": false,
       "perm": true,
       "notes": [
         {"t": "'Effective July 1, 2017, W.S. §7-13-105 allows individuals convicted, that are first time nonviolent felons, to automatically have their right to vote restored if they completed their supervision or were discharged from an institution on or after January 1, 2010. Individuals who completed their sentence prior to January 1, 2010, are required to apply for restoration of the right to vote.' All others convicted of a felony must be pardoned or have their rights restored by the governor'", "l": ""},
         {"t": "Wyoming Restoration of Voting Rights", "l": "https://felonvoting.procon.org/sourcefiles/wyoming-restoration-of-voting-rights-2017.pdf"},
         {"t": "Wyoming Restoration of Voting Rights Application", "l": "https://felonvoting.procon.org/sourcefiles/wyoming-restoration-of-voting-rights-application.pdf"},
       ]
     }
  },
  "sources": {
    "ProCon.org": "https://felonvoting.procon.org/view.resource.php?resourceID=000287",
    "National Conference of State Legislatures": "http://www.ncsl.org/research/elections-and-campaigns/felon-voting-rights.aspx"
  }
}
