import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(usuario: string, senha: string) {
    if (usuario !== 'usuario' || senha !== '123') {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const payload = {
      sub: 1,
      username: usuario,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      expires_in: 3600,
      token_type: 'Bearer',
    };
  }
}
