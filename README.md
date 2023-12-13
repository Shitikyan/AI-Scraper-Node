# Scraper Project

This project involves building a web scraper to extract specific data from websites. The scraper is designed to gather information from various sources and perform specific tasks with the extracted data.

## Overview

The primary objective of this project is to create a robust and efficient scraper capable of retrieving data from targeted websites. The scraper will be built using [insert programming language or framework here] and designed to perform the following tasks:

- Fetch data from specific websites
- Parse and extract relevant information
- Store extracted data in a structured format

## Project Structure

The project directory is structured as follows:

## Available Commands

### `npm run dev`

Starts the application in development mode using `nodemon` to watch for changes in the TypeScript files.

### `npm start`

Starts the application using `ts-node` to directly run the TypeScript files.

### `npm test`

This command is a placeholder for running tests. Currently, it throws an error indicating that no tests have been specified.

### `npm run lint`

Executes ESLint to analyze and detect linting errors in the source code located in the `src` directory.

### `npm run lint:fix`

Fixes linting errors automatically where possible using ESLint.

### `npm run prettier`

Checks for code formatting issues using Prettier in the source code located in the `src` directory.

### `npm run prettier:fix`

Attempts to automatically fix code formatting issues using Prettier in the source code.

### `npm run check-types`

Runs TypeScript's compiler (`tsc`) to check types and provide error information about TypeScript files.

### `npm run format`

Executes `npm run prettier:fix` and `npm run lint:fix` sequentially to format and fix issues in the source code.

### `npm run test-all`

Runs code formatting checks and linting checks using `npm run format` and `npm run lint` consecutively.

### `npm run prepare`

Installs Husky's git hooks via `husky install` to run pre-commit hooks before each commit.
