import { redirect } from '@sveltejs/kit';
import {
  createBrowserClient,
  createServerClient,
  isBrowser,
} from "@supabase/ssr";
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import type { LayoutLoad } from "./$types";
import { pathName, PUBLIC_PATHS } from '$lib/const/route';
// 認証が不要なパス一覧

export const load: LayoutLoad = async ({ data, url, depends, fetch }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends("supabase:auth");

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies;
          },
        },
      });

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 現在のパスを取得
  const path = url.pathname;

   // 認証が必要なパスで、セッションがない場合はログインページにリダイレクト
  if (!session && !PUBLIC_PATHS.some(publicPath => path.startsWith(publicPath))) {
    throw redirect(307, pathName.login);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { session, supabase, user };
};
