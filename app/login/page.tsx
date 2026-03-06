export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-16">
      <div className="w-full rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">登录 / 注册</h1>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          第一版先保留登录入口页面，下一阶段接入 Supabase Auth。
        </p>

        <form className="mt-8 grid gap-4">
          <input
            type="email"
            placeholder="邮箱"
            className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="密码"
            className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
          />
          <button
            type="button"
            className="rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-gray-800"
          >
            继续
          </button>
        </form>
      </div>
    </div>
  );
}
