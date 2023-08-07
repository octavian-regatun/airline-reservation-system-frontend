import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);

  const jwt = authService.getJwt();
  const jwtDecoded = authService.getJwtDecoded(jwt);

  if (!authService.isJwtValid(jwtDecoded)) return authService.signOut();

  await authService.getUser();

  return true;
};
