import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public index({ response }: HttpContextContract) {
    return response.json({ message: 'index' })
  }

  public login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public process({ response }: HttpContextContract) {
    console.info('process')
    return response.redirect().back()
  }
}
