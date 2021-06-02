import Aluno from './Models/Aluno.js'

export default {
  async index(request, response, next) {
    await Aluno
      .query()
      .select()
      .from('alunos')
  }
}

