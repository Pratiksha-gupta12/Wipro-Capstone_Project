# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/registration.spec.js >> Registration with Invalid Email
- Location: tests/auth/registration.spec.js:50:1

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
  - <launched> pid=13365
  - [pid=13365][err]
  - [pid=13365][err] (process:13371): Gtk-WARNING **: 07:23:34.461: Failed to open display
  - [pid=13365] <gracefully close start>
  - [pid=13365] <kill>
  - [pid=13365] <will force kill>
  - [pid=13365] <process did exit: exitCode=1, signal=null>
  - [pid=13365] starting temporary directories cleanup
  - [pid=13365] finished temporary directories cleanup
  - [pid=13365] <gracefully close end>

```