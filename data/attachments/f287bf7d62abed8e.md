# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/filter.spec.js >> Product Filter Tests >> TC_PRODUCT_025 - Verify Product Titles Are Visible
- Location: tests/product/filter.spec.js:67:9

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-PRnQfy -juggler-pipe -silent
  - <launched> pid=11095
  - [pid=11095][err] [11097] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=11095][err] Error: no DISPLAY environment variable specified
  - [pid=11095] <process did exit: exitCode=1, signal=null>
  - [pid=11095] starting temporary directories cleanup
  - [pid=11095] <gracefully close start>
  - [pid=11095] <kill>
  - [pid=11095] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=11095] finished temporary directories cleanup
  - [pid=11095] <gracefully close end>

```