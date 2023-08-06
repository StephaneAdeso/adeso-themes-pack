# Generic info about this theme

If you want to use this repository to develop your own theme, you will find this information useful.


In VSCode, themes are simply JSON files with the list of colors you want to use. Although I love JSON (much more than [YAML](https://noyaml.com/)), there are many things that cannot be done. So I decided to create a structure in TypeScript to generate those JSON more easily. If I had to start over, I would surely change some things knowing what I know now, but since this is just a hobby and it works well, it has stayed that way. I hope you enjoy it and have fun creating your own themes.

## Package.json scripts

In `package.json`, you will find two useful scripts:

* **build**: will launch a manual build of the themes JSON files.
* **watch**: This script will make Nodemon watch for any changes in your TypeScript file. There is no need to use the build script.

## Add a color theme

If you want to add a color theme, just add a copy one of the theme files in the `theme-config` folder and register it in the `index.ts` file.

After adding your theme, remember to register it also in the `package.json`.

## Editing this project

If you decide to edit this project, I will give you tips that may help you.

Use the theme JSON file to find the correct selector. VSCode has internally the JSON Schema for the VSCode Themes, so intellisense (autocomplete) will help you a lot.

You will find the configuration of the VSCode interface colors in the `ui-colors.ts` file and the text syntax color in the `editor-colors.ts` file.


