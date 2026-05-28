# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> 20. Multiple Invalid Login Attempts
- Location: tests/auth/login.spec.js:612:1

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh --inspector-pipe --no-startup-window
  - <launched> pid=12997
  - [pid=12997][err]
  - [pid=12997][err] (process:13003): Gtk-WARNING **: 07:23:24.933: Failed to open display
  - [pid=12997] <gracefully close start>
  - [pid=12997] <kill>
  - [pid=12997] <will force kill>
  - [pid=12997] <process did exit: exitCode=1, signal=null>
  - [pid=12997] starting temporary directories cleanup
  - [pid=12997] finished temporary directories cleanup
  - [pid=12997] <gracefully close end>

```