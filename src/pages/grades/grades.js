import firstgradeImg from "../../assets/grades/firstgrade2.png"
import secondgradeImg from "../../assets/grades/secondgrade.png"
import thirdgradeImg from "../../assets/grades/thirdgrade.png"
import fourthgradeImg from "../../assets/grades/fourthgrade.png"
import fifthgradeImg from "../../assets/grades/fifthgrade.png"
import sixthgradeImg from "../../assets/grades/sixthgrade.png"
import seventhgradeImg from "../../assets/grades/seventhgrade.png"

const grades = [
        {
        grade: 1,
        image: firstgradeImg,
        name: "firstgrade",
        subjects: ["1-10", "10-20", "Mønstre", "Subitizing", "Partall","Oddetall", "Måling", "Klokka", "Addisjon", "Subtraksjon" ]
    },
     {
        grade: 2,
        name: "secondgrade",
        image: secondgradeImg,
        subjects: ["1-10", "10-20", "Mønster", "Subitizing", "Partall","Oddetall", "Måling", "Klokka", "Addisjon", "Subtraksjon" ]
    },
    {
        grade: 3,
        name: "thirdgrade",
        image: thirdgradeImg,
        subjects: ["Addisjon", "Subtraksjon", "Multiplikasjon", "Divisjon","Likhetstegn", "Sammenligning", "Måling", "Koordinater"]
    },
    {
        grade: 4,
        name: "fourthgrade",
        image: fourthgradeImg,
        subjects: ["Addisjon", "Subtraksjon", "Multiplikasjon", "Divisjon", "Likhetstegn","Sammenligne", "Måling", "Koordinater" ]
    },
    {
        grade: 5,
        name: "fifthgrade",
        image: fifthgradeImg,
        subjects: ["Brøk", "Desimaltall", "Prosent", "Multiplikasjon", "Divisjon", "Sannsynlighet", "Ligninger", "Økonomi", "Tid"]
    },
    {
        grade: 6,
        name: "sixthgrade",
        image: sixthgradeImg,
        subjects: ["Desimaltall", "Figurer 2D", "Figurer 3D", "Symmetri", "Sirkler", "Areal", "Volum"]
    },
    {
        grade: 7,
        name: "seventhgrade",
        image: seventhgradeImg,
        subjects: ["Brøk", "Desimaltall", "Prosent", "Negative tall", "Multiplikasjon", "Divisjon", "Regneuttrykk", "Likninger", "Ulikheter", "Sentralmål","Tabeller", "Diagrammer", "Økonomi"]
    }
    ]   


    export default grades