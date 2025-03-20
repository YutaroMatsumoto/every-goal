<script lang="ts">
  import GoogleLoginButton from '$lib/components/ui/_button/GoogleLoginButton/GoogleLoginButton.svelte';
  import PrimaryButton from '$lib/components/ui/_button/PrimaryButton/PrimaryButton.svelte';
  import TextButton from '$lib/components/ui/_button/TextButton/TextButton.svelte';
  import Icon from '$lib/components/ui/_icon/Icon.svelte';
  import { createModal } from '$lib/globalState/modal';

  let email = '';
  let password = '';
  const modal = createModal;
	let { data } = $props()
  let { supabase } = $derived(data)

  function handleLogin() {
    // ログイン処理
    console.log('Login with:', email, password);
  }

  function handleGoogleLogin() {
    // Googleログイン処理
    console.log('Google login');
  }

  function handleFacebookLogin() {
    // Facebookログイン処理
    console.log('Facebook login');
  }

  $effect(() => {console.log({data})})

</script>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center">
  <div class="max-w-md w-full mx-auto p-6 space-y-6">
    <div class="space-y-4">
      <input
        type="email"
        placeholder="メールアドレス"
        bind:value={email}
        class="w-full px-4 py-3 rounded-full bg-white text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <div class="relative">
        <input
          type="password"
          placeholder="パスワード"
          bind:value={password}
          class="w-full px-4 py-3 rounded-full bg-white text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="absolute right-4 top-1/2 -translate-y-1/2">
         <Icon type="eye" color="disabled" />
        </button>
      </div>
    </div>

    <div class="w-full">
    <PrimaryButton onclick={modal.login}>ログイン</PrimaryButton>
  </div>

    <!-- <button
      class="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
      on:click={handleLogin}
    >
      ログイン
    </button> -->

    <TextButton
      onclick={() => {}}
      class="mx-auto block text-sm text-gray-600 hover:text-gray-800"
    >
      パスワードを忘れた場合
    </TextButton>

    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-2 bg-gray-50 text-gray-500">または</span>
      </div>
    </div>

    <div class="space-y-3">
      <GoogleLoginButton {supabase} />
    </div>

    <div class="text-center text-sm text-gray-600">
      アカウントをお持ちでない方は
      <a href="/signup" class="text-blue-600 hover:text-blue-800 font-medium">新規登録</a>
    </div>
  </div>
</div>

<!-- rror=server_error&error_code=unexpected_failure&error_description=Database+error+saving+new+user#error=server_error&error_code=unexpected_failure&error_description=Database+error+saving+new+user -->