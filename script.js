let students = [
    {
        name: 'Marlon Fernandes',
        noteOne: 6,
        noteTwo: 8
    },
    {   
        name:'Guilherme Amorim',
        noteOne: 9,
        nomteTwo: 8
    },
    {   
        name:'Iury Nogueira',
        noteOne: 6,
        noteTwo: 6
    }    
]

function calculateAverage(noteOne, noteTwo){
    let average = (noteOne + noteTwo) / 2
    return average
}

for (let student of students) {
    averageIndividual = calculateAverage(student.noteOne, student.noteTwo)

    let passOrFail = averageIndividual >= 7
    ? `\nParabéns, ${student.name}! Você foi aprovado no concurso!`
    : `\nNão foi dessa vez, ${student.name}!. Tente novamente!`

    alert(`A média do aluno $(student.name) é $(averageIndividual) $(passOrFail)`)
}

