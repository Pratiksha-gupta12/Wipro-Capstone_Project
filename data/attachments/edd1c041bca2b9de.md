# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/logout.spec.js >> 10. Logout Functionality
- Location: tests/auth/logout.spec.js:19:1

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
  - <launched> pid=13135
  - [pid=13135][err]
  - [pid=13135][err] (process:13141): Gtk-WARNING **: 07:23:28.485: Failed to open display
  - [pid=13135] <gracefully close start>
  - [pid=13135] <kill>
  - [pid=13135] <will force kill>
  - [pid=13135] <process did exit: exitCode=1, signal=null>
  - [pid=13135] starting temporary directories cleanup
  - [pid=13135] finished temporary directories cleanup
  - [pid=13135] <gracefully close end>

```