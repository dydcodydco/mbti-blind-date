// auth로 로그인 유무알 수 있다.
export { auth as middleware } from "@/auth"

// 미들웨어를 적용할 라우트
export const config = {
  matcher: ['/', '/recommend', '/promise', '/promise/form', '/profile', '/messages', '/like', '/:userId'],
}