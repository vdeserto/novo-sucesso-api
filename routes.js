import { Router } from 'express'

import AlunoController from './app/Controllers/AlunoController.js'

const routes = Router()

routes.get('/alunos', (request, response, next) => {
  AlunoController.index(request, response, next)
})

export default routes