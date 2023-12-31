# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Things to add / Features to build and complete v3

Finish up scoring system - Added scoring...  to quality check this, continue to test calendar results

New feature...add finder to filter which element is the strongest within a window period - ADDED! But will require edits.
Adding layers to this sorting system - this is on going well.... need to check results, 
Need to finetune gui ren results for sure. 

## Priority List 
+ weekday or weekend - can we show this information? 
+ relook into scoring 
+ filter option to eliminate days that clash with owner year pillar 
+ can we change year pillar check to day pillar check? 
+ review how we should show the results 
+ add in option to leave out the options that has to do with weird hours 

## Future Build 
V4 aim will be to integrate user login page!
maybe also need register account page. 
Rest password also / Forget password! 

Add cleanup to calendar option. 

## Deprioritized! 
Think what do we do with the door information! 
Change door to di zhi...and see whats the impact on overall score. 


FEATURES to be added individual cards 

Gui Ren Feature to implement (3/4 Done.)  > Installed the logic, validations required! 
To push results and show them in the individual cards! 
To add them as part of the overall score feature! 

Navigation + Breadcrumbs?  > adding some navigations. buttons or or simplier features, to add left card right card 
Adding Accordion to hide all details in detailed cards.



## STATUS COMPLETED! Currently on V2.

1.Edit the input features > current too troublesome to use - DONE! \
2.Run analysis without owners > Calendar Feature. - DONE! \
3.Install calendar feature, button installed, backend to be updated - DONE! \
4.Clean up empty strings in final payload  > Logic Built! - DONE! \
5.Add time to result page! - DONE! \
6.Add show more button to load results, instead of displaying all at one go.  - DONE! \
7.Added filter options to sort and arrange results on page - DONE! \
8.To complete version1 function, this function supports Calendar Feature - DONE! \
9.Able to pass calendar results into cards...decide what to show in cards. - add  得令,得地,身旺  - DONE! \
10.Implement radialchart to analyze all five element of the day - Added basic chart template - DONE! \
11.Added Error page handler - DONE! \
12.Installed Google Analytics and added it to project - DONE! \
13.Add default catches if no input is made.  - DONE! \
14.Add a liner to show total listing results. Added Summary tab - DONE! \
15.Include Owner details in Payload - Collect using stores - DONE! \
16.Layout in the individual cards ... owner details to be added - DONE! \
17.New feature ... bring day scoring upfront. - DONE! \
18


## Resource
Form Component: https://tailwindcomponents.com/component/responsive-form-1 \
Calendar Component: https://air-datepicker.com/ \ 
Unicode Symbols: https://www.amp-what.com/ \ 
Unicode Symbols: https://symbl.cc/en/collections/arrow-symbols/ \ 
Card：https://tailwindcomponents.com/component/social-media-bio-card \
Chart: https://layercake.graphics/example/Radar