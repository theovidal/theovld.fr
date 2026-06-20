export default defineNuxtPlugin((nuxtApp) => {
  function show(label: string, err: any) {
    const msg = err?.message ?? String(err)
    const stack = err?.stack ?? '(no stack)'
    const box = document.createElement('pre')
    box.style.cssText =
      'position:fixed;top:0;left:0;right:0;z-index:99999;background:#fff;color:#c00;' +
      'font-size:11px;line-height:1.4;white-space:pre-wrap;word-break:break-word;' +
      'max-height:90vh;overflow:auto;padding:8px;margin:0;border-bottom:3px solid #c00;'
    box.textContent = `[${label}]\n${msg}\n\n${stack}`
    document.body.prepend(box)
  }

  window.addEventListener('error', (e) => {
    show('window.error', e.error ?? e.message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    show('unhandledrejection', e.reason)
  })

  nuxtApp.hook('app:error', (err) => {
    show('nuxt app:error', err)
  })
  nuxtApp.vueApp.config.errorHandler = (err) => {
    show('vue errorHandler', err)
  }
})