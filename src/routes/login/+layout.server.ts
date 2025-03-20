import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  // セッションを取得
  const session = locals.session;
  console.log({ locals })

  // セッションが存在する場合（ログイン済みの場合）はホーム画面へリダイレクト
  if (session) {
    throw redirect(303, '/');
  }

  // セッションがない場合は通常通りログイン画面を表示
  return {
    session
  };
};