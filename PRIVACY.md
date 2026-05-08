# Privacy Policy — Leichte Sprache Checker

_Last updated: <!-- YYYY-MM-DD --> 2026-05-08_

This privacy policy describes how the **Leichte Sprache Checker** browser extension ("the extension") handles data.
The extension is published by **ACOLONO GmbH** ("we", "us").

Contact: office@acolono.com.

## Summary in plain language

- We do **not** operate any tracking or analytics.
- The extension stores your settings locally in your browser.
- When you ask the extension to convert or check a text, that text is sent to the **Leichte Sprache API** you have configured in the settings — and only there.
- We do not collect, sell, or share personal data.

## What the extension stores locally

The extension uses the browser's `storage.sync` and `storage.session` APIs to store:

- The **API URL** you configured (default `https://api.leichte-sprache.ai`).
- An **optional API key** you entered yourself (stored only in your browser, never read by us).
- Your interface preferences (UI language, max iterations, target violations).
- A short-lived **pending request** (the text you just selected and the action you triggered) so the side panel can pick it up after opening. This is cleared as soon as the panel reads it.

Nothing in this list is sent anywhere by the extension itself. `storage.sync` may be synchronised by your browser vendor (Chrome/Firefox sync) according to your browser settings.

## What is sent to the Leichte Sprache API

When you trigger **Convert** or **Check**, the extension sends the following to the API URL configured in the settings:

- The text you selected or pasted.
- The conversion parameters (max iterations, target violations).
- If configured, a Bearer token in the `Authorization` header.

Requests are made over HTTPS to the host you configured. The default host is operated by ACOLONO GmbH at `https://api.leichte-sprache.ai`. If you point the extension at a different host, your text is sent to that host instead.

We do not log requests beyond what is technically necessary to operate the API service.

## What is **not** collected

- We do not collect IP addresses, device identifiers, or browsing history.
- We do not use cookies, local analytics, or third-party trackers.
- We do not read the content of web pages you visit unless you actively select text and trigger an action.

## Permissions and why we need them

| Permission | Why |
| --- | --- |
| `contextMenus` | To add the "Convert / Check" entries to the right-click menu. |
| `storage` | To store your settings locally. |
| `sidePanel` (Chrome) / `sidebar_action` (Firefox) | To show the extension UI in a side panel. |
| `scripting`, `activeTab` | To read the current text selection in the active tab when you trigger an action. |
| Host permissions for the configured API URL | To send your text to the Leichte Sprache API. |

## Children

The extension is not directed at children under 13. We do not knowingly process data from children.

## Changes to this policy

We may update this policy. Material changes will be reflected in the "Last updated" date above and announced in the extension's release notes.

## Contact

For questions about this policy or data subject requests (access, deletion, correction), please contact:
ACOLONO GmbH
Fillgradergasse 12-14/1a
1060 Vienna
office@acolono.com
