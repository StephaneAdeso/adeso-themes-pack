# Generic info about this theme

If you want to use this repository to develop your own theme, you will find this information useful.


When I started developing this theme, I discovered that working directly on the JSON file was very annoying and not very effective.


I also discovered that you use the same colors in a lot of theme configurations.


So I decided to create an automatic TypeScript theme generation system.

## Package.json scripts

In `package.json`, you will find two useful scripts:

* **build**: will launch a manual build of the themes JSON files.
* **watch**: This script will make Nodemon watch for any changes in your TypeScript file. There is no need to use the build script.

## Add a color theme

If you want to add a color theme, just add a `new Theme()` in the `theme-list.ts` file.

After adding your theme, remember to register it in the `package.json`.

## Editing this project

If you decide to edit this project, I will give you tips that may help you.

Use the theme JSON file to find the correct selector. VSCode has internally the JSON Schema for the VSCode Themes, so intellisense (autocomplete) will help you a lot.

You will find the configuration of the VSCode interface colors in the `ui-colors.ts` file and the text syntax color in the `editor-colors.ts` file.


