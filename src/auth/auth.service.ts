import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(usuario: string, senha: string) {
    if (usuario === 'usuario' && senha === '123') {
      return {
        success: true,
        token: 'fake-jwt-token',
      };
    }

    return {
      success: false,
      message: 'Usuário ou senha inválidos.',
    };
  }
}
