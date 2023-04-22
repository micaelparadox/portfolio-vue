# portfolio

## Project setup
```
yarn install
```
# Vercel CLI Installation Guide

This guide will help you install the Vercel CLI on your Linux or Windows system.

## Prerequisites

Before installing the Vercel CLI, you'll need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from the official website: [https://nodejs.org/](https://nodejs.org/)

## Installation

### Linux

1. Open your terminal and install the Vercel CLI globally using one of the following commands:

   - Using npm:
     ```bash
     npm install -g vercel
     ```
     
   - Using Yarn:
     ```bash
     yarn global add vercel
     ```

2. If you used Yarn to install the Vercel CLI, you may need to add the Yarn global binary folder to your PATH. Follow these steps:

   a. Run `yarn global bin` to find the path to the Yarn global binary folder.
   
   b. Open your shell profile file (e.g., `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc`) and add the following line at the end:
   
      ```bash
      export PATH="/path/to/yarn/global/bin:$PATH"
      ```
      
      Replace `/path/to/yarn/global/bin` with the path obtained in step 2a.
      
   c. Save the file and restart your terminal or run `source ~/.bashrc` (or the appropriate command for your shell, such as `source ~/.zshrc`) to reload your shell profile.

### Windows

1. Open your command prompt or PowerShell and install the Vercel CLI globally using one of the following commands:

   - Using npm:
     ```powershell
     npm install -g vercel
     ```
     
   - Using Yarn:
     ```powershell
     yarn global add vercel
     ```

2. Ensure that the global package installation directory is included in your system's PATH:

   - For npm, the global packages are usually installed in `%AppData%\npm`. Make sure this directory is included in your system's PATH.
   - For Yarn, the global packages are usually installed in `%LocalAppData%\Yarn\bin`. Make sure this directory is included in your system's PATH.

   To update your PATH, search for "Environment Variables" in the Start menu, and click on "Edit the system environment variables". Click on "Environment Variables" and under "System variables", find the variable named "Path". Click "Edit" and add the appropriate directory path for your system.

## Verification

After following the installation steps for your platform, you can verify that the Vercel CLI is installed correctly by running:

```bash
vercel --version
