var week = new Date()
var day = week.getDay()
var day = 5

switch (day) {
    case 1:
        week_day.innerHTML = `Segunda-Feira`
        horario_aula.innerHTML = `18:45 até 19:35`
        materia.innerHTML = `Cloud Computing - G27`
        prof.innerHTML = `Prof. Bruno Nunes`

        horario_aula_2.innerHTML = `19:35 até 20:25`
        materia_2.innerHTML = `Cloud Computing - G27`
        prof_2.innerHTML = `Prof. Bruno Nunes`

        break
    case 2:
        week_day.innerHTML = `Terça-Feira`
        horario_aula.innerHTML = `13:20 até 15:00`
        materia.innerHTML = `Algebra Linear - A37`
        prof.innerHTML = `Prof. Carlos Gustavo`

        horario_aula_2.innerHTML = `18:45 até 22:15`
        materia_2.innerHTML = `Web-Backend - A22`
        prof_2.innerHTML = `Prof. Andre Teixeira`
        
        break
    case 3:
        week_day.innerHTML = `Quarta-Feira`
        horario_aula.innerHTML = `16:50 até 17:40`
        materia.innerHTML = `Teoria dos Grafos - A22`
        prof.innerHTML = `Prof. Adolfo Rodrigues`

        horario_aula_2.innerHTML = `17:40 até 18:30`
        materia_2.innerHTML = `Teoria dos Grafos - A22`
        prof_2.innerHTML = `Prof. Adolfo Rodrigues`

        break
    case 4:
        week_day.innerHTML = `Quinta-Feira`
        horario_aula.innerHTML = `18:45 até 20:25`
        materia.innerHTML = `Residencia - G16`
        prof.innerHTML = `Prof. Roberto Wagner`

        horario_aula_2.innerHTML = `20:35 até 22:15`
        materia_2.innerHTML = `Residencia - G16`
        prof_2.innerHTML = `Prof. Roberto Wagner`

        break
    case 5:
        week_day.innerHTML = `Sexta-Feira`
        horario_aula.innerHTML = `18:45 até 20:25`
        materia.innerHTML = `Lab Programação - G27`
        prof.innerHTML = `Prof. Kamilla Doria`

        horario_aula_2.innerHTML = `20:35 até 22:15`
        materia_2.innerHTML = `Lab Programação - G27`
        prof_2.innerHTML = `Prof. Kamilla Doria`

        break
    default:
        week_day.innerHTML = `Final de semana`
        horario_aula.innerHTML = `------`
        materia.innerHTML = `Não Possui Aula`
        prof.innerHTML = `----------------`

        horario_aula_2.innerHTML = `------`
        materia_2.innerHTML = `Não Possui Aula`
        prof_2.innerHTML = `----------------`
        break
}