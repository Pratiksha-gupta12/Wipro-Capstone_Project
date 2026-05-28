# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Service Tests >> TC_PRODUCT_001 - Search Existing Product
- Location: tests/product/product.spec.js:223:9

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-bF1yDo -juggler-pipe -silent
  - <launched> pid=11260
  - [pid=11260][err] [11262] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=11260][err] Error: no DISPLAY environment variable specified
  - [pid=11260] <process did exit: exitCode=1, signal=null>
  - [pid=11260] starting temporary directories cleanup
  - [pid=11260] <gracefully close start>
  - [pid=11260] <kill>
  - [pid=11260] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=11260] finished temporary directories cleanup
  - [pid=11260] <gracefully close end>

```